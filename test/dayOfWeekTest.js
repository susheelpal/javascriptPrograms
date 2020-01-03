
let assert = require('assert');
let callFunction = require('../mochaTestingPrograms/dayOfWeek/dayOfWeekBL');

describe("days of week", () => {
    const d = 3;
    const m = 1;
    const y = 2020;
    it("day", () => {
        assert.equal((callFunction.dayOfWeek(m, d, y)), 2);
    });

});
