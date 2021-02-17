const faunadb = require('faunadb')

require('dotenv').config()

q = faunadb.query;

(
    async () => {
        if(process.env.MY_ADMIN_SECRET){
            
            var client = new faunadb.Client({secret:process.env.MY_ADMIN_SECRET})

            try {
                var result = await client.query(
                    q.CreateKey({
                        database: q.Database('MyTestDatabase'),
                        role : 'server'
                    })
                )
                console.log('Save the database server key' , result.secret);
            } catch (error) {
                console.log('Error: ');
                console.log(error);
            }
        }else{
            console.log('No FAUNADB_ADMIN_SECRET in .env file, skipping Key Creation');
        }
    }
)()