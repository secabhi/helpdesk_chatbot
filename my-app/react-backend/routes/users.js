var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    res.json([
        {
            id: '0',
            message: 'Hi , Welcome to ARUBA helpdesk!',
            trigger: '1',
        },
        {
            id: '1',
            message: 'May I know you Name? to help you assist.',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: 3,
        },
        {
            id: '3',
            message: 'Hey {previousValue}!',
            trigger: 4,
        },
        {
            id: '4',
            message: 'How may I assist you?',
            trigger: 5,
        },
        {
            id: '5',
            user: true,
            asMessage: true,
            validator: (value) => {
                if (value.length <= 2) {
                    return 'Didn\'t understand that';
                }
                return true;
            },
            trigger: '6',
        },
        {
            id: '6',
            message: 'Whom among them are you looking for?',
            trigger: 'email',
        },
        {
            id: 'email',
            options: [
                { value: 'rahul@hpe.com', label: 'Rahul', trigger: '7' },
                { value: 'shweta@hpe.com', label: 'Shweta', trigger: '7' },
            ],
            user: false
        },
        {
            id: '7',
            message: 'E-Mail address is {previousValue}.',
            trigger: '8'
        },
        {
            id: '8',
            message: 'Do you need any other information?',
            trigger: 'yesnooption'
        },
        {
            id: 'yesnooption',
            options: [
                { value: 'Thanks for using Aruba ChatBot.', label: 'NO', trigger: '9' },
                { label: 'YES', trigger: '4' },
            ],
            user: false
        },
        {
            id: '9',
            message: '{previousValue}!',
            end: true
        },
    ]);

});

module.exports = router;
