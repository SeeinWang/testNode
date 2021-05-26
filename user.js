const db = require('./firebase');

const userRef =  db.collection('users').doc('YFYD4ll4jahjrA5OzqhgehUoEk12');
const updateName = async () => {
    try {
        await db.runTransaction(async (t) => {
            await t.update(userRef, {
              first_name: 'taylor',
            });
          });
    }catch(err){
        console.log(err)
    }
}

module.exports.updateName = updateName;