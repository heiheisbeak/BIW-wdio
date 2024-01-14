import {Before, After} from '@cucumber/cucumber';

Before(async function () {
    //this is potentially slow, but only reliable way to clear state according to https://github.com/webdriverio/webdriverio/issues/8865
    //await browser.reloadSession();
});

After(async function (scenario) {
    if (scenario.result.status === 'failed') {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, 'image/png');
    }
});


