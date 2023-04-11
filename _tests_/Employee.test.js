const { Employee } = require('../lib/classes');

describe("Employee", () => {
    describe("employeeObj", () => {
        it("Create Employee object", () => {
            const employee = new Employee();
            expect(typeof(employee)).toBe("object");
        });
    });

    describe("getName", () => {
        it("Gathers the Employee name", () => {
            const employee = new Employee("Persona");
            expect(employee.getName()).toBe("Persona");
        });
    });

    describe("getId", () => {
        it("Gather the Employee id", () => {
            const employee = new Employee("Persona", 123);
            expect(employee.getId()).toBe(123);
        });
    });

    describe("getEmail", () => {
        it("Gather the email of Employee", () => {
            const employee = new Employee("Persona", 123, "test@test.com");
            expect(employee.getEmail()).toBe("test@test.com");
        });
    });

    describe("getRole", () => {
        it("getRole() returns Employee", () => {
            const employee = new Employee("Employee");
            expect(employee.getRole()).toBe("Employee");
        });
    });
});