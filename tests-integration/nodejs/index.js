const { Client } = require('pg')
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'tom',
    password: 'pencil',
    database: 'localdb',
})

async function run() {
    await client.connect()

    const res1 = await client.query('INSERT INTO testable VALUE (1)')
    console.log(res1.rowCount)

    const res2 = await client.query('SELECT * FROM testtable')
    console.log(res2.rows)

    const res3 = await client.query('SELECT * FROM testtable WHERE id = $1::int', [1])
    console.log(res3.rows)
    await client.end()
}

run()
