const modeloClientes = {
    queryGetClient: "SELECT * FROM Clientes",
    querygetClientByID: "SELECT * FROM Clientes WHERE ID = ?",
    querydeleteClientByID: `DELETE FROM Clientes WHERE ID = ?`,
    queryClientExists: `SELECT Correo FROM Clientes WHERE Correo = ?`,
    queryaddClient: `
    INSERT INTO Clientes (
        Correo,
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrasena,
        Fecha_Nacimiento,
        Activo
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?)`
}

    module.exports = {modeloClientes}

    //jhosselyn Gonzalez