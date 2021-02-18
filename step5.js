

const faunadb = require('faunadb'),
q= faunadb.query

require('dotenv').config();

(
    async() => {

        if(process.env.FAUNADB_SERVER_SECRET){

            var client = new faunadb.Client({secret: process.env.FAUNADB_SERVER_SECRET})

            try {
                
                var result = await client.query(
                    q.Create(
                        q.Collection('posts'),
                        {data : {title: 'Serverless are the future'}},
                    )
                )

                console.log('Document created and stored in container: ' + result.ref.id);
            } catch (error) {
                console.log('Error: ');
                console.log(error);
            }   
        }else{
            console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Document Creation');
        }
    }
)()