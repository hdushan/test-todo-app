var homePage = require('./pages/homePage');

describe('TODO App', function() {

    beforeEach(function() {
        homePage.reset();
    });

    it('User journey of adding a status, updating and then deleting it', function() {
        homePage.goto();
        expect(homePage.loaded()).toBe(true);
        expect(homePage.numTasksShown()).toBe(0);
        expect(homePage.caughtUpMessageShown()).toBe(true);

        // Add task
        homePage.addTask("Task ABCD");
        expect(homePage.numTasksShown()).toBe(1);

        // Update task status and text
        // TODO later, the functionality doesnt work fine

        // Delete task
        homePage.deleteFinalTask();
        expect(homePage.numTasksShown()).toBe(0);
    }, 1);
});