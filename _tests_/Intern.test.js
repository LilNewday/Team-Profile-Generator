const { Intern } = require('../lib/classes');

describe("Intern", () => {
    describe("internObj", () => {
        it("Create Intern object", () => {
            const intern = new Intern();
            expect(typeof(intern)).toBe("object");
        });
    });

    describe("school", () => {
        it("Can get school", () => {
            const intern = new Intern("Dragonborn", 111, "test@test.com", "UR");
            expect(intern.school).toBe("UR");
        });
    });

    describe("getRole", () => {
        it("getRole() returns Intern", () => {
            const intern = new Intern("Dragonborn", 111, "test@test.com", "UR");
            expect(intern.getRole()).toBe("Intern");
        });
    });
});