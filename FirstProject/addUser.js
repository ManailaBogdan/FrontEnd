


function addUser(csv) {
    let fs = require('fs');

    fs.writeFile('users.csv', csv, function (err) {
         if (err) throw err;
         console.log('Saved!');
     });
    }

