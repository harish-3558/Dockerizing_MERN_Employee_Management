const express = require('express');
const router = express.Router();
const Employeeinfo = require('../controller/empcontroller');

router.post('/add-employee', Employeeinfo.createEmployee);
router.get('/get-employees', Employeeinfo.getAllEmployees);

module.exports = router;