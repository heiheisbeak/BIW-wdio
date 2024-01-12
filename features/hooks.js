import {Before, After} from '@cucumber/cucumber';

Before(async function () {
    //this is potentially slow, but only reliable way to clear state according to https://github.com/webdriverio/webdriverio/issues/8865
    await browser.reloadSession();
});

After(async function (scenario) {
    if (scenario.result.status === 'failed') {
        takeScreenshot(filename) {
            const timestamp = new Date().getTime();
            const filepath = `./screenshots/${filename}_${timestamp}.png`;
            browser.saveScreenshot(filepath);
        }
    }
    
});
