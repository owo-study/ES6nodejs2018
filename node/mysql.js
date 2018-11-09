const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'es6.devs.co.kr',
  user     : 'es6',
  password : 'es6',
  database : 'es6'
});
connection.connect();

const TABLE_NAME = "test_talbe";
connection.query(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} ( _key int(12) , _value varchar(255) ) ;`, function (error, results, fields) {
    if (error) throw error; // console.log(results, fields);
    connection.query(`DELETE FROM ${TABLE_NAME};`, function (error, results, fields) {
        if (error) throw error; // console.log(results, fields);
        connection.query(`INSERT INTO ${TABLE_NAME}(_key, _value) VALUES (1, 'a'), (2, 'b'), (3, 'c') ;`, function (error, results, fields) {
            if (error) throw error; // console.log(results, fields);
            connection.query(`SELECT * FROM ${TABLE_NAME} ;`, function (error, results, fields) {
                if (error) throw error; 
                console.log(results);
                connection.query(`UPDATE ${TABLE_NAME} SET _value='d' WHERE _key=3 ;`, function (error, results, fields) {
                    if (error) throw error; // console.log(results);
                    connection.query(`SELECT * FROM ${TABLE_NAME} ;`, function (error, results, fields) {
                        if (error) throw error;
                        console.log(results);
                        connection.query(`DELETE FROM ${TABLE_NAME} WHERE _key=1 ;`, function (error, results, fields) {
                            if (error) throw error; // console.log(results);
                            connection.query(`SELECT * FROM ${TABLE_NAME} ;`, function (error, results, fields) {
                                if (error) throw error;
                                console.log(results);
                    
                                connection.end();
                            });
                        });
                    });
                });
            });
        });
    });
});
