var dbus = require('node-dbus');
var pidgin = require('pidgin');
var purple = pidgin.createClient(dbus.sessionBus());

purple.PurpleSavedstatusNew('Вася Ложкин', 2, function (err, status) {
  console.log('Status created');
  console.log(status);
});
