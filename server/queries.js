const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dbclarooscuro',
    password: '',
    port: 5432
}
);

const getClientes = (request, response) => {
    pool.query('select * from clientes', (error, results) => {
        if (error) throw error;
        response.status(200).json(results.rows);
    });
};

const createCliente = (request, response) => {
    const { nombre, identidad, sexo, fechanacimiento, edad, observaciones } = request.body
    const strinsert = 'INSERT INTO clientes(Nombre,Identidad,Sexo,FechaNacimiento,Edad,Observaciones)' +
        ' VALUES ($1,$2,$3,$4,$5,$6)';
    pool.query(strinsert, [nombre, identidad, sexo, fechanacimiento, edad, observaciones],
        (error, result) => {
            if (error) throw error;
            response.status(200).send(`User added with ID: ${result.insertId}`);
        });
};

module.exports = {
    getClientes,
    createCliente
};