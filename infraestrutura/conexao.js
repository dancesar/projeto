const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: '192.168.0.2',
    port: 3306,
    user: 'dancesar',
    password: '05041979',
    database: 'agendamento-petshop'
})

module.exports = conexao