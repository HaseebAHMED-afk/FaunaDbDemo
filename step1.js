const faunadb = require('faunadb')

require('dotenv').config()

q = faunadb.query;

(
    async () => {
        if(process.env.MY_ADMIN_SECRET){
            var client = new faunadb.Client({secret: process.env.MY_ADMIN_SECRET})


            try {
                var result = await client.query(
                    q.CreateDatabase({name: 'MyTestDatabase'})
                )
                console.log(result);
            } catch (error) {
                if(error.requestResult.statusCode === 400 && error.message === 'instance already exist'){
                    console.log('Database with this name already exists');
                }else{
                    console.log('Unknown Error');
                    console.log(error);
                }
            }
        }else{
            console.log('No FaunaDB secret in .env file. Skipping DB setup');
        }
    }
)();