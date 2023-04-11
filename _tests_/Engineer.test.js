const { Engineer } = require('../lib/classes');

describe("Engineer", () => {
    describe("engineerObj", () => {
        it("Create Engineer object", () => {
            const engineer = new Engineer();
            expect(typeof(engineer)).toBe("object");
        });
    });

    describe("GitHubUser", () => {
        it("Can get GitHub username", () => {
            const engineer = new Engineer("Dweller", 101, "test@test.com", "GitHubUser");
            expect(engineer.github).toBe("GitHubUser");
        });
    });

    describe("getRole", () => {
        it("getRole() returns Engineer", () => {
            const engineer = new Engineer("Dweller", 101, "test@test.com", "GitHubUser");
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});