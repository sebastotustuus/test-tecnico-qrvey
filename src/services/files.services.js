const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const xlsx = require('xlsx');
const { getArrayUsers } = require('../utils/helpers');

module.exports = class FileServices {
  async generatePdf(list, templateName = 'template-pdf') {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const content = await this.compileHbs(templateName, list);
      await page.setContent(content);
      await page.emulateMediaType('screen');
      await page.pdf({
        path: 'mypdf.pdf',
        format: 'A4',
        printBackground: true,
      });
      await browser.close();
      return {
        msg: 'File created succesfully',
        relativeUrl: path.join(process.cwd(), 'mypdf.pdf'),
      };
    } catch (error) {
      console.log(error);
    }
  }
  async exportXLS(response) {
    try {
      const result = getArrayUsers(response);
      const columnsNames = ['Name', 'Username', 'Email', 'Position'];
      const fileName = 'users-excel.xlsx';
      await this.exportWorkSheet(result, columnsNames, 'Users', fileName);
    } catch (err) {
      throw err;
    }
  }

  async exportWorkSheet(data, workSheetColumnNames, workSheetName, fileName) {
    const workBook = xlsx.utils.book_new();
    const workSheetData = [workSheetColumnNames, ...data];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    xlsx.writeFile(
      workBook,
      path.resolve(process.cwd(), 'src', 'tmp', fileName),
    );
  }

  async compileHbs(templateName, data) {
    const filePath = path.join(
      process.cwd(),
      'src',
      'utils',
      'templates',
      `${templateName}.hbs`,
    );
    const html = fs.readFileSync(filePath, 'utf-8');
    return hbs.compile(html)({ data: data });
  }
};
