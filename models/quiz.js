module.exports = function(squelize, DataTypes) {
	return sequelize.define('Quiz',
	{
		pregunta: DataTypes.STRING,
		respuesta: DataTypes.STRING,

	});
	
}