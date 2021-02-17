const faunadb = require('faunadb')

require('dotenv').config()

q = faunadb.query;

(
    async () => {
        if (process.env.MY_ADMIN_SECRET) {
            
            var client = new faunadb.Client({secret:process.env.MY_ADMIN_SECRET})

            try {
                var result = await client.query(

                    q.CreateCollection({name: 'posts'})

                )

                console.log('Container Created', result.name);

            } catch (error) {
                console.log('Error');
                console.log(error);
            }
        } else {
            console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Container Creation');
        }
    }
)()