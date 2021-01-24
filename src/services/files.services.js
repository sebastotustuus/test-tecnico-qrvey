const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');

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
  exportXlS() {
    console.log('Exportar a Excel');
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
