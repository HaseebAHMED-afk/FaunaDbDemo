

const faunadb = require('faunadb'),
q = faunadb.query

require('dotenv').config();


(
    async () => {

        if (process.env.FAUNADB_SERVER_SECRET) {
            
            var client = new faunadb.Client({secret:process.env.FAUNADB_SERVER_SECRET })

            try {
                
                var result = await client.query(
                    q.Map(
                        [
                            'Serverless is the future',
                            'It used FaunaDB to store data',
                            'It used netlify to deploy'
                        ],

                        q.Lambda(
                            'post_title',
                            q.Create(
                                q.Collection('posts'),
                                {data: {title: q.Var('post_title')}}
                            )
                        )
                    )
                )

                console.log('Documents created and stored: ' + result.length);
                result.map((r) => {
                    console.log(r.ref.id);
                })
            } catch (error) {
                console.log('Error: ');
        console.log(error);
            }
        } else {
            console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Multiple Document Creation');
        }
    }
)()