var Airtable = require('airtable');

function appendJsonToAirtable(jsonToAppend) {
    var base = new Airtable({apiKey: 'key9wXBUzD4Ipemsg'}).base('appmiRjzJTfk1VVWm');

    base('purchases').create([
        {
          jsonToAppend
        },
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });

}
module.exports = { appendJsonToAirtable };
