

class BasePage {
    constructor() {
        this.shortDelay = 500;
        this.longDelay = 30000;
    }

    goto() {
        browser.url(this.url);
    }
}

module.exports = BasePage;