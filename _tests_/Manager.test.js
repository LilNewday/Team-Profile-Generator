const { Manager } = require('../lib/classes');

describe("Manager", () => {
    describe("managerObj", () => {
        it("Create Manager object", () => {
            const manager = new Manager();
            expect(typeof(manager)).toBe("object");
        });
    });

    describe("Office", () => {
        it("Can get office number", () => {
            const manager = new Manager("Todd", 76, "test@test.com", 1986);
            expect(manager.officeNumber).toBe(1986);
        });
    });

    describe("getRole", () => {
        it("getRole() returns Manager", () => {
            const manager = new Manager("Todd", 76, "test@test.com", 1986);
            expect(manager.getRole()).toBe("Manager");
        });
    });
});