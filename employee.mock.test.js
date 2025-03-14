const Employee = require("./employee");

describe("Employee Mock Test", () => {
  test("should mock hasSkill function", () => {
    const emp = new Employee("Ali", 25, 3);
    emp.hasSkill = jest.fn().mockReturnValue(true);
    
    expect(emp.hasSkill("React")).toBe(true);
    expect(emp.hasSkill).toHaveBeenCalledWith("React");
  });
});
