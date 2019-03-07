var express = require('express');
var router  = express.Router();
const exec    = require('child_process').exec;

router.post('/github', function(req, res, next) {
  let event = req.get('X-GitHub-Event');
  if (event == 'push') {
    console.log('Githubからデプロイしました。');
    exec('git pull origin master');
    exec('npm install');
    res.send("GitHubからデプロイしました。");
  } else {
    console.log('不正なリクエストです。');
  }
});

module.exports = router;