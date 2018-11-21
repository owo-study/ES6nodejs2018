const createError = require('http-errors'); // https://www.npmjs.com/package/http-errors
const express = require('express'); // https://expressjs.com/
const path = require('path'); // https://nodejs.org/dist/latest-v10.x/docs/api/path.html
const cookieParser = require('cookie-parser'); // https://www.npmjs.com/package/cookie-parser
const logger = require('morgan'); // https://www.npmjs.com/package/morgan

/* DB 초기 세팅 */
const mysql = require('mysql'); // https://github.com/mysqljs/mysql
const dbconfig = require('./dbconf');
const pool = mysql.createPool(dbconfig);
pool.getConnection(function(err, connection) {
  if (err) throw err; // not connected!

  let sqlStr = `CREATE TABLE IF NOT EXISTS todo_sbj ( id int(12) primary key AUTO_INCREMENT, status int(4), title varchar(255) ) ;`;
  console.log(sqlStr);
  connection.query(sqlStr, function (error, results, fields) {
    connection.release();
    if (error) throw error;
    // console.log(results);
  });
});

// express 앱 생성 >> https://expressjs.com/en/4x/api.html#app
const app = express();

/* 환경 설정 */
// view engine setup
app.set('views', path.join(__dirname, 'views')); // view파일들이 있는 경로 지정
app.set('view engine', 'ejs'); // view파일 분석 엔진 설정

// 미들웨어 설정
app.use(logger('dev')); // 로그 레벨은 dev 수준으로
app.use(express.json()); // json 요청을 해석할 수 있는 미들웨어 설정
app.use(express.urlencoded({ extended: false })); // urlencode를 해석할 수 있는 미들웨어 설정
app.use(cookieParser()); // 클라이언트 cookie를 해설할 수 있는 미들웨어 설정
// https://expressjs.com/ko/starter/static-files.html
const static_dir_middleware = express.static(path.join(__dirname, 'public')) // 정적 리소스(html,css,js,image 등) 파일이 있을 디렉토리 지정
app.use(static_dir_middleware); // 미들웨어로 설정

// 라우팅 설정
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todo');
app.use('/', indexRouter);
app.use('/todos', todosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
