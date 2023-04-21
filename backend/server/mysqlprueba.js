
const mysql = require('mysql2/promise');

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lUCIANOO12@',
  database: 'proyectomuninqn'
});

app.post('/api/personas', async (req, res) => {
    const { nombre, apellido, dni, genero, edad } = req.body;
  
    // Comprueba si el DNI ya existe en la base de datos
    const [rows] = await connection.execute('SELECT COUNT(*) as count FROM personas WHERE dni = ?', [dni]);
  
    if (rows[0].count > 0) {
      return res.status(400).json({ message: 'El DNI ya está registrado.' });
    }
  
    // Inserta los datos de la persona en la base de datos
    await connection.execute('INSERT INTO personas (nombre, apellido, dni, genero, edad) VALUES (?, ?, ?, ?, ?)', [nombre, apellido, dni, genero, edad]);
  
    res.status(201).json({ message: 'Persona registrada con éxito.' });
  });