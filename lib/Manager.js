const Employee = require('./lib/employee.js');

class Manager extends Employee {   
    constructor(name, id, email, phone){
    super(name, id, email)
    this.phone = phone
    };

    getofficeNumber(){
        return this.phone
    }

    getRole(){
        return 'Manager'
    }
};

module.exports = Manager;