node-pidgin
===========

Pidgin node.js client using pidgin dbus api

## API

See [pidgin DBus howto](https://developer.pidgin.im/wiki/DbusHowto) for a reference

## Examples

Create status:
```js
var dbus   = require('node-dbus');
var pidgin = require('pidgin');
var purple = pidgin.createClient(dbus.sessionBus());

purple.PurpleSavedstatusNew('Вася Ложкин', 2, function (err, status) {
  console.log('Status created');
  console.log(status);
});
```

Handle message:
```js
var dbus   = require('node-dbus');
var pidgin = require('pidgin');
var purple = pidgin.createClient(dbus.sessionBus());
purple.on('ReceivedImMsg', function(msg) {
  console.log('Message!', msg)
})
