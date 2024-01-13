import { $ } from '@wdio/globals';
import Page from './page.js';

class HomePage extends Page {

    get headingWelcome () {
        return $('.topic-block-title h2');
    }

    open () {
        return super.open('/');
    }
}

export default new HomePage();