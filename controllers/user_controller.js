var users = { 
				admin: { id:1, username:"admin", password:"adminyhaz"},
				sub: {id:2, username:"sub", password:"subadmin"}
			};
// Comprueba si el usuario esta registrado en users
// Si autenticacion falla o hay errores se ejecuta callback(error).

exports.autenticar = function(login, password, callback){
	if(users[login]){
		if(password===users[login].password){
			callback(null, users[login]);
		}else{
			callback(new Error('Password erronero.'));
		}
	}else {
		callback(new Error('Usuario inexistente'));
	}
};