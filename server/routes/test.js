var mysql = require('mysql')

var con = mysql.createConnection({
    host: "jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "nutdli20o0hsqnk4",
    password: "gzuqwj3dq45aj79k",
    database: "u4u28lo7cd71c98q"
});

async function test() {
    const test = new Promise((resolve, reject) => {
        con.connect()
        con.query("SELECT * FROM test", function (err, result, fields) {
            // resolve(JSON.stringify(result[0]));
            // resolve(result[0])
            resolve(result)
            // reject(err)
        });
    })
    return test
}

exports.test = test