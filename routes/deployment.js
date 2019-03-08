var express = require('express');
var router  = express.Router();
const exec    = require('child_process').exec;

router.post('/github', function(req, res, next) {
  let event = req.get('X-GitHub-Event');
  // TODO SECRETを比較
  if (event == 'push') {
    console.log('Githubからデプロイしました。');
    exec('git -C $HOME/production pull origin master');
    exec('npm -prefix $HOME/production install $HOME/production');
    res.send("GitHubからデプロイしました。");
  } else {
    console.log('不正なリクエストです。');
  }
});

module.exports = router;