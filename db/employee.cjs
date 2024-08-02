const client = require ('./client.cjs');


const createEmployee = async(employeeName, isAdmin) =>
{
  try {
    await client.query(`
      INSERT INTO employees (employeeName, isAdmin)
      VALUES ('${employeeName}', '${isAdmin}');
      
      `);

  } catch(err) {
    console.log(err);
  }
}


const getEmployees = async() => {
  try {
    const { rows } = await client.query(`
      SELECT * FROM employees;`);

    return rows;

  } catch(err) {
    console.log(err);
  }
}

module.exports = { createEmployee, getEmployees }