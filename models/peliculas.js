const modeloPeliculas = {
    queryGetPelis: "SELECT * FROM Peliculas",
    querygetPelisByID: "SELECT * FROM Peliculas WHERE ID = ?",
    querydeleteTPelisByID: `UPDATE Peliculas SET Disponible = 'N' WHERE ID = ?`,
    queryPelisExists: `SELECT Nombre FROM Peliculas WHERE Nombre = ?`,
    queryaddPelis: `
    INSERT INTO Peliculas (
        Titulo,
        Genero,
        Reseña,
        Fecha_de_estreno,
        Activo
        
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?)`
}
    module.exports = {modeloPeliculas}

    //jhossleyn Gonzalez