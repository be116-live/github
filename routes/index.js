var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * TODO ついを引っ張る
 * @type {Router|router}
 */
router.get('tweet', function(req, res, next) {
  // TODO ついをDBから抜き出す
  var json;
  // TODO ついのJSONを返す
  res.send(json);
});

/**
 * TODO POSTを受け取る
 * @type {Router|router}
 */
router.post('tweet', function(req, res, next) {
  var note; // TODO ついを受け取る
  // TODO ついを登録する
  postNote();
});

/**
 * TODO ついをDBから取得する
 * @return string json
 */
function getNote() {
  // ついを返す変数
  var res;

  // TODO ついを受け取る
  var note;

  // TODO ついjsonを返す
  return res;
}

/**
 * TODO ついをDBに登録する
 * @param note つい
 */
function postNote(note) {
  // TODO 本文を取得する
  var body;
  // TODO たぐを取得する
  var tag;

  // TODO SQLを用意する
  var sql;
  // TODO DBに登録する
  execSql(sql, function(x){}, function(x){} ).then(function(message){
    // メッセージを返す
    res.send(message);
  });
}

/**
 * DBにSQLを発行する
 */
function execSql(sql, resolve, fail) {
  // TODO 接続取得
  // TODO 成功時の処理
  // TODO 失敗時の処理
  return new Promise( function (resolve, fail) {
    // TODO SQLを実行
    resolve();
    //fail();
    // TOOD メッセージを返す
  });
}


module.exports = router;
