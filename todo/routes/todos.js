const express = require('express');
const router = express.Router();

const mysql = require('mysql'); // https://github.com/mysqljs/mysql
const dbconfig = require('../dbconf');
const pool = mysql.createPool(dbconfig);
const TABLE_NAME = "todos";

/* 할일 목록 */
router.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    if (err){
      res.status(500).send();
      throw err; // not connected!
    }
    let sqlStr = `SELECT id, status, title FROM ${TABLE_NAME} ;`;
    console.log(sqlStr);
    connection.query(sqlStr, function (error, results, fields) {
      connection.release();
      if (error) throw error;            
      res.json(results);
    });
  });
});
/* 할일 추가 */
router.post('/', function(req, res, next) {
  console.log(req.body); // 디버깅용
  pool.getConnection(function(err, connection) {
    if (err){
      res.status(500).send();
      throw err; // not connected!
    }
    let sqlStr = `INSERT INTO ${TABLE_NAME}(status, title) VALUES (${req.body.status}, '${req.body.title}');`;
    console.log(sqlStr); // 디버깅용
    connection.query(sqlStr, function (error, results, fields) {
      connection.release();
      if (error) throw error;
      res.json(results);
    });
  });
});
/* 할일 삭제 */
router.delete('/', function(req, res, next) {
  console.log(req.query); // 디버깅용
  pool.getConnection(function(err, connection) {
    if (err){
      res.status(500).send();
      throw err; // not connected!
    }
    let sqlStr = `DELETE FROM ${TABLE_NAME} WHERE id=${req.query.todoId} ;`;
    console.log(sqlStr); // 디버깅용
    connection.query(sqlStr, function (error, results, fields) {
      connection.release();
      if (error) throw error;
      res.json(fields);
    });
  });
});
/* 할일 상태 수정 */
router.put('/', function(req, res, next) {
  console.log(req.body);
  pool.getConnection(function(err, connection) {
    if (err){
      res.status(500).send();
      throw err; // not connected!
    }
    let sqlStr = `UPDATE ${TABLE_NAME} SET status=${req.body.status} WHERE id=${req.body.todoId} ;`;
    console.log(sqlStr);
    connection.query(sqlStr, function (error, results, fields) {
      connection.release();
      if (error) throw error;
      res.json(results);
    });
  });
});

module.exports = router;
