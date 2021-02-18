



(
    async () =>{
        
const faunadb = require('faunadb'),
q = faunadb.query

require('dotenv').config();


if (process.env.FAUNADB_SERVER_SECRET) {
    
    var client = new faunadb.Client({secret: process.env.FAUNADB_SERVER_SECRET})

    try {
        
        var result = await client.query(

           q.Delete(
               q.Ref(q.Collection('posts') , '290852865531970056')
           )

        )

        console.log("Document Deleted in Container in Database: " + result.ref.id );
      

    } catch (error) {
        console.log('Error: ');
        console.log(error);
    }

} else {
    console.log('No server token found, skipping get data');
}
    }
)()

