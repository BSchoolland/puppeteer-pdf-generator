### Description of the Project
This project is a demo of how Puppeteer can be used to generate PDFs from HTML files.

### How to Run the Project
- Clone the project.
- Run `npm install`.
- Put your HTML content into `page.html`.
- Run `node server.js`.
- Check the generated PDF in the root folder.

### Writing in the html file
- The html file must contain the styles, meaning that linking to a stylesheet will not work. Instead, use a <style> tag to write the styles in the html file.
- server.js is set up to replace certain strings in the html file with variables set during runtime. To add a variable use the format ${variableName} in the html file. Then, change the variables dictionary in server.js to include the variable name as a key and the value you want to replace it with as the value.