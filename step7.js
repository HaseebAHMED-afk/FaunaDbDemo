//290859422831347213




(
    async () =>{
        
const faunadb = require('faunadb'),
q = faunadb.query

require('dotenv').config();


if (process.env.FAUNADB_SERVER_SECRET) {
    
    var client = new faunadb.Client({secret: process.env.FAUNADB_SERVER_SECRET})

    try {
        
        var result = await client.query(

            q.Get(q.Ref(q.Collection('posts') , '290859422831347213'))

        )

        console.log("Document retrived from Container in Database: " + result.data.title);

    } catch (error) {
        console.log('Error: ');
        console.log(error);
    }

} else {
    console.log('No server token found, skipping get data');
}
    }
)()

