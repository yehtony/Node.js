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
    const { email, password } = req.body;
    //console.log(data);
    const sql = `SELECT * FROM user WHERE Email='${email}' AND Password='${password}'`;
    const sql2 = `SELECT * FROM user WHERE Email='${email}'`;
    db.query(sql, function (err, data, fields) {
        if (data.length === 0) {
            db.query(sql2, function (err, data, fields) {
                if (data.length === 0)
                    res.json({ error: 'Account Not Exist' });
                else
                    res.json({ error: 'Password Wrong' });
            })
        }
        else {
            console.log(data[0].U_Name);
            res.json({ message: 'Login Successfully', data: data[0] });
        }
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