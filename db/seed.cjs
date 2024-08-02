const client = require('./client.cjs');
const { createEmployee, getEmployees } =  require('./employee.cjs');

const dropTables = async() => {
  try{
    await client.query(`
      DROP TABLE IF EXISTS employees;
      `)

  }catch(err){
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE employees (
      employeeId SERIAL PRIMARY KEY,
      employeeName VARCHAR(30) NOT NULL,
      isAdmin BOOLEAN NOT NULL

      );
      `);

  }catch(err){
    console.log(err);
  }
}

const syncAndSeed = async () => {
  await client.connect();
  console.log('Connected!');

  await dropTables();
  console.log('Tables dropped!');

  await createTables();
  console.log('Tables created!');

  await createEmployee('Greg', true);
  console.log('Users created!');

  await getEmployees();
  console.log('Employees retreived!');

  await client.end();
  console.log('Disconnected!');
}

syncAndSeed();