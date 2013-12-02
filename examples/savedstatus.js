var pidgin = require('../index.js').createClient();

pidgin.PurpleSavedstatusNew('123 test ', 3, function (err, status) {
  console.log('Status created');
  console.log(status);
});
