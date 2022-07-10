var express = require('express');
var router = express.Router();
const db = require('./config/db');
const mail = require('./config/mail');

// router.get('/', (req, res, next) => {
//     db.query('select * from user', function (err, data) {
//         if (err) throw err;
//         console.log('Response: ', data);
//         res.send(data);
//     });
// });

router.post("/", (req, res) => {
    const { username, email, password } = req.body;
    //console.log(data);
    const sql = `SELECT * FROM user WHERE Email='${email}'`;
    const sql2 = `INSERT INTO user (U_name, Email, Password) VALUES ('${username}','${email}','${password}')`;
    db.query(sql, (err, data) => {
        if (data.length === 0) {
            db.query(sql2, function (err, data) {
                res.json({ message: 'Create Account Successfully' });
            });
            mail.sendMail(mailOptions(username, email));
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

function mailOptions(username, email) {
    return {
        from: 'yehtony880208@outlook.com',// sender address
        to: email,// // list of receivers
        subject: "TodoWeb's Account", // Subject line
        text: username + ', you have successfully registered TodoWeb',
    }
    html: `
    <div style="padding:10px;border-style: ridge">
    <p>You have a new contact request.</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Email: ${req.body.to}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.description}</li>
    </ul>
    `
};

module.exports = router;