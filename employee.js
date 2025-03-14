class Employee {
    constructor(name, age, yearsOfExperience) {
      this.name = name;
      this.age = age;
      this.yearsOfExperience = yearsOfExperience;
    }
  
    hasSkill(skill) {
      const skills = ["JavaScript", "Python", "C++", "Java"];
      return skills.includes(skill);
    }
  }
  
  module.exports = Employee;
  