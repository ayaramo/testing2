const Employee = require("./employee");

describe("Employee Class", () => {
  test("should create an employee with name, age, and years of experience", () => {
    const emp = new Employee("Ahmed", 30, 5);
    expect(emp.name).toBe("Ahmed");
    expect(emp.age).toBe(30);
    expect(emp.yearsOfExperience).toBe(5);
  });

  test("should return true if the employee has the skill", () => {
    const emp = new Employee("Ahmed", 30, 5);
    expect(emp.hasSkill("JavaScript")).toBe(true);
  });

  test("should return false if the employee does not have the skill", () => {
    const emp = new Employee("Ahmed", 30, 5);
    expect(emp.hasSkill("PHP")).toBe(false);
  });
});
