const Employee = require('../model/Employee');

const createEmployee = async (req, res) => {
  try {
    const { name, department } = req.body;
    const newEmployee = new Employee({ name, department });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
    } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
    }
};

module.exports = { createEmployee, getAllEmployees };
