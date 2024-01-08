const puppeteer = require('puppeteer');

let browser;

async function initBrowser() {
    if (!browser) {
        // Using the new headless mode
        browser = await puppeteer.launch({ headless: "new" });
    }
}

async function htmlToPdf(htmlContent, pdfPath) {
    let page;
    try {
        await initBrowser();
        page = await browser.newPage();

        await page.setContent(htmlContent, {
            waitUntil: 'networkidle0'
        });

        await page.pdf({ path: pdfPath, format: 'A4' });
        console.log('PDF Generated at:', pdfPath);
    } catch (err) {
        console.error('Error generating PDF:', err);
        throw err;
    } finally {
        if (page) {
            await page.close();
        }
    }
}


// Variables to be included in the HTML in a dictionary
const variables = {
    title: 'Example Title',
    text: 'Example Text',
};

fs = require('fs');
let htmlContent = fs.readFileSync('page.html', 'utf8');

// Replace all the variables in the HTML with the values from the dictionary
Object.keys(variables).forEach(key => {
    htmlContent = htmlContent.replace(new RegExp(`{${key}}`, 'g'), variables[key]);
});

const pdfPath = 'output.pdf';

htmlToPdf(htmlContent, pdfPath).catch(err => {
    console.error('Failed to generate PDF:', err);
});

// Optionally, close the browser when your app is terminating
process.on('exit', () => {
    if (browser) browser.close();
});
