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

router.post("/", function (req, res) {
    const { email } = req.body;
    //console.log(data);
    const sql = `SELECT * FROM user WHERE Email='${email}'`;
    db.query(sql, function (err, data) {
        if (data.length === 1) {
            mail.sendMail(mailOptions(data));
            res.json({ message: 'Password Sent to Email' })
        }
        else
            res.json({ error: 'Account Not Exist' })
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
});

function mailOptions(data) {
    return {
        from: 'yehtony880208@outlook.com',// sender address
        to: data[0].Email,// // list of receivers
        subject: "TodoWeb's Password", // Subject line
        text: data[0].Password,
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