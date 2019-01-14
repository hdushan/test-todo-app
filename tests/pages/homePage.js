

var BasePage = require('./basePage');
var axios = require('axios');

class ToDoHomePage extends BasePage {

    constructor() {
        super();
        this.url = '/';
    }

    // Page elements

    get taskTextBox() { return $('#addTaskInput'); }

    get task() { return $('input#taskDetails') }

    get taskDeleteButton() { return $('#deleteTask') }

    get tasks() { return $$('input#taskDetails'); }

    get alertTextBox() { return $('#alertText'); }

    get loadingSpinner() { return $('div#loadingSpinner'); }

    // Actions that you can perform on the page

    loaded() {
        this.taskTextBox.waitForVisible();
        return true;
    }

    caughtUpMessageShown() {
        this.alertTextBox.waitForVisible();
        var index = this.alertTextBox.getText().toLowerCase().indexOf("caught");

        if(index > -1) {
            return true;
        }
        return false;
    }

    numTasksShown() {
        return this.tasks.length;
    }

    reset() {
        axios.get(`${process.env.APP_URL}/api/reset`)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    addTask(taskText) {
        this.taskTextBox.waitForElementToBeClickable();
        this.taskTextBox.click();
        this.taskTextBox.setValue(taskText);
        browser.keys("\uE007"); 
        this.task.waitForVisible();
    }

    deleteTask() {
        this.taskDeleteButton.waitForElementToBeClickable();
        this.taskDeleteButton.click();
    }

    deleteFinalTask() {
        this.taskDeleteButton.waitForElementToBeClickable();
        this.taskDeleteButton.click();
        this.alertTextBox.waitForVisible();
    }

}
module.exports = new ToDoHomePage();