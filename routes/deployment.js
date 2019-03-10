let express = require('express');
let router  = express.Router();
let exec    = require('child_process').exec;

router.post('/', function(req, res, next) {
  let event = req.get('X-GitHub-Event');
  // TODO SECRETを比較
  if (event == 'push') {
    console.log('Githubからデプロイしました。');
    exec('git -C $HOME/production pull origin master');
    exec('npm -prefix $HOME/production install $HOME/production');
    exec('sudo systemctl restart production');
    res.send("GitHubからデプロイしました。");
  } else {
    console.log('不正なリクエストです。');
    res.send("invalidated");
  }
});

module.exports = router;