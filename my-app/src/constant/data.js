export const initialdata = [
    {
        id: '0',
        message: 'Hi , Welcome to ARUBA helpdesk ChatBot!',
        trigger: '1',
    },
    {
        id: '1',
        user: true,
        trigger: 2,
    },
    {
        id: '2',
        message: 'Hey {previousValue}?',
        trigger: 3,
    },
    {
        id: '3',
        message: 'How may I assist you?',
        trigger: 4,
    },
    {
        id: '4',
        user: true,
        trigger: 'email',
    },
    {
        id: 'email',
        options: [
            { value: 'rahul@hpe.com', label: 'Rahul', trigger: '5' },
            { value: 'shweta@hpe.com', label: 'Shweta', trigger: '5' },
        ]
    },
    {
        id: '5',
        message: 'Sending mail to {previousValue}?',
        end: true
    }

]