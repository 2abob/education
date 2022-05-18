var mysql = require('mysql')

var con = mysql.createConnection({
    host: "jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "nutdli20o0hsqnk4",
    password: "gzuqwj3dq45aj79k",
    database: "u4u28lo7cd71c98q"
});

async function login(login, password) {
    const test = new Promise((resolve, reject) => {
        con.connect()
        con.query("SELECT * FROM personne WHERE login = '"+login+"' AND password = '"+password+"'", function (err, result, fields) {
            resolve(result)
        });
    })
    return test
}

exports.login = login