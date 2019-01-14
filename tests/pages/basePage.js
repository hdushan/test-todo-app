

class BasePage {
    constructor() {
        this.shortDelay = 500;
        this.longDelay = 10000;
    }

    goto() {
        browser.url(this.url);
    }
}

module.exports = BasePage;