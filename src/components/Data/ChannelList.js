const ChannelDB = [{
        id: 1001,
        title: 'HelpDesk',
        isSelected: false,
        messages: [
            { id: 9001, send: 'БОТ', text: 'БОТ Техподдержки готов к работе' },
            { id: 9002, send: 'Я', text: 'Комп завис' },
            { id: 9003, send: 'БОТ', text: 'Перезагрузите...' },
        ]
    },
    {
        id: 1002,
        title: 'Бухгалтерия',
        isSelected: false,
        messages: [
            { id: 8001, send: 'БОТ', text: 'БОТ Бухгалтерии готов к работе' },
            { id: 8002, send: 'Я', text: 'Кто занимается оформлением закупок?' },
            { id: 8003, send: 'БОТ', text: 'Это ваша головная боль' },
        ]
    },
    {
        id: 1003,
        title: 'Начальник',
        isSelected: false,
        messages: [
            { id: 7001, send: 'БОТ', text: 'БОТ Начальника готов к работе' },
            { id: 7002, send: 'Я', text: 'На Письмо из прокуратуры не мы должны отвечать' },
            { id: 7003, send: 'БОТ', text: 'Кровь из носу чтоб завтра' },
        ]
    },
]

export default ChannelDB