const router = require('express').Router();
let User = require('../models/user.model');
const { encrypt } = require('../crypto');


router.route('/:username').get((req, res) => {
  User.find()
    .then(users =>{
      for(let i =0;i<users.length;i++){
        
        if(users[i].username == req.params.username){
          res.json(users[i]);
          console.log("Request Sent");
          break;
        }
        
        
        
      }
      
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  let username = req.body.username;
  let password = encrypt(req.body.password);
  let email = req.body.email;

  const newUser = new User({
      username,
      password,
      email
});
  newUser.save()
    .then((users) => {
       
      res.json(users.username)})
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;