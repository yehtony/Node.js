var express = require('express');
var router = express.Router();
const db = require('./config/db');

router.get('/', (req, res, next) => {
    db.query('select * from user', function (err, data) {
        if (err) throw err;
        console.log('Response: ', data);
        res.send(data);
    });
});

router.post("/signin", function (req, res) {
    const { username, password } = req.body;
    const sql = `SELECT * FROM account WHERE username='${username}' AND password='${password}'`;
    db.query(sql, function (err, data, fields) {
        if (data.length === 0) {
            return res.send({ error: 'ACCOUNT_NOT_EXIST' });
        }
        return res.send({ message: 'LOGIN_SUCESSFULY' });
    });
})

module.exports = router;