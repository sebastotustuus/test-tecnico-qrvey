const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const xlsx = require('xlsx');
const { getArrayUsers } = require('../utils/helpers');

module.exports = class FileServices {
  async generatePdf(list, templateName = 'template-pdf') {
    try {
      const fileName = 'users-table.pdf';
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const content = await this.compileHbs(templateName, list);
      await page.setContent(content);
      await page.emulateMediaType('screen');
      await page.pdf({
        path: `/tmp/${fileName}`,
        format: 'A4',
        printBackground: true,
      });
      await browser.close();
      return fileName;
    } catch (error) {
      return;
    }
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

  async exportXLS(response) {
    try {
      const result = getArrayUsers(response);
      const columnsNames = ['Name', 'Email', 'Username', 'Position'];
      const fileName = 'users-excel.xlsx';
      return await this.exportWorkSheet(
        result,
        columnsNames,
        'Users',
        fileName,
      );
    } catch (err) {
      throw err;
    }
  }

  async exportWorkSheet(data, workSheetColumnNames, workSheetName, fileName) {
    const workBook = xlsx.utils.book_new();
    const workSheetData = [workSheetColumnNames, ...data];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    await xlsx.writeFile(workBook, `/tmp/${fileName}`);
  }
};
