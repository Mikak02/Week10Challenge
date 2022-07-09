class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email =email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee

//parent class

// functions to get name, id, email, role
// function Employee(name) {
//     this.name = name;
//   }
  
//   getName() {
//       return this.name
//   }
  


//   module.exports = Employee;