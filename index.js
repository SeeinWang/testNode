const user = require('./user');

const express=require('express');

const cors = require('cors');

const Joi = require('joi');

const app=express();

app.use(express.json());

app.use(cors());

/* const userRef =  db.collection('users').doc('YFYD4ll4jahjrA5OzqhgehUoEk12');
const updateName = async () => {
    try {
        await db.runTransaction(async (t) => {
            await t.update(userRef, {
              first_name: 'test',
            });
          });
    }catch(err){
        console.log(err)
    }
} */

app.get('/update',(req, res) =>
{
user.updateName();
res.status(200).json({
    message:'success'
})
});


//PORT 
const port = process.env.PORT  || 5000;
app.listen(port,()=> {
    console.log(`listening on port ${port}`)
});