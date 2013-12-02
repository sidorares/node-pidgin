node-pidgin
===========

Pidgin node.js client using pidgin dbus api

## API

See [pidgin DBus howto](https://developer.pidgin.im/wiki/DbusHowto) for a reference

## Examples

Create status:
```js
var pidgin = require('pidgin').createClient();
pidgin.PurpleSavedstatusNew('Вася Ложкин', 2, function (err, status) {
  console.log('Status created');
  console.log(status);
});
```

Handle message:
```js
var pidgin = require('pidgin').createClient();
pidgin.on('ReceivedImMsg', function(account, sender, message, conversation, flags) {
   console.log('Message!', message)
});
```
