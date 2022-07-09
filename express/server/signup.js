var express = require('express');
var router = express.Router();
const db = require('./config/db');

// router.get('/', (req, res, next) => {
//     db.query('select * from user', function (err, data) {
//         if (err) throw err;
//         console.log('Response: ', data);
//         res.send(data);
//     });
// });

router.post("/", function (req, res) {
    const { username, email, password } = req.body;
    //console.log(data);
    const sql = `SELECT * FROM user WHERE Email='${email}'`;
    const sql2 = `INSERT INTO user (U_name, Email, Password) VALUES ('${username}','${email}','${password}')`;
    db.query(sql, function (err, data) {
        if (data.length === 0) {
            db.query(sql2, function (err, data) {
                res.json({ message: 'Successfully Create Account' })
            })
        }
        else
            res.json({ error: 'Account Has Exist' });
    });
    // const promise1 = new Promise((resolve, reject) => {
    //     db.query(sql, function (err, data, fields) {
    //         if (data.length === 0) {
    //             resolve('1');
    //         }
    //         else
    //             reject('2');
    //     });
    // })
    // promise1().then(success => { return res.json({ error: 'Account Not Exist' }); })
    //     .catch(err => {
    //         return res.json({ message: 'Login Successfully' });
    //     })
})

module.exports = router;