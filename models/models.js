var path = require('path');

var sequelize = New Sequelize(null,null,null,
	{
		dialect: "sqlite",storage:"quiz.sqlite"
	}

	);

var Quiz = sequelize.import (path.join(__dirname,'quiz'));

export.Quiz = Quiz;

sequelize.sync().success(function() {
	Quiz.count().success(function(count) {
		if (count === 0 ) {
			Quiz.create(
				{
					pregunta: "Capital de Italia",
					respuesta: "Roma"
		})
			.success(function() {console.log("Base de datos inicializada")});
		};
	});
});

<<<<<<< HEAD
// sequelize.sync() inicializa tabla de preguntas en DB
sequelize.sync().then(function() {
  // then(..) ejecuta el manejador una vez creada la tabla
  Quiz.count().then(function (count){
    if(count === 0) {   // la tabla se inicializa solo si está vacía
    	Quiz.bulkCreate( 
        [ {pregunta: 'Capital de Italia',   respuesta: 'Roma'},
          {pregunta: 'Capital de Portugal', respuesta: 'Lisboa'}
        ]
      ).then(function(){console.log('Base de datos inicializada')});
       };
  });
});
=======
>>>>>>> parent of 5aa7115... Despliegue en heroku
