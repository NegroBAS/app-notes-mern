module.exports = {
    database:{
        host:process.env.MYSQL_HOST ? process.env.MYSQL_HOST : 'localhost',
        user:process.env.MYSQL_USER ? process.env.MYSQL_USER : 'root',
        password:process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : 'root',
        database:process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : 'app_notes'
    }
}