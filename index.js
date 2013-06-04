module.exports['org.freedesktop.DBus.Introspectable'] = function(bus) {
    this.addListener = this.on = function(signame, callback) {
        bus.addMatch('type=\'signal\',member=\'' + signame + '\'', function(err, result) {
            if (err) throw new Error(err);
        });
        var signalFullName = bus.mangle('/im/pidgin/purple/PurpleObject', 'org.freedesktop.DBus.Introspectable', signame);
        bus.signals.on(signalFullName, function(messageBody) {
             callback.apply(null, messageBody);
        });
    };
    this.Introspect = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'org.freedesktop.DBus.Introspectable',
            member: 'Introspect',
        }, callback);
    };
}

module.exports.createClient = function(bus) {
  if (!bus)
    bus = require('dbus-native').sessionBus();
  return new module.exports['im.pidgin.purple.PurpleInterface'](bus, '/im/pidgin/purple/PurpleObject');
};

module.exports['im.pidgin.purple.PurpleInterface'] = function(bus, path) {
    this.addListener = this.on = function(signame, callback) {
        bus.addMatch('type=\'signal\',member=\'' + signame + '\'', function(err, result) {
            if (err) throw new Error(err);
        });
        var signalFullName = bus.mangle('/im/pidgin/purple/PurpleObject', 'im.pidgin.purple.PurpleInterface', signame);
        bus.signals.on(signalFullName, function(messageBody) {
             callback.apply(null, messageBody);
        });
    };
    this.PurpleAccountsFindAny = function(name, protocol, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsFindAny',
            body: [name, protocol],
            signature: 'ss',
        }, callback);
    };
    this.PurpleAccountsFindConnected = function(name, protocol, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsFindConnected',
            body: [name, protocol],
            signature: 'ss',
        }, callback);
    };
    this.PurpleBlistNodeIsChat = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeIsChat',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistNodeIsBuddy = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeIsBuddy',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistNodeIsContact = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeIsContact',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistNodeIsGroup = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeIsGroup',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIsOnline = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIsOnline',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistNodeHasFlag = function(node, flags, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeHasFlag',
            body: [node, flags],
            signature: 'ii',
        }, callback);
    };
    this.PurpleBlistNodeShouldSave = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeShouldSave',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleConnectionIsConnected = function(connection, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionIsConnected',
            body: [connection],
            signature: 'i',
        }, callback);
    };
    this.PurpleConnectionIsValid = function(connection, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionIsValid',
            body: [connection],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvIm = function(conversation, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvIm',
            body: [conversation],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChat = function(conversation, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChat',
            body: [conversation],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountNew = function(username, protocol_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountNew',
            body: [username, protocol_id],
            signature: 'ss',
        }, callback);
    };
    this.PurpleAccountDestroy = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountDestroy',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountConnect = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountConnect',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountRegister = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRegister',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountDisconnect = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountDisconnect',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountNotifyAdded = function(account, remote_user, id, alias, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountNotifyAdded',
            body: [account, remote_user, id, alias, message],
            signature: 'issss',
            //
        }, callback);
    };
    this.PurpleAccountRequestAdd = function(account, remote_user, id, alias, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRequestAdd',
            body: [account, remote_user, id, alias, message],
            signature: 'issss',
            //
        }, callback);
    };
    this.PurpleAccountRequestCloseWithAccount = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRequestCloseWithAccount',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountRequestClose = function(ui_handle, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRequestClose',
            body: [ui_handle],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountRequestChangePassword = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRequestChangePassword',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountRequestChangeUserInfo = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRequestChangeUserInfo',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountSetUsername = function(account, username, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetUsername',
            body: [account, username],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAccountSetPassword = function(account, password, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetPassword',
            body: [account, password],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAccountSetAlias = function(account, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetAlias',
            body: [account, alias],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAccountSetUserInfo = function(account, user_info, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetUserInfo',
            body: [account, user_info],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAccountSetBuddyIconPath = function(account, path, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetBuddyIconPath',
            body: [account, path],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAccountSetProtocolId = function(account, protocol_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetProtocolId',
            body: [account, protocol_id],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAccountSetConnection = function(account, gc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetConnection',
            body: [account, gc],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountSetRememberPassword = function(account, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetRememberPassword',
            body: [account, value],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountSetCheckMail = function(account, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetCheckMail',
            body: [account, value],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountSetEnabled = function(account, ui, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetEnabled',
            body: [account, ui, value],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleAccountSetProxyInfo = function(account, info, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetProxyInfo',
            body: [account, info],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountSetPrivacyType = function(account, privacy_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetPrivacyType',
            body: [account, privacy_type],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountSetStatusTypes = function(account, status_types, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetStatusTypes',
            body: [account, status_types],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountSetStatusList = function(account, status_id, active, attrs, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetStatusList',
            body: [account, status_id, active, attrs],
            signature: 'isii',
            //
        }, callback);
    };
    this.PurpleAccountGetSilenceSuppression = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetSilenceSuppression',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountSetSilenceSuppression = function(account, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetSilenceSuppression',
            body: [account, value],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountClearSettings = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountClearSettings',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountRemoveSetting = function(account, setting, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRemoveSetting',
            body: [account, setting],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAccountSetInt = function(account, name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetInt',
            body: [account, name, value],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleAccountSetString = function(account, name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetString',
            body: [account, name, value],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleAccountSetBool = function(account, name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetBool',
            body: [account, name, value],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleAccountSetUiInt = function(account, ui, name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetUiInt',
            body: [account, ui, name, value],
            signature: 'issi',
            //
        }, callback);
    };
    this.PurpleAccountSetUiString = function(account, ui, name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetUiString',
            body: [account, ui, name, value],
            signature: 'isss',
            //
        }, callback);
    };
    this.PurpleAccountSetUiBool = function(account, ui, name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSetUiBool',
            body: [account, ui, name, value],
            signature: 'issi',
            //
        }, callback);
    };
    this.PurpleAccountIsConnected = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountIsConnected',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountIsConnecting = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountIsConnecting',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountIsDisconnected = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountIsDisconnected',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetUsername = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetUsername',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetPassword = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetPassword',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetAlias = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetAlias',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetUserInfo = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetUserInfo',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetBuddyIconPath = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetBuddyIconPath',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetProtocolId = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetProtocolId',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetProtocolName = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetProtocolName',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetConnection = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetConnection',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetNameForDisplay = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetNameForDisplay',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetRememberPassword = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetRememberPassword',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetCheckMail = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetCheckMail',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetEnabled = function(account, ui, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetEnabled',
            body: [account, ui],
            signature: 'is',
        }, callback);
    };
    this.PurpleAccountGetProxyInfo = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetProxyInfo',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetPrivacyType = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetPrivacyType',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetActiveStatus = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetActiveStatus',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetStatus = function(account, status_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetStatus',
            body: [account, status_id],
            signature: 'is',
        }, callback);
    };
    this.PurpleAccountGetStatusType = function(account, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetStatusType',
            body: [account, id],
            signature: 'is',
        }, callback);
    };
    this.PurpleAccountGetStatusTypeWithPrimitive = function(account, primitive, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetStatusTypeWithPrimitive',
            body: [account, primitive],
            signature: 'ii',
        }, callback);
    };
    this.PurpleAccountGetPresence = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetPresence',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountIsStatusActive = function(account, status_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountIsStatusActive',
            body: [account, status_id],
            signature: 'is',
        }, callback);
    };
    this.PurpleAccountGetStatusTypes = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetStatusTypes',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountGetInt = function(account, name, default_value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetInt',
            body: [account, name, default_value],
            signature: 'isi',
        }, callback);
    };
    this.PurpleAccountGetString = function(account, name, default_value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetString',
            body: [account, name, default_value],
            signature: 'iss',
        }, callback);
    };
    this.PurpleAccountGetBool = function(account, name, default_value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetBool',
            body: [account, name, default_value],
            signature: 'isi',
        }, callback);
    };
    this.PurpleAccountGetUiInt = function(account, ui, name, default_value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetUiInt',
            body: [account, ui, name, default_value],
            signature: 'issi',
        }, callback);
    };
    this.PurpleAccountGetUiString = function(account, ui, name, default_value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetUiString',
            body: [account, ui, name, default_value],
            signature: 'isss',
        }, callback);
    };
    this.PurpleAccountGetUiBool = function(account, ui, name, default_value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetUiBool',
            body: [account, ui, name, default_value],
            signature: 'issi',
        }, callback);
    };
    this.PurpleAccountGetLog = function(account, create, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetLog',
            body: [account, create],
            signature: 'ii',
        }, callback);
    };
    this.PurpleAccountDestroyLog = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountDestroyLog',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountAddBuddy = function(account, buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountAddBuddy',
            body: [account, buddy],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountAddBuddyWithInvite = function(account, buddy, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountAddBuddyWithInvite',
            body: [account, buddy, message],
            signature: 'iis',
            //
        }, callback);
    };
    this.PurpleAccountAddBuddies = function(account, buddies, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountAddBuddies',
            body: [account, buddies],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountAddBuddiesWithInvite = function(account, buddies, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountAddBuddiesWithInvite',
            body: [account, buddies, message],
            signature: 'iis',
            //
        }, callback);
    };
    this.PurpleAccountRemoveBuddy = function(account, buddy, group, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRemoveBuddy',
            body: [account, buddy, group],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurpleAccountRemoveBuddies = function(account, buddies, groups, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRemoveBuddies',
            body: [account, buddies, groups],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurpleAccountRemoveGroup = function(account, group, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountRemoveGroup',
            body: [account, group],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountChangePassword = function(account, orig_pw, new_pw, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountChangePassword',
            body: [account, orig_pw, new_pw],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleAccountSupportsOfflineMessage = function(account, buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountSupportsOfflineMessage',
            body: [account, buddy],
            signature: 'ii',
        }, callback);
    };
    this.PurpleAccountGetCurrentError = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountGetCurrentError',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleAccountClearCurrentError = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountClearCurrentError',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountsAdd = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsAdd',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountsRemove = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsRemove',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountsDelete = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsDelete',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountsReorder = function(account, new_index, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsReorder',
            body: [account, new_index],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleAccountsGetAll = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsGetAll',
        }, callback);
    };
    this.PurpleAccountsGetAllActive = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsGetAllActive',
        }, callback);
    };
    this.PurpleAccountsFind = function(name, protocol, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsFind',
            body: [name, protocol],
            signature: 'ss',
        }, callback);
    };
    this.PurpleAccountsRestoreCurrentStatuses = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsRestoreCurrentStatuses',
            //
        }, callback);
    };
    this.PurpleAccountsSetUiOps = function(ops, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsSetUiOps',
            body: [ops],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAccountsGetUiOps = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsGetUiOps',
        }, callback);
    };
    this.PurpleAccountsInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsInit',
            //
        }, callback);
    };
    this.PurpleAccountsUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAccountsUninit',
            //
        }, callback);
    };
    this.PurpleBlistNew = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNew',
        }, callback);
    };
    this.PurpleSetBlist = function(blist, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSetBlist',
            body: [blist],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleGetBlist = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGetBlist',
        }, callback);
    };
    this.PurpleBlistGetRoot = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistGetRoot',
        }, callback);
    };
    this.PurpleBlistGetBuddies = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistGetBuddies',
        }, callback);
    };
    this.PurpleBlistNodeNext = function(node, offline, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeNext',
            body: [node, offline],
            signature: 'ii',
        }, callback);
    };
    this.PurpleBlistNodeGetParent = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetParent',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistNodeGetFirstChild = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetFirstChild',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistNodeGetSiblingNext = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetSiblingNext',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistNodeGetSiblingPrev = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetSiblingPrev',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistShow = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistShow',
            //
        }, callback);
    };
    this.PurpleBlistDestroy = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistDestroy',
            //
        }, callback);
    };
    this.PurpleBlistSetVisible = function(show, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistSetVisible',
            body: [show],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistUpdateBuddyStatus = function(buddy, old_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistUpdateBuddyStatus',
            body: [buddy, old_status],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleBlistUpdateNodeIcon = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistUpdateNodeIcon',
            body: [node],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistUpdateBuddyIcon = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistUpdateBuddyIcon',
            body: [buddy],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistRenameBuddy = function(buddy, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRenameBuddy',
            body: [buddy, name],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleBlistAliasContact = function(contact, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistAliasContact',
            body: [contact, alias],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleBlistAliasBuddy = function(buddy, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistAliasBuddy',
            body: [buddy, alias],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleBlistServerAliasBuddy = function(buddy, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistServerAliasBuddy',
            body: [buddy, alias],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleBlistAliasChat = function(chat, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistAliasChat',
            body: [chat, alias],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleBlistRenameGroup = function(group, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRenameGroup',
            body: [group, name],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleChatNew = function(account, alias, components, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleChatNew',
            body: [account, alias, components],
            signature: 'isa{ss}',
        }, callback);
    };
    this.PurpleChatDestroy = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleChatDestroy',
            body: [chat],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistAddChat = function(chat, group, node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistAddChat',
            body: [chat, group, node],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurpleBuddyNew = function(account, name, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyNew',
            body: [account, name, alias],
            signature: 'iss',
        }, callback);
    };
    this.PurpleBuddyDestroy = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyDestroy',
            body: [buddy],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBuddySetIcon = function(buddy, icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddySetIcon',
            body: [buddy, icon],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleBuddyGetAccount = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetAccount',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetName = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetName',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetIcon = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetIcon',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetContact = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetContact',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetPresence = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetPresence',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetMediaCaps = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetMediaCaps',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddySetMediaCaps = function(buddy, media_caps, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddySetMediaCaps',
            body: [buddy, media_caps],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleBlistAddBuddy = function(buddy, contact, group, node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistAddBuddy',
            body: [buddy, contact, group, node],
            signature: 'iiii',
            //
        }, callback);
    };
    this.PurpleGroupNew = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGroupNew',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurpleGroupDestroy = function(group, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGroupDestroy',
            body: [group],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistAddGroup = function(group, node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistAddGroup',
            body: [group, node],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleContactNew = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleContactNew',
        }, callback);
    };
    this.PurpleContactDestroy = function(contact, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleContactDestroy',
            body: [contact],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleContactGetGroup = function(contact, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleContactGetGroup',
            body: [contact],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistAddContact = function(contact, group, node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistAddContact',
            body: [contact, group, node],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurpleBlistMergeContact = function(source, node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistMergeContact',
            body: [source, node],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleContactGetPriorityBuddy = function(contact, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleContactGetPriorityBuddy',
            body: [contact],
            signature: 'i',
        }, callback);
    };
    this.PurpleContactSetAlias = function(contact, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleContactSetAlias',
            body: [contact, alias],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleContactGetAlias = function(contact, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleContactGetAlias',
            body: [contact],
            signature: 'i',
        }, callback);
    };
    this.PurpleContactOnAccount = function(contact, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleContactOnAccount',
            body: [contact, account],
            signature: 'ii',
        }, callback);
    };
    this.PurpleContactInvalidatePriorityBuddy = function(contact, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleContactInvalidatePriorityBuddy',
            body: [contact],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistRemoveBuddy = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRemoveBuddy',
            body: [buddy],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistRemoveContact = function(contact, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRemoveContact',
            body: [contact],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistRemoveChat = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRemoveChat',
            body: [chat],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistRemoveGroup = function(group, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRemoveGroup',
            body: [group],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBuddyGetAliasOnly = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetAliasOnly',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetServerAlias = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetServerAlias',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetContactAlias = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetContactAlias',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetLocalAlias = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetLocalAlias',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetAlias = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetAlias',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetLocalBuddyAlias = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetLocalBuddyAlias',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleChatGetName = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleChatGetName',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleFindBuddy = function(account, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleFindBuddy',
            body: [account, name],
            signature: 'is',
        }, callback);
    };
    this.PurpleFindBuddyInGroup = function(account, name, group, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleFindBuddyInGroup',
            body: [account, name, group],
            signature: 'isi',
        }, callback);
    };
    this.PurpleFindBuddies = function(account, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleFindBuddies',
            body: [account, name],
            signature: 'is',
        }, callback);
    };
    this.PurpleFindGroup = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleFindGroup',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurpleBlistFindChat = function(account, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistFindChat',
            body: [account, name],
            signature: 'is',
        }, callback);
    };
    this.PurpleChatGetGroup = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleChatGetGroup',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleChatGetAccount = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleChatGetAccount',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyGetGroup = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyGetGroup',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurpleGroupGetAccounts = function(g, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGroupGetAccounts',
            body: [g],
            signature: 'i',
        }, callback);
    };
    this.PurpleGroupOnAccount = function(g, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGroupOnAccount',
            body: [g, account],
            signature: 'ii',
        }, callback);
    };
    this.PurpleGroupGetName = function(group, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGroupGetName',
            body: [group],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistAddAccount = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistAddAccount',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistRemoveAccount = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRemoveAccount',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistGetGroupSize = function(group, offline, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistGetGroupSize',
            body: [group, offline],
            signature: 'ii',
        }, callback);
    };
    this.PurpleBlistGetGroupOnlineCount = function(group, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistGetGroupOnlineCount',
            body: [group],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistLoad = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistLoad',
            //
        }, callback);
    };
    this.PurpleBlistScheduleSave = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistScheduleSave',
            //
        }, callback);
    };
    this.PurpleBlistRequestAddBuddy = function(account, username, group, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRequestAddBuddy',
            body: [account, username, group, alias],
            signature: 'isss',
            //
        }, callback);
    };
    this.PurpleBlistRequestAddChat = function(account, group, alias, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRequestAddChat',
            body: [account, group, alias, name],
            signature: 'iiss',
            //
        }, callback);
    };
    this.PurpleBlistRequestAddGroup = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistRequestAddGroup',
            //
        }, callback);
    };
    this.PurpleBlistNodeSetBool = function(node, key, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeSetBool',
            body: [node, key, value],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleBlistNodeGetBool = function(node, key, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetBool',
            body: [node, key],
            signature: 'is',
        }, callback);
    };
    this.PurpleBlistNodeSetInt = function(node, key, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeSetInt',
            body: [node, key, value],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleBlistNodeGetInt = function(node, key, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetInt',
            body: [node, key],
            signature: 'is',
        }, callback);
    };
    this.PurpleBlistNodeSetString = function(node, key, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeSetString',
            body: [node, key, value],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleBlistNodeGetString = function(node, key, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetString',
            body: [node, key],
            signature: 'is',
        }, callback);
    };
    this.PurpleBlistNodeRemoveSetting = function(node, key, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeRemoveSetting',
            body: [node, key],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleBlistNodeSetFlags = function(node, flags, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeSetFlags',
            body: [node, flags],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleBlistNodeGetFlags = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetFlags',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistNodeGetType = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetType',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistNodeGetExtendedMenu = function(n, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistNodeGetExtendedMenu',
            body: [n],
            signature: 'i',
        }, callback);
    };
    this.PurpleBlistSetUiOps = function(ops, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistSetUiOps',
            body: [ops],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBlistGetUiOps = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistGetUiOps',
        }, callback);
    };
    this.PurpleBlistInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistInit',
            //
        }, callback);
    };
    this.PurpleBlistUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBlistUninit',
            //
        }, callback);
    };
    this.PurpleBuddyIconNew = function(account, username, icon_data, icon_len, checksum, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconNew',
            body: [account, username, icon_data, icon_len, checksum],
            signature: 'isiis',
        }, callback);
    };
    this.PurpleBuddyIconRef = function(icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconRef',
            body: [icon],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconUnref = function(icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconUnref',
            body: [icon],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconUpdate = function(icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconUpdate',
            body: [icon],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBuddyIconSetData = function(icon, data, len, checksum, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconSetData',
            body: [icon, data, len, checksum],
            signature: 'iiis',
            //
        }, callback);
    };
    this.PurpleBuddyIconGetAccount = function(icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconGetAccount',
            body: [icon],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconGetUsername = function(icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconGetUsername',
            body: [icon],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconGetChecksum = function(icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconGetChecksum',
            body: [icon],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconGetData = function(icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconGetData',
            body: [icon],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconGetExtension = function(icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconGetExtension',
            body: [icon],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconGetFullPath = function(icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconGetFullPath',
            body: [icon],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconsSetForUser = function(account, username, icon_data, icon_len, checksum, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsSetForUser',
            body: [account, username, icon_data, icon_len, checksum],
            signature: 'isiis',
            //
        }, callback);
    };
    this.PurpleBuddyIconsFind = function(account, username, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsFind',
            body: [account, username],
            signature: 'is',
        }, callback);
    };
    this.PurpleBuddyIconsFindAccountIcon = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsFindAccountIcon',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconsSetAccountIcon = function(account, icon_data, icon_len, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsSetAccountIcon',
            body: [account, icon_data, icon_len],
            signature: 'iii',
        }, callback);
    };
    this.PurpleBuddyIconsGetAccountIconTimestamp = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsGetAccountIconTimestamp',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconsNodeHasCustomIcon = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsNodeHasCustomIcon',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconsNodeFindCustomIcon = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsNodeFindCustomIcon',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconsNodeSetCustomIcon = function(node, icon_data, icon_len, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsNodeSetCustomIcon',
            body: [node, icon_data, icon_len],
            signature: 'iii',
        }, callback);
    };
    this.PurpleBuddyIconsNodeSetCustomIconFromFile = function(node, filename, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsNodeSetCustomIconFromFile',
            body: [node, filename],
            signature: 'is',
        }, callback);
    };
    this.PurpleBuddyIconsHasCustomIcon = function(contact, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsHasCustomIcon',
            body: [contact],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconsFindCustomIcon = function(contact, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsFindCustomIcon',
            body: [contact],
            signature: 'i',
        }, callback);
    };
    this.PurpleBuddyIconsSetCustomIcon = function(contact, icon_data, icon_len, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsSetCustomIcon',
            body: [contact, icon_data, icon_len],
            signature: 'iii',
        }, callback);
    };
    this.PurpleBuddyIconsSetCaching = function(caching, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsSetCaching',
            body: [caching],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleBuddyIconsIsCaching = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsIsCaching',
        }, callback);
    };
    this.PurpleBuddyIconsSetCacheDir = function(cache_dir, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsSetCacheDir',
            body: [cache_dir],
            signature: 's',
            //
        }, callback);
    };
    this.PurpleBuddyIconsGetCacheDir = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsGetCacheDir',
        }, callback);
    };
    this.PurpleBuddyIconsInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsInit',
            //
        }, callback);
    };
    this.PurpleBuddyIconsUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconsUninit',
            //
        }, callback);
    };
    this.PurpleBuddyIconGetScaleSize = function(spec, width, height, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuddyIconGetScaleSize',
            body: [spec, width, height],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurpleConnectionNew = function(account, regist, password, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionNew',
            body: [account, regist, password],
            signature: 'iis',
            //
        }, callback);
    };
    this.PurpleConnectionDestroy = function(gc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionDestroy',
            body: [gc],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConnectionSetState = function(gc, state, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionSetState',
            body: [gc, state],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConnectionSetAccount = function(gc, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionSetAccount',
            body: [gc, account],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConnectionSetDisplayName = function(gc, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionSetDisplayName',
            body: [gc, name],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConnectionSetProtocolData = function(connection, proto_data, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionSetProtocolData',
            body: [connection, proto_data],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConnectionGetState = function(gc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionGetState',
            body: [gc],
            signature: 'i',
        }, callback);
    };
    this.PurpleConnectionGetAccount = function(gc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionGetAccount',
            body: [gc],
            signature: 'i',
        }, callback);
    };
    this.PurpleConnectionGetPrpl = function(gc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionGetPrpl',
            body: [gc],
            signature: 'i',
        }, callback);
    };
    this.PurpleConnectionGetPassword = function(gc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionGetPassword',
            body: [gc],
            signature: 'i',
        }, callback);
    };
    this.PurpleConnectionGetDisplayName = function(gc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionGetDisplayName',
            body: [gc],
            signature: 'i',
        }, callback);
    };
    this.PurpleConnectionUpdateProgress = function(gc, text, step, count, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionUpdateProgress',
            body: [gc, text, step, count],
            signature: 'isii',
            //
        }, callback);
    };
    this.PurpleConnectionNotice = function(gc, text, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionNotice',
            body: [gc, text],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConnectionError = function(gc, reason, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionError',
            body: [gc, reason],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConnectionErrorReason = function(gc, reason, description, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionErrorReason',
            body: [gc, reason, description],
            signature: 'iis',
            //
        }, callback);
    };
    this.PurpleConnectionSslError = function(gc, ssl_error, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionSslError',
            body: [gc, ssl_error],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConnectionErrorIsFatal = function(reason, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionErrorIsFatal',
            body: [reason],
            signature: 'i',
        }, callback);
    };
    this.PurpleConnectionsDisconnectAll = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionsDisconnectAll',
            //
        }, callback);
    };
    this.PurpleConnectionsGetAll = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionsGetAll',
        }, callback);
    };
    this.PurpleConnectionsGetConnecting = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionsGetConnecting',
        }, callback);
    };
    this.PurpleConnectionsSetUiOps = function(ops, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionsSetUiOps',
            body: [ops],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConnectionsGetUiOps = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionsGetUiOps',
        }, callback);
    };
    this.PurpleConnectionsInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionsInit',
            //
        }, callback);
    };
    this.PurpleConnectionsUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConnectionsUninit',
            //
        }, callback);
    };
    this.PurpleConversationNew = function(type, account, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationNew',
            body: [type, account, name],
            signature: 'iis',
        }, callback);
    };
    this.PurpleConversationDestroy = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationDestroy',
            body: [conv],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConversationPresent = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationPresent',
            body: [conv],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConversationGetType = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetType',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationSetUiOps = function(conv, ops, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationSetUiOps',
            body: [conv, ops],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConversationsSetUiOps = function(ops, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationsSetUiOps',
            body: [ops],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConversationGetUiOps = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetUiOps',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationSetAccount = function(conv, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationSetAccount',
            body: [conv, account],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConversationGetAccount = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetAccount',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationGetGc = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetGc',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationSetTitle = function(conv, title, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationSetTitle',
            body: [conv, title],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConversationGetTitle = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetTitle',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationAutosetTitle = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationAutosetTitle',
            body: [conv],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConversationSetName = function(conv, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationSetName',
            body: [conv, name],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConversationGetName = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetName',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChatCbGetAttribute = function(cb, key, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatCbGetAttribute',
            body: [cb, key],
            signature: 'is',
        }, callback);
    };
    this.PurpleConvChatCbGetAttributeKeys = function(cb, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatCbGetAttributeKeys',
            body: [cb],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChatCbSetAttribute = function(chat, cb, key, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatCbSetAttribute',
            body: [chat, cb, key, value],
            signature: 'iiss',
            //
        }, callback);
    };
    this.PurpleConvChatCbSetAttributes = function(chat, cb, keys, values, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatCbSetAttributes',
            body: [chat, cb, keys, values],
            signature: 'iiii',
            //
        }, callback);
    };
    this.PurpleConversationSetLogging = function(conv, log, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationSetLogging',
            body: [conv, log],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConversationIsLogging = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationIsLogging',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationGetImData = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetImData',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationGetChatData = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetChatData',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleGetConversations = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGetConversations',
        }, callback);
    };
    this.PurpleGetIms = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGetIms',
        }, callback);
    };
    this.PurpleGetChats = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGetChats',
        }, callback);
    };
    this.PurpleFindConversationWithAccount = function(type, name, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleFindConversationWithAccount',
            body: [type, name, account],
            signature: 'isi',
        }, callback);
    };
    this.PurpleConversationWrite = function(conv, who, message, flags, mtime, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationWrite',
            body: [conv, who, message, flags, mtime],
            signature: 'issii',
            //
        }, callback);
    };
    this.PurpleConversationSetFeatures = function(conv, features, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationSetFeatures',
            body: [conv, features],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConversationGetFeatures = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetFeatures',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationHasFocus = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationHasFocus',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationUpdate = function(conv, type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationUpdate',
            body: [conv, type],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConversationGetMessageHistory = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetMessageHistory',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationClearMessageHistory = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationClearMessageHistory',
            body: [conv],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConversationMessageGetSender = function(msg, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationMessageGetSender',
            body: [msg],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationMessageGetMessage = function(msg, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationMessageGetMessage',
            body: [msg],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationMessageGetFlags = function(msg, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationMessageGetFlags',
            body: [msg],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationMessageGetTimestamp = function(msg, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationMessageGetTimestamp',
            body: [msg],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvImGetConversation = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImGetConversation',
            body: [im],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvImSetIcon = function(im, icon, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImSetIcon',
            body: [im, icon],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConvImGetIcon = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImGetIcon',
            body: [im],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvImSetTypingState = function(im, state, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImSetTypingState',
            body: [im, state],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConvImGetTypingState = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImGetTypingState',
            body: [im],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvImStartTypingTimeout = function(im, timeout, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImStartTypingTimeout',
            body: [im, timeout],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConvImStopTypingTimeout = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImStopTypingTimeout',
            body: [im],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConvImGetTypingTimeout = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImGetTypingTimeout',
            body: [im],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvImSetTypeAgain = function(im, val, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImSetTypeAgain',
            body: [im, val],
            signature: 'iu',
            //
        }, callback);
    };
    this.PurpleConvImGetTypeAgain = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImGetTypeAgain',
            body: [im],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvImStartSendTypedTimeout = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImStartSendTypedTimeout',
            body: [im],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConvImStopSendTypedTimeout = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImStopSendTypedTimeout',
            body: [im],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConvImGetSendTypedTimeout = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImGetSendTypedTimeout',
            body: [im],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvImUpdateTyping = function(im, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImUpdateTyping',
            body: [im],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConvImWrite = function(im, who, message, flags, mtime, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImWrite',
            body: [im, who, message, flags, mtime],
            signature: 'issii',
            //
        }, callback);
    };
    this.PurpleConvPresentError = function(who, account, what, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvPresentError',
            body: [who, account, what],
            signature: 'sis',
        }, callback);
    };
    this.PurpleConvImSend = function(im, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImSend',
            body: [im, message],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConvSendConfirm = function(conv, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvSendConfirm',
            body: [conv, message],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConvImSendWithFlags = function(im, message, flags, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvImSendWithFlags',
            body: [im, message, flags],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleConvCustomSmileyAdd = function(conv, smile, cksum_type, chksum, remote, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvCustomSmileyAdd',
            body: [conv, smile, cksum_type, chksum, remote],
            signature: 'isssi',
        }, callback);
    };
    this.PurpleConvCustomSmileyClose = function(conv, smile, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvCustomSmileyClose',
            body: [conv, smile],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConvChatGetConversation = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatGetConversation',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChatSetUsers = function(chat, users, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatSetUsers',
            body: [chat, users],
            signature: 'ii',
        }, callback);
    };
    this.PurpleConvChatGetUsers = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatGetUsers',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChatIgnore = function(chat, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatIgnore',
            body: [chat, name],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConvChatUnignore = function(chat, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatUnignore',
            body: [chat, name],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConvChatSetIgnored = function(chat, ignored, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatSetIgnored',
            body: [chat, ignored],
            signature: 'ii',
        }, callback);
    };
    this.PurpleConvChatGetIgnored = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatGetIgnored',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChatGetIgnoredUser = function(chat, user, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatGetIgnoredUser',
            body: [chat, user],
            signature: 'is',
        }, callback);
    };
    this.PurpleConvChatIsUserIgnored = function(chat, user, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatIsUserIgnored',
            body: [chat, user],
            signature: 'is',
        }, callback);
    };
    this.PurpleConvChatSetTopic = function(chat, who, topic, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatSetTopic',
            body: [chat, who, topic],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleConvChatGetTopic = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatGetTopic',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChatSetId = function(chat, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatSetId',
            body: [chat, id],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleConvChatGetId = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatGetId',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChatWrite = function(chat, who, message, flags, mtime, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatWrite',
            body: [chat, who, message, flags, mtime],
            signature: 'issii',
            //
        }, callback);
    };
    this.PurpleConvChatSend = function(chat, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatSend',
            body: [chat, message],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConvChatSendWithFlags = function(chat, message, flags, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatSendWithFlags',
            body: [chat, message, flags],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleConvChatAddUser = function(chat, user, extra_msg, flags, new_arrival, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatAddUser',
            body: [chat, user, extra_msg, flags, new_arrival],
            signature: 'issii',
            //
        }, callback);
    };
    this.PurpleConvChatAddUsers = function(chat, users, extra_msgs, flags, new_arrivals, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatAddUsers',
            body: [chat, users, extra_msgs, flags, new_arrivals],
            signature: 'iiiii',
            //
        }, callback);
    };
    this.PurpleConvChatRenameUser = function(chat, old_user, new_user, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatRenameUser',
            body: [chat, old_user, new_user],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleConvChatRemoveUser = function(chat, user, reason, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatRemoveUser',
            body: [chat, user, reason],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleConvChatRemoveUsers = function(chat, users, reason, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatRemoveUsers',
            body: [chat, users, reason],
            signature: 'iis',
            //
        }, callback);
    };
    this.PurpleConvChatFindUser = function(chat, user, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatFindUser',
            body: [chat, user],
            signature: 'is',
        }, callback);
    };
    this.PurpleConvChatUserSetFlags = function(chat, user, flags, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatUserSetFlags',
            body: [chat, user, flags],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleConvChatUserGetFlags = function(chat, user, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatUserGetFlags',
            body: [chat, user],
            signature: 'is',
        }, callback);
    };
    this.PurpleConvChatClearUsers = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatClearUsers',
            body: [chat],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConvChatSetNick = function(chat, nick, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatSetNick',
            body: [chat, nick],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleConvChatGetNick = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatGetNick',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleFindChat = function(gc, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleFindChat',
            body: [gc, id],
            signature: 'ii',
        }, callback);
    };
    this.PurpleConvChatLeft = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatLeft',
            body: [chat],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConvChatInviteUser = function(chat, user, message, confirm, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatInviteUser',
            body: [chat, user, message, confirm],
            signature: 'issi',
            //
        }, callback);
    };
    this.PurpleConvChatHasLeft = function(chat, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatHasLeft',
            body: [chat],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChatCbNew = function(name, alias, flags, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatCbNew',
            body: [name, alias, flags],
            signature: 'ssi',
        }, callback);
    };
    this.PurpleConvChatCbFind = function(chat, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatCbFind',
            body: [chat, name],
            signature: 'is',
        }, callback);
    };
    this.PurpleConvChatCbGetName = function(cb, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatCbGetName',
            body: [cb],
            signature: 'i',
        }, callback);
    };
    this.PurpleConvChatCbDestroy = function(cb, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConvChatCbDestroy',
            body: [cb],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleConversationGetExtendedMenu = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationGetExtendedMenu',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurpleConversationsInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationsInit',
            //
        }, callback);
    };
    this.PurpleConversationsUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleConversationsUninit',
            //
        }, callback);
    };
    this.PurpleCoreInit = function(ui, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleCoreInit',
            body: [ui],
            signature: 's',
        }, callback);
    };
    this.PurpleCoreQuit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleCoreQuit',
            //
        }, callback);
    };
    this.PurpleCoreGetVersion = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleCoreGetVersion',
        }, callback);
    };
    this.PurpleCoreGetUi = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleCoreGetUi',
        }, callback);
    };
    this.PurpleGetCore = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGetCore',
        }, callback);
    };
    this.PurpleCoreSetUiOps = function(ops, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleCoreSetUiOps',
            body: [ops],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleCoreGetUiOps = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleCoreGetUiOps',
        }, callback);
    };
    this.PurpleCoreMigrate = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleCoreMigrate',
        }, callback);
    };
    this.PurpleCoreEnsureSingleInstance = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleCoreEnsureSingleInstance',
        }, callback);
    };
    this.PurpleXferNew = function(account, type, who, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferNew',
            body: [account, type, who],
            signature: 'iis',
        }, callback);
    };
    this.PurpleXfersGetAll = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXfersGetAll',
        }, callback);
    };
    this.PurpleXferRef = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferRef',
            body: [xfer],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXferUnref = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferUnref',
            body: [xfer],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXferRequest = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferRequest',
            body: [xfer],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXferRequestAccepted = function(xfer, filename, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferRequestAccepted',
            body: [xfer, filename],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleXferRequestDenied = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferRequestDenied',
            body: [xfer],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXferGetType = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetType',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetAccount = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetAccount',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetRemoteUser = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetRemoteUser',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetStatus = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetStatus',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferIsCanceled = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferIsCanceled',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferIsCompleted = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferIsCompleted',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetFilename = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetFilename',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetLocalFilename = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetLocalFilename',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetBytesSent = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetBytesSent',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetBytesRemaining = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetBytesRemaining',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetSize = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetSize',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetLocalPort = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetLocalPort',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetRemoteIp = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetRemoteIp',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetRemotePort = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetRemotePort',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetStartTime = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetStartTime',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetEndTime = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetEndTime',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferSetCompleted = function(xfer, completed, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferSetCompleted',
            body: [xfer, completed],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleXferSetMessage = function(xfer, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferSetMessage',
            body: [xfer, message],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleXferSetFilename = function(xfer, filename, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferSetFilename',
            body: [xfer, filename],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleXferSetLocalFilename = function(xfer, filename, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferSetLocalFilename',
            body: [xfer, filename],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleXferSetSize = function(xfer, size, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferSetSize',
            body: [xfer, size],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleXferSetBytesSent = function(xfer, bytes_sent, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferSetBytesSent',
            body: [xfer, bytes_sent],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleXferGetUiOps = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetUiOps',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferStart = function(xfer, fd, ip, port, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferStart',
            body: [xfer, fd, ip, port],
            signature: 'iisu',
            //
        }, callback);
    };
    this.PurpleXferEnd = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferEnd',
            body: [xfer],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXferAdd = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferAdd',
            body: [xfer],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXferCancelLocal = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferCancelLocal',
            body: [xfer],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXferCancelRemote = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferCancelRemote',
            body: [xfer],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXferError = function(type, account, who, msg, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferError',
            body: [type, account, who, msg],
            signature: 'iiss',
            //
        }, callback);
    };
    this.PurpleXferUpdateProgress = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferUpdateProgress',
            body: [xfer],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXferGetThumbnail = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetThumbnail',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferGetThumbnailMimetype = function(xfer, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferGetThumbnailMimetype',
            body: [xfer],
            signature: 'i',
        }, callback);
    };
    this.PurpleXferPrepareThumbnail = function(xfer, formats, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXferPrepareThumbnail',
            body: [xfer, formats],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleXfersInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXfersInit',
            //
        }, callback);
    };
    this.PurpleXfersUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXfersUninit',
            //
        }, callback);
    };
    this.PurpleXfersSetUiOps = function(ops, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXfersSetUiOps',
            body: [ops],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleXfersGetUiOps = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleXfersGetUiOps',
        }, callback);
    };
    this.PurpleLogFree = function(log, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogFree',
            body: [log],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleLogWrite = function(log, type, from, time, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogWrite',
            body: [log, type, from, time, message],
            signature: 'iisis',
            //
        }, callback);
    };
    this.PurpleLogGetLogs = function(type, name, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogGetLogs',
            body: [type, name, account],
            signature: 'isi',
        }, callback);
    };
    this.PurpleLogGetSystemLogs = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogGetSystemLogs',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleLogGetSize = function(log, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogGetSize',
            body: [log],
            signature: 'i',
        }, callback);
    };
    this.PurpleLogGetTotalSize = function(type, name, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogGetTotalSize',
            body: [type, name, account],
            signature: 'isi',
        }, callback);
    };
    this.PurpleLogGetActivityScore = function(type, name, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogGetActivityScore',
            body: [type, name, account],
            signature: 'isi',
        }, callback);
    };
    this.PurpleLogIsDeletable = function(log, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogIsDeletable',
            body: [log],
            signature: 'i',
        }, callback);
    };
    this.PurpleLogDelete = function(log, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogDelete',
            body: [log],
            signature: 'i',
        }, callback);
    };
    this.PurpleLogGetLogDir = function(type, name, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogGetLogDir',
            body: [type, name, account],
            signature: 'isi',
        }, callback);
    };
    this.PurpleLogSetFree = function(set, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogSetFree',
            body: [set],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleLogCommonWriter = function(log, ext, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogCommonWriter',
            body: [log, ext],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleLogCommonLister = function(type, name, account, ext, logger, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogCommonLister',
            body: [type, name, account, ext, logger],
            signature: 'isisi',
        }, callback);
    };
    this.PurpleLogCommonTotalSizer = function(type, name, account, ext, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogCommonTotalSizer',
            body: [type, name, account, ext],
            signature: 'isis',
        }, callback);
    };
    this.PurpleLogCommonSizer = function(log, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogCommonSizer',
            body: [log],
            signature: 'i',
        }, callback);
    };
    this.PurpleLogCommonDeleter = function(log, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogCommonDeleter',
            body: [log],
            signature: 'i',
        }, callback);
    };
    this.PurpleLogCommonIsDeletable = function(log, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogCommonIsDeletable',
            body: [log],
            signature: 'i',
        }, callback);
    };
    this.PurpleLogLoggerFree = function(logger, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogLoggerFree',
            body: [logger],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleLogLoggerAdd = function(logger, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogLoggerAdd',
            body: [logger],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleLogLoggerRemove = function(logger, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogLoggerRemove',
            body: [logger],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleLogLoggerSet = function(logger, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogLoggerSet',
            body: [logger],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleLogLoggerGet = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogLoggerGet',
        }, callback);
    };
    this.PurpleLogLoggerGetOptions = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogLoggerGetOptions',
        }, callback);
    };
    this.PurpleLogInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogInit',
            //
        }, callback);
    };
    this.PurpleLogUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleLogUninit',
            //
        }, callback);
    };
    this.PurpleNotifySearchresultsFree = function(results, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsFree',
            body: [results],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleNotifySearchresultsNewRows = function(gc, results, data, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsNewRows',
            body: [gc, results, data],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurpleNotifySearchresultsNew = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsNew',
        }, callback);
    };
    this.PurpleNotifySearchresultsColumnNew = function(title, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsColumnNew',
            body: [title],
            signature: 's',
        }, callback);
    };
    this.PurpleNotifySearchresultsColumnAdd = function(results, column, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsColumnAdd',
            body: [results, column],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleNotifySearchresultsRowAdd = function(results, row, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsRowAdd',
            body: [results, row],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleNotifySearchresultsGetRowsCount = function(results, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsGetRowsCount',
            body: [results],
            signature: 'i',
        }, callback);
    };
    this.PurpleNotifySearchresultsGetColumnsCount = function(results, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsGetColumnsCount',
            body: [results],
            signature: 'i',
        }, callback);
    };
    this.PurpleNotifySearchresultsRowGet = function(results, row_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsRowGet',
            body: [results, row_id],
            signature: 'iu',
        }, callback);
    };
    this.PurpleNotifySearchresultsColumnGetTitle = function(results, column_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySearchresultsColumnGetTitle',
            body: [results, column_id],
            signature: 'iu',
        }, callback);
    };
    this.PurpleNotifyUserInfoNew = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoNew',
        }, callback);
    };
    this.PurpleNotifyUserInfoDestroy = function(user_info, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoDestroy',
            body: [user_info],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoGetEntries = function(user_info, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoGetEntries',
            body: [user_info],
            signature: 'i',
        }, callback);
    };
    this.PurpleNotifyUserInfoGetTextWithNewline = function(user_info, newline, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoGetTextWithNewline',
            body: [user_info, newline],
            signature: 'is',
        }, callback);
    };
    this.PurpleNotifyUserInfoAddPair = function(user_info, label, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoAddPair',
            body: [user_info, label, value],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoAddPairPlaintext = function(user_info, label, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoAddPairPlaintext',
            body: [user_info, label, value],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoPrependPair = function(user_info, label, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoPrependPair',
            body: [user_info, label, value],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoRemoveEntry = function(user_info, user_info_entry, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoRemoveEntry',
            body: [user_info, user_info_entry],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoEntryNew = function(label, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoEntryNew',
            body: [label, value],
            signature: 'ss',
        }, callback);
    };
    this.PurpleNotifyUserInfoAddSectionBreak = function(user_info, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoAddSectionBreak',
            body: [user_info],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoPrependSectionBreak = function(user_info, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoPrependSectionBreak',
            body: [user_info],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoAddSectionHeader = function(user_info, label, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoAddSectionHeader',
            body: [user_info, label],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoPrependSectionHeader = function(user_info, label, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoPrependSectionHeader',
            body: [user_info, label],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoRemoveLastItem = function(user_info, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoRemoveLastItem',
            body: [user_info],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoEntryGetLabel = function(user_info_entry, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoEntryGetLabel',
            body: [user_info_entry],
            signature: 'i',
        }, callback);
    };
    this.PurpleNotifyUserInfoEntrySetLabel = function(user_info_entry, label, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoEntrySetLabel',
            body: [user_info_entry, label],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoEntryGetValue = function(user_info_entry, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoEntryGetValue',
            body: [user_info_entry],
            signature: 'i',
        }, callback);
    };
    this.PurpleNotifyUserInfoEntrySetValue = function(user_info_entry, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoEntrySetValue',
            body: [user_info_entry, value],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleNotifyUserInfoEntryGetType = function(user_info_entry, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoEntryGetType',
            body: [user_info_entry],
            signature: 'i',
        }, callback);
    };
    this.PurpleNotifyUserInfoEntrySetType = function(user_info_entry, type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUserInfoEntrySetType',
            body: [user_info_entry, type],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleNotifyClose = function(type, ui_handle, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyClose',
            body: [type, ui_handle],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleNotifyCloseWithHandle = function(handle, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyCloseWithHandle',
            body: [handle],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleNotifySetUiOps = function(ops, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifySetUiOps',
            body: [ops],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleNotifyGetUiOps = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyGetUiOps',
        }, callback);
    };
    this.PurpleNotifyInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyInit',
            //
        }, callback);
    };
    this.PurpleNotifyUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNotifyUninit',
            //
        }, callback);
    };
    this.PurplePrefsInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsInit',
            //
        }, callback);
    };
    this.PurplePrefsUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsUninit',
            //
        }, callback);
    };
    this.PurplePrefsAddNone = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsAddNone',
            body: [name],
            signature: 's',
            //
        }, callback);
    };
    this.PurplePrefsAddBool = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsAddBool',
            body: [name, value],
            signature: 'si',
            //
        }, callback);
    };
    this.PurplePrefsAddInt = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsAddInt',
            body: [name, value],
            signature: 'si',
            //
        }, callback);
    };
    this.PurplePrefsAddString = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsAddString',
            body: [name, value],
            signature: 'ss',
            //
        }, callback);
    };
    this.PurplePrefsAddStringList = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsAddStringList',
            body: [name, value],
            signature: 'si',
            //
        }, callback);
    };
    this.PurplePrefsAddPath = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsAddPath',
            body: [name, value],
            signature: 'ss',
            //
        }, callback);
    };
    this.PurplePrefsAddPathList = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsAddPathList',
            body: [name, value],
            signature: 'si',
            //
        }, callback);
    };
    this.PurplePrefsRemove = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsRemove',
            body: [name],
            signature: 's',
            //
        }, callback);
    };
    this.PurplePrefsRename = function(oldname, newname, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsRename',
            body: [oldname, newname],
            signature: 'ss',
            //
        }, callback);
    };
    this.PurplePrefsRenameBooleanToggle = function(oldname, newname, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsRenameBooleanToggle',
            body: [oldname, newname],
            signature: 'ss',
            //
        }, callback);
    };
    this.PurplePrefsDestroy = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsDestroy',
            //
        }, callback);
    };
    this.PurplePrefsSetBool = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsSetBool',
            body: [name, value],
            signature: 'si',
            //
        }, callback);
    };
    this.PurplePrefsSetInt = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsSetInt',
            body: [name, value],
            signature: 'si',
            //
        }, callback);
    };
    this.PurplePrefsSetString = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsSetString',
            body: [name, value],
            signature: 'ss',
            //
        }, callback);
    };
    this.PurplePrefsSetStringList = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsSetStringList',
            body: [name, value],
            signature: 'si',
            //
        }, callback);
    };
    this.PurplePrefsSetPath = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsSetPath',
            body: [name, value],
            signature: 'ss',
            //
        }, callback);
    };
    this.PurplePrefsSetPathList = function(name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsSetPathList',
            body: [name, value],
            signature: 'si',
            //
        }, callback);
    };
    this.PurplePrefsExists = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsExists',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurplePrefsGetType = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsGetType',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurplePrefsGetBool = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsGetBool',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurplePrefsGetInt = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsGetInt',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurplePrefsGetString = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsGetString',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurplePrefsGetStringList = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsGetStringList',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurplePrefsGetPath = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsGetPath',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurplePrefsGetPathList = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsGetPathList',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurplePrefsGetChildrenNames = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsGetChildrenNames',
            body: [name],
            signature: 's',
        }, callback);
    };
    this.PurplePrefsDisconnectCallback = function(callback_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsDisconnectCallback',
            body: [callback_id],
            signature: 'i',
            //
        }, callback);
    };
    this.PurplePrefsDisconnectByHandle = function(handle, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsDisconnectByHandle',
            body: [handle],
            signature: 'i',
            //
        }, callback);
    };
    this.PurplePrefsTriggerCallback = function(name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsTriggerCallback',
            body: [name],
            signature: 's',
            //
        }, callback);
    };
    this.PurplePrefsLoad = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsLoad',
        }, callback);
    };
    this.PurplePrefsUpdateOld = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrefsUpdateOld',
            //
        }, callback);
    };
    this.PurpleRoomlistShowWithAccount = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistShowWithAccount',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleRoomlistNew = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistNew',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistRef = function(list, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistRef',
            body: [list],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleRoomlistUnref = function(list, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistUnref',
            body: [list],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleRoomlistSetFields = function(list, fields, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistSetFields',
            body: [list, fields],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleRoomlistSetInProgress = function(list, in_progress, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistSetInProgress',
            body: [list, in_progress],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleRoomlistGetInProgress = function(list, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistGetInProgress',
            body: [list],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistRoomAdd = function(list, room, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistRoomAdd',
            body: [list, room],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleRoomlistGetList = function(gc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistGetList',
            body: [gc],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistCancelGetList = function(list, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistCancelGetList',
            body: [list],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleRoomlistExpandCategory = function(list, category, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistExpandCategory',
            body: [list, category],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleRoomlistGetFields = function(roomlist, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistGetFields',
            body: [roomlist],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistRoomNew = function(type, name, parent, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistRoomNew',
            body: [type, name, parent],
            signature: 'isi',
        }, callback);
    };
    this.PurpleRoomlistRoomJoin = function(list, room, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistRoomJoin',
            body: [list, room],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleRoomlistRoomGetType = function(room, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistRoomGetType',
            body: [room],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistRoomGetName = function(room, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistRoomGetName',
            body: [room],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistRoomGetParent = function(room, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistRoomGetParent',
            body: [room],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistRoomGetFields = function(room, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistRoomGetFields',
            body: [room],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistFieldNew = function(type, label, name, hidden, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistFieldNew',
            body: [type, label, name, hidden],
            signature: 'issi',
        }, callback);
    };
    this.PurpleRoomlistFieldGetType = function(field, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistFieldGetType',
            body: [field],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistFieldGetLabel = function(field, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistFieldGetLabel',
            body: [field],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistFieldGetHidden = function(field, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistFieldGetHidden',
            body: [field],
            signature: 'i',
        }, callback);
    };
    this.PurpleRoomlistSetUiOps = function(ops, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistSetUiOps',
            body: [ops],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleRoomlistGetUiOps = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRoomlistGetUiOps',
        }, callback);
    };
    this.PurpleSavedstatusNew = function(title, type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusNew',
            body: [title, type],
            signature: 'si',
        }, callback);
    };
    this.PurpleSavedstatusSetTitle = function(status, title, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusSetTitle',
            body: [status, title],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleSavedstatusSetType = function(status, type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusSetType',
            body: [status, type],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleSavedstatusSetMessage = function(status, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusSetMessage',
            body: [status, message],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleSavedstatusSetSubstatus = function(status, account, type, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusSetSubstatus',
            body: [status, account, type, message],
            signature: 'iiis',
            //
        }, callback);
    };
    this.PurpleSavedstatusUnsetSubstatus = function(saved_status, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusUnsetSubstatus',
            body: [saved_status, account],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleSavedstatusDelete = function(title, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusDelete',
            body: [title],
            signature: 's',
        }, callback);
    };
    this.PurpleSavedstatusDeleteByStatus = function(saved_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusDeleteByStatus',
            body: [saved_status],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleSavedstatusesGetAll = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusesGetAll',
        }, callback);
    };
    this.PurpleSavedstatusesGetPopular = function(how_many, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusesGetPopular',
            body: [how_many],
            signature: 'u',
        }, callback);
    };
    this.PurpleSavedstatusGetCurrent = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusGetCurrent',
        }, callback);
    };
    this.PurpleSavedstatusGetDefault = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusGetDefault',
        }, callback);
    };
    this.PurpleSavedstatusGetIdleaway = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusGetIdleaway',
        }, callback);
    };
    this.PurpleSavedstatusIsIdleaway = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusIsIdleaway',
        }, callback);
    };
    this.PurpleSavedstatusSetIdleaway = function(idleaway, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusSetIdleaway',
            body: [idleaway],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleSavedstatusGetStartup = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusGetStartup',
        }, callback);
    };
    this.PurpleSavedstatusFind = function(title, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusFind',
            body: [title],
            signature: 's',
        }, callback);
    };
    this.PurpleSavedstatusFindByCreationTime = function(creation_time, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusFindByCreationTime',
            body: [creation_time],
            signature: 'i',
        }, callback);
    };
    this.PurpleSavedstatusFindTransientByTypeAndMessage = function(type, message, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusFindTransientByTypeAndMessage',
            body: [type, message],
            signature: 'is',
        }, callback);
    };
    this.PurpleSavedstatusIsTransient = function(saved_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusIsTransient',
            body: [saved_status],
            signature: 'i',
        }, callback);
    };
    this.PurpleSavedstatusGetTitle = function(saved_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusGetTitle',
            body: [saved_status],
            signature: 'i',
        }, callback);
    };
    this.PurpleSavedstatusGetType = function(saved_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusGetType',
            body: [saved_status],
            signature: 'i',
        }, callback);
    };
    this.PurpleSavedstatusGetMessage = function(saved_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusGetMessage',
            body: [saved_status],
            signature: 'i',
        }, callback);
    };
    this.PurpleSavedstatusGetCreationTime = function(saved_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusGetCreationTime',
            body: [saved_status],
            signature: 'i',
        }, callback);
    };
    this.PurpleSavedstatusHasSubstatuses = function(saved_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusHasSubstatuses',
            body: [saved_status],
            signature: 'i',
        }, callback);
    };
    this.PurpleSavedstatusGetSubstatus = function(saved_status, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusGetSubstatus',
            body: [saved_status, account],
            signature: 'ii',
        }, callback);
    };
    this.PurpleSavedstatusSubstatusGetType = function(substatus, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusSubstatusGetType',
            body: [substatus],
            signature: 'i',
        }, callback);
    };
    this.PurpleSavedstatusSubstatusGetMessage = function(substatus, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusSubstatusGetMessage',
            body: [substatus],
            signature: 'i',
        }, callback);
    };
    this.PurpleSavedstatusActivate = function(saved_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusActivate',
            body: [saved_status],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleSavedstatusActivateForAccount = function(saved_status, account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusActivateForAccount',
            body: [saved_status, account],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleSavedstatusesInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusesInit',
            //
        }, callback);
    };
    this.PurpleSavedstatusesUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSavedstatusesUninit',
            //
        }, callback);
    };
    this.PurpleSmileyNew = function(img, shortcut, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileyNew',
            body: [img, shortcut],
            signature: 'is',
        }, callback);
    };
    this.PurpleSmileyNewFromFile = function(shortcut, filepath, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileyNewFromFile',
            body: [shortcut, filepath],
            signature: 'ss',
        }, callback);
    };
    this.PurpleSmileyDelete = function(smiley, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileyDelete',
            body: [smiley],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleSmileySetShortcut = function(smiley, shortcut, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileySetShortcut',
            body: [smiley, shortcut],
            signature: 'is',
        }, callback);
    };
    this.PurpleSmileySetData = function(smiley, smiley_data, smiley_data_len, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileySetData',
            body: [smiley, smiley_data, smiley_data_len],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurpleSmileyGetShortcut = function(smiley, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileyGetShortcut',
            body: [smiley],
            signature: 'i',
        }, callback);
    };
    this.PurpleSmileyGetChecksum = function(smiley, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileyGetChecksum',
            body: [smiley],
            signature: 'i',
        }, callback);
    };
    this.PurpleSmileyGetStoredImage = function(smiley, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileyGetStoredImage',
            body: [smiley],
            signature: 'i',
        }, callback);
    };
    this.PurpleSmileyGetData = function(smiley, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileyGetData',
            body: [smiley],
            signature: 'i',
        }, callback);
    };
    this.PurpleSmileyGetExtension = function(smiley, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileyGetExtension',
            body: [smiley],
            signature: 'i',
        }, callback);
    };
    this.PurpleSmileyGetFullPath = function(smiley, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileyGetFullPath',
            body: [smiley],
            signature: 'i',
        }, callback);
    };
    this.PurpleSmileysGetAll = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileysGetAll',
        }, callback);
    };
    this.PurpleSmileysFindByShortcut = function(shortcut, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileysFindByShortcut',
            body: [shortcut],
            signature: 's',
        }, callback);
    };
    this.PurpleSmileysFindByChecksum = function(checksum, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileysFindByChecksum',
            body: [checksum],
            signature: 's',
        }, callback);
    };
    this.PurpleSmileysGetStoringDir = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileysGetStoringDir',
        }, callback);
    };
    this.PurpleSmileysInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileysInit',
            //
        }, callback);
    };
    this.PurpleSmileysUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSmileysUninit',
            //
        }, callback);
    };
    this.PurplePrimitiveGetIdFromType = function(type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrimitiveGetIdFromType',
            body: [type],
            signature: 'i',
        }, callback);
    };
    this.PurplePrimitiveGetNameFromType = function(type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrimitiveGetNameFromType',
            body: [type],
            signature: 'i',
        }, callback);
    };
    this.PurplePrimitiveGetTypeFromId = function(id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrimitiveGetTypeFromId',
            body: [id],
            signature: 's',
        }, callback);
    };
    this.PurpleStatusTypeNewFull = function(primitive, id, name, saveable, user_settable, independent, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeNewFull',
            body: [primitive, id, name, saveable, user_settable, independent],
            signature: 'issiii',
        }, callback);
    };
    this.PurpleStatusTypeNew = function(primitive, id, name, user_settable, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeNew',
            body: [primitive, id, name, user_settable],
            signature: 'issi',
        }, callback);
    };
    this.PurpleStatusTypeDestroy = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeDestroy',
            body: [status_type],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleStatusTypeSetPrimaryAttr = function(status_type, attr_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeSetPrimaryAttr',
            body: [status_type, attr_id],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleStatusTypeAddAttr = function(status_type, id, name, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeAddAttr',
            body: [status_type, id, name, value],
            signature: 'issi',
            //
        }, callback);
    };
    this.PurpleStatusTypeGetPrimitive = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeGetPrimitive',
            body: [status_type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeGetId = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeGetId',
            body: [status_type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeGetName = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeGetName',
            body: [status_type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeIsSaveable = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeIsSaveable',
            body: [status_type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeIsUserSettable = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeIsUserSettable',
            body: [status_type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeIsIndependent = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeIsIndependent',
            body: [status_type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeIsExclusive = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeIsExclusive',
            body: [status_type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeIsAvailable = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeIsAvailable',
            body: [status_type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeGetPrimaryAttr = function(type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeGetPrimaryAttr',
            body: [type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeGetAttr = function(status_type, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeGetAttr',
            body: [status_type, id],
            signature: 'is',
        }, callback);
    };
    this.PurpleStatusTypeGetAttrs = function(status_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeGetAttrs',
            body: [status_type],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusTypeFindWithId = function(status_types, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusTypeFindWithId',
            body: [status_types, id],
            signature: 'is',
        }, callback);
    };
    this.PurpleStatusAttrNew = function(id, name, value_type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusAttrNew',
            body: [id, name, value_type],
            signature: 'ssi',
        }, callback);
    };
    this.PurpleStatusAttrDestroy = function(attr, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusAttrDestroy',
            body: [attr],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleStatusAttrGetId = function(attr, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusAttrGetId',
            body: [attr],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusAttrGetName = function(attr, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusAttrGetName',
            body: [attr],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusAttrGetValue = function(attr, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusAttrGetValue',
            body: [attr],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusNew = function(status_type, presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusNew',
            body: [status_type, presence],
            signature: 'ii',
        }, callback);
    };
    this.PurpleStatusDestroy = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusDestroy',
            body: [status],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleStatusSetActive = function(status, active, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusSetActive',
            body: [status, active],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurpleStatusSetActiveWithAttrsList = function(status, active, attrs, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusSetActiveWithAttrsList',
            body: [status, active, attrs],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurpleStatusSetAttrBoolean = function(status, id, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusSetAttrBoolean',
            body: [status, id, value],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleStatusSetAttrInt = function(status, id, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusSetAttrInt',
            body: [status, id, value],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurpleStatusSetAttrString = function(status, id, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusSetAttrString',
            body: [status, id, value],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleStatusGetType = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusGetType',
            body: [status],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusGetPresence = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusGetPresence',
            body: [status],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusGetId = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusGetId',
            body: [status],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusGetName = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusGetName',
            body: [status],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusIsIndependent = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusIsIndependent',
            body: [status],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusIsExclusive = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusIsExclusive',
            body: [status],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusIsAvailable = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusIsAvailable',
            body: [status],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusIsActive = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusIsActive',
            body: [status],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusIsOnline = function(status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusIsOnline',
            body: [status],
            signature: 'i',
        }, callback);
    };
    this.PurpleStatusGetAttrValue = function(status, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusGetAttrValue',
            body: [status, id],
            signature: 'is',
        }, callback);
    };
    this.PurpleStatusGetAttrBoolean = function(status, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusGetAttrBoolean',
            body: [status, id],
            signature: 'is',
        }, callback);
    };
    this.PurpleStatusGetAttrInt = function(status, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusGetAttrInt',
            body: [status, id],
            signature: 'is',
        }, callback);
    };
    this.PurpleStatusGetAttrString = function(status, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusGetAttrString',
            body: [status, id],
            signature: 'is',
        }, callback);
    };
    this.PurpleStatusCompare = function(status1, status2, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusCompare',
            body: [status1, status2],
            signature: 'ii',
        }, callback);
    };
    this.PurplePresenceNew = function(context, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceNew',
            body: [context],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceNewForAccount = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceNewForAccount',
            body: [account],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceNewForConv = function(conv, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceNewForConv',
            body: [conv],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceNewForBuddy = function(buddy, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceNewForBuddy',
            body: [buddy],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceDestroy = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceDestroy',
            body: [presence],
            signature: 'i',
            //
        }, callback);
    };
    this.PurplePresenceAddStatus = function(presence, status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceAddStatus',
            body: [presence, status],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurplePresenceSetStatusActive = function(presence, status_id, active, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceSetStatusActive',
            body: [presence, status_id, active],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurplePresenceSwitchStatus = function(presence, status_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceSwitchStatus',
            body: [presence, status_id],
            signature: 'is',
            //
        }, callback);
    };
    this.PurplePresenceSetIdle = function(presence, idle, idle_time, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceSetIdle',
            body: [presence, idle, idle_time],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurplePresenceSetLoginTime = function(presence, login_time, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceSetLoginTime',
            body: [presence, login_time],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurplePresenceGetContext = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetContext',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceGetAccount = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetAccount',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceGetConversation = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetConversation',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceGetChatUser = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetChatUser',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceGetBuddy = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetBuddy',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceGetStatuses = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetStatuses',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceGetStatus = function(presence, status_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetStatus',
            body: [presence, status_id],
            signature: 'is',
        }, callback);
    };
    this.PurplePresenceGetActiveStatus = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetActiveStatus',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceIsAvailable = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceIsAvailable',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceIsOnline = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceIsOnline',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceIsStatusActive = function(presence, status_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceIsStatusActive',
            body: [presence, status_id],
            signature: 'is',
        }, callback);
    };
    this.PurplePresenceIsStatusPrimitiveActive = function(presence, primitive, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceIsStatusPrimitiveActive',
            body: [presence, primitive],
            signature: 'ii',
        }, callback);
    };
    this.PurplePresenceIsIdle = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceIsIdle',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceGetIdleTime = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetIdleTime',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceGetLoginTime = function(presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceGetLoginTime',
            body: [presence],
            signature: 'i',
        }, callback);
    };
    this.PurplePresenceCompare = function(presence1, presence2, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePresenceCompare',
            body: [presence1, presence2],
            signature: 'ii',
        }, callback);
    };
    this.PurpleStatusInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusInit',
            //
        }, callback);
    };
    this.PurpleStatusUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStatusUninit',
            //
        }, callback);
    };
    this.ServSendTyping = function(gc, name, state, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServSendTyping',
            body: [gc, name, state],
            signature: 'isi',
        }, callback);
    };
    this.ServMoveBuddy = function(param0, param1, param2, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServMoveBuddy',
            body: [param0, param1, param2],
            signature: 'iii',
            //
        }, callback);
    };
    this.ServSendIm = function(param0, param1, param2, flags, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServSendIm',
            body: [param0, param1, param2, flags],
            signature: 'issi',
        }, callback);
    };
    this.PurpleGetAttentionTypeFromCode = function(account, type_code, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGetAttentionTypeFromCode',
            body: [account, type_code],
            signature: 'ii',
        }, callback);
    };
    this.ServSendAttention = function(gc, who, type_code, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServSendAttention',
            body: [gc, who, type_code],
            signature: 'isi',
            //
        }, callback);
    };
    this.ServGotAttention = function(gc, who, type_code, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGotAttention',
            body: [gc, who, type_code],
            signature: 'isi',
            //
        }, callback);
    };
    this.ServGetInfo = function(param0, param1, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGetInfo',
            body: [param0, param1],
            signature: 'is',
            //
        }, callback);
    };
    this.ServSetInfo = function(param0, param1, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServSetInfo',
            body: [param0, param1],
            signature: 'is',
            //
        }, callback);
    };
    this.ServAddPermit = function(param0, param1, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServAddPermit',
            body: [param0, param1],
            signature: 'is',
            //
        }, callback);
    };
    this.ServAddDeny = function(param0, param1, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServAddDeny',
            body: [param0, param1],
            signature: 'is',
            //
        }, callback);
    };
    this.ServRemPermit = function(param0, param1, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServRemPermit',
            body: [param0, param1],
            signature: 'is',
            //
        }, callback);
    };
    this.ServRemDeny = function(param0, param1, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServRemDeny',
            body: [param0, param1],
            signature: 'is',
            //
        }, callback);
    };
    this.ServSetPermitDeny = function(param0, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServSetPermitDeny',
            body: [param0],
            signature: 'i',
            //
        }, callback);
    };
    this.ServChatInvite = function(param0, param1, param2, param3, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServChatInvite',
            body: [param0, param1, param2, param3],
            signature: 'iiss',
            //
        }, callback);
    };
    this.ServChatLeave = function(param0, param1, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServChatLeave',
            body: [param0, param1],
            signature: 'ii',
            //
        }, callback);
    };
    this.ServChatWhisper = function(param0, param1, param2, param3, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServChatWhisper',
            body: [param0, param1, param2, param3],
            signature: 'iiss',
            //
        }, callback);
    };
    this.ServChatSend = function(param0, param1, param2, flags, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServChatSend',
            body: [param0, param1, param2, flags],
            signature: 'iisi',
        }, callback);
    };
    this.ServAliasBuddy = function(param0, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServAliasBuddy',
            body: [param0],
            signature: 'i',
            //
        }, callback);
    };
    this.ServGotAlias = function(gc, who, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGotAlias',
            body: [gc, who, alias],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleServGotPrivateAlias = function(gc, who, alias, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleServGotPrivateAlias',
            body: [gc, who, alias],
            signature: 'iss',
            //
        }, callback);
    };
    this.ServGotTyping = function(gc, name, timeout, state, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGotTyping',
            body: [gc, name, timeout, state],
            signature: 'isii',
            //
        }, callback);
    };
    this.ServGotTypingStopped = function(gc, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGotTypingStopped',
            body: [gc, name],
            signature: 'is',
            //
        }, callback);
    };
    this.ServGotIm = function(gc, who, msg, flags, mtime, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGotIm',
            body: [gc, who, msg, flags, mtime],
            signature: 'issii',
            //
        }, callback);
    };
    this.ServJoinChat = function(param0, data, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServJoinChat',
            body: [param0, data],
            signature: 'ia{ss}',
            //
        }, callback);
    };
    this.ServRejectChat = function(param0, data, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServRejectChat',
            body: [param0, data],
            signature: 'ia{ss}',
            //
        }, callback);
    };
    this.ServGotChatInvite = function(gc, name, who, message, data, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGotChatInvite',
            body: [gc, name, who, message, data],
            signature: 'isssa{ss}',
            //
        }, callback);
    };
    this.ServGotJoinedChat = function(gc, id, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGotJoinedChat',
            body: [gc, id, name],
            signature: 'iis',
        }, callback);
    };
    this.PurpleServGotJoinChatFailed = function(gc, data, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleServGotJoinChatFailed',
            body: [gc, data],
            signature: 'ia{ss}',
            //
        }, callback);
    };
    this.ServGotChatLeft = function(g, id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGotChatLeft',
            body: [g, id],
            signature: 'ii',
            //
        }, callback);
    };
    this.ServGotChatIn = function(g, id, who, flags, message, mtime, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServGotChatIn',
            body: [g, id, who, flags, message, mtime],
            signature: 'iisisi',
            //
        }, callback);
    };
    this.ServSendFile = function(gc, who, file, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'ServSendFile',
            body: [gc, who, file],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurpleMenuActionFree = function(act, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMenuActionFree',
            body: [act],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleUtilSetCurrentSong = function(title, artist, album, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtilSetCurrentSong',
            body: [title, artist, album],
            signature: 'sss',
            //
        }, callback);
    };
    this.PurpleUtilInit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtilInit',
            //
        }, callback);
    };
    this.PurpleUtilUninit = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtilUninit',
            //
        }, callback);
    };
    this.PurpleMimeDecodeField = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMimeDecodeField',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleTimeBuild = function(year, month, day, hour, min, sec, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleTimeBuild',
            body: [year, month, day, hour, min, sec],
            signature: 'iiiiii',
        }, callback);
    };
    this.PurpleMarkupEscapeText = function(text, length, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMarkupEscapeText',
            body: [text, length],
            signature: 'si',
        }, callback);
    };
    this.PurpleMarkupStripHtml = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMarkupStripHtml',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleMarkupLinkify = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMarkupLinkify',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleUnescapeText = function(text, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUnescapeText',
            body: [text],
            signature: 's',
        }, callback);
    };
    this.PurpleUnescapeHtml = function(html, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUnescapeHtml',
            body: [html],
            signature: 's',
        }, callback);
    };
    this.PurpleMarkupSlice = function(str, x, y, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMarkupSlice',
            body: [str, x, y],
            signature: 'sii',
        }, callback);
    };
    this.PurpleMarkupGetTagName = function(tag, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMarkupGetTagName',
            body: [tag],
            signature: 's',
        }, callback);
    };
    this.PurpleMarkupUnescapeEntity = function(text, length, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMarkupUnescapeEntity',
            body: [text, length],
            signature: 'si',
        }, callback);
    };
    this.PurpleMarkupGetCssProperty = function(style, opt, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMarkupGetCssProperty',
            body: [style, opt],
            signature: 'ss',
        }, callback);
    };
    this.PurpleMarkupIsRtl = function(html, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleMarkupIsRtl',
            body: [html],
            signature: 's',
        }, callback);
    };
    this.PurpleHomeDir = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleHomeDir',
        }, callback);
    };
    this.PurpleUserDir = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUserDir',
        }, callback);
    };
    this.PurpleUtilSetUserDir = function(dir, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtilSetUserDir',
            body: [dir],
            signature: 's',
            //
        }, callback);
    };
    this.PurpleBuildDir = function(path, mode, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleBuildDir',
            body: [path, mode],
            signature: 'si',
        }, callback);
    };
    this.PurpleUtilWriteDataToFile = function(filename, data, size, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtilWriteDataToFile',
            body: [filename, data, size],
            signature: 'ssi',
        }, callback);
    };
    this.PurpleUtilWriteDataToFileAbsolute = function(filename_full, data, size, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtilWriteDataToFileAbsolute',
            body: [filename_full, data, size],
            signature: 'ssi',
        }, callback);
    };
    this.PurpleProgramIsValid = function(program, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleProgramIsValid',
            body: [program],
            signature: 's',
        }, callback);
    };
    this.PurpleRunningGnome = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRunningGnome',
        }, callback);
    };
    this.PurpleRunningKde = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRunningKde',
        }, callback);
    };
    this.PurpleRunningOsx = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRunningOsx',
        }, callback);
    };
    this.PurpleFdGetIp = function(fd, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleFdGetIp',
            body: [fd],
            signature: 'i',
        }, callback);
    };
    this.PurpleSocketGetFamily = function(fd, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSocketGetFamily',
            body: [fd],
            signature: 'i',
        }, callback);
    };
    this.PurpleSocketSpeaksIpv4 = function(fd, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleSocketSpeaksIpv4',
            body: [fd],
            signature: 'i',
        }, callback);
    };
    this.PurpleStrequal = function(left, right, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrequal',
            body: [left, right],
            signature: 'ss',
        }, callback);
    };
    this.PurpleNormalize = function(account, str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNormalize',
            body: [account, str],
            signature: 'is',
        }, callback);
    };
    this.PurpleNormalizeNocase = function(account, str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleNormalizeNocase',
            body: [account, str],
            signature: 'is',
        }, callback);
    };
    this.PurpleStrHasPrefix = function(s, p, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrHasPrefix',
            body: [s, p],
            signature: 'ss',
        }, callback);
    };
    this.PurpleStrHasSuffix = function(s, x, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrHasSuffix',
            body: [s, x],
            signature: 'ss',
        }, callback);
    };
    this.PurpleStrdupWithhtml = function(src, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrdupWithhtml',
            body: [src],
            signature: 's',
        }, callback);
    };
    this.PurpleStrAddCr = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrAddCr',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleStrreplace = function(string, delimiter, replacement, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrreplace',
            body: [string, delimiter, replacement],
            signature: 'sss',
        }, callback);
    };
    this.PurpleUtf8NcrEncode = function(_in, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtf8NcrEncode',
            body: [_in],
            signature: 's',
        }, callback);
    };
    this.PurpleUtf8NcrDecode = function(_in, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtf8NcrDecode',
            body: [_in],
            signature: 's',
        }, callback);
    };
    this.PurpleStrcasereplace = function(string, delimiter, replacement, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrcasereplace',
            body: [string, delimiter, replacement],
            signature: 'sss',
        }, callback);
    };
    this.PurpleStrcasestr = function(haystack, needle, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrcasestr',
            body: [haystack, needle],
            signature: 'ss',
        }, callback);
    };
    this.PurpleStrSizeToUnits = function(size, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrSizeToUnits',
            body: [size],
            signature: 'i',
        }, callback);
    };
    this.PurpleStrSecondsToString = function(sec, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrSecondsToString',
            body: [sec],
            signature: 'i',
        }, callback);
    };
    this.PurpleStrBinaryToAscii = function(binary, len, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleStrBinaryToAscii',
            body: [binary, len],
            signature: 'si',
        }, callback);
    };
    this.PurpleGotProtocolHandlerUri = function(uri, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGotProtocolHandlerUri',
            body: [uri],
            signature: 's',
            //
        }, callback);
    };
    this.PurpleUtilFetchUrlCancel = function(url_data, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtilFetchUrlCancel',
            body: [url_data],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleUrlDecode = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUrlDecode',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleUrlEncode = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUrlEncode',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleEmailIsValid = function(address, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleEmailIsValid',
            body: [address],
            signature: 's',
        }, callback);
    };
    this.PurpleIpAddressIsValid = function(ip, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleIpAddressIsValid',
            body: [ip],
            signature: 's',
        }, callback);
    };
    this.PurpleIpv4AddressIsValid = function(ip, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleIpv4AddressIsValid',
            body: [ip],
            signature: 's',
        }, callback);
    };
    this.PurpleIpv6AddressIsValid = function(ip, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleIpv6AddressIsValid',
            body: [ip],
            signature: 's',
        }, callback);
    };
    this.PurpleUriListExtractUris = function(uri_list, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUriListExtractUris',
            body: [uri_list],
            signature: 's',
        }, callback);
    };
    this.PurpleUriListExtractFilenames = function(uri_list, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUriListExtractFilenames',
            body: [uri_list],
            signature: 's',
        }, callback);
    };
    this.PurpleUtf8TryConvert = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtf8TryConvert',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleUtf8Salvage = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtf8Salvage',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleUtf8StripUnprintables = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtf8StripUnprintables',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleUtf8Strcasecmp = function(a, b, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtf8Strcasecmp',
            body: [a, b],
            signature: 'ss',
        }, callback);
    };
    this.PurpleUtf8HasWord = function(haystack, needle, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUtf8HasWord',
            body: [haystack, needle],
            signature: 'ss',
        }, callback);
    };
    this.PurpleTextStripMnemonic = function(_in, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleTextStripMnemonic',
            body: [_in],
            signature: 's',
        }, callback);
    };
    this.PurpleUnescapeFilename = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUnescapeFilename',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleEscapeFilename = function(str, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleEscapeFilename',
            body: [str],
            signature: 's',
        }, callback);
    };
    this.PurpleOscarConvert = function(act, protocol, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleOscarConvert',
            body: [act, protocol],
            signature: 'ss',
        }, callback);
    };
    this.PurpleRestoreDefaultSignalHandlers = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleRestoreDefaultSignalHandlers',
            //
        }, callback);
    };
    this.PurpleGetHostName = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleGetHostName',
        }, callback);
    };
    this.PurpleUuidRandom = function(callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleUuidRandom',
        }, callback);
    };
    this.XmlnodeInsertChild = function(parent, child, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeInsertChild',
            body: [parent, child],
            signature: 'ii',
            //
        }, callback);
    };
    this.XmlnodeInsertData = function(node, data, size, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeInsertData',
            body: [node, data, size],
            signature: 'isi',
            //
        }, callback);
    };
    this.XmlnodeGetData = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeGetData',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.XmlnodeGetDataUnescaped = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeGetDataUnescaped',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.XmlnodeSetAttrib = function(node, attr, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeSetAttrib',
            body: [node, attr, value],
            signature: 'iss',
            //
        }, callback);
    };
    this.XmlnodeSetAttribWithPrefix = function(node, attr, prefix, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeSetAttribWithPrefix',
            body: [node, attr, prefix, value],
            signature: 'isss',
            //
        }, callback);
    };
    this.XmlnodeSetAttribWithNamespace = function(node, attr, xmlns, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeSetAttribWithNamespace',
            body: [node, attr, xmlns, value],
            signature: 'isss',
            //
        }, callback);
    };
    this.XmlnodeSetAttribFull = function(node, attr, xmlns, prefix, value, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeSetAttribFull',
            body: [node, attr, xmlns, prefix, value],
            signature: 'issss',
            //
        }, callback);
    };
    this.XmlnodeGetAttrib = function(node, attr, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeGetAttrib',
            body: [node, attr],
            signature: 'is',
        }, callback);
    };
    this.XmlnodeGetAttribWithNamespace = function(node, attr, xmlns, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeGetAttribWithNamespace',
            body: [node, attr, xmlns],
            signature: 'iss',
        }, callback);
    };
    this.XmlnodeRemoveAttrib = function(node, attr, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeRemoveAttrib',
            body: [node, attr],
            signature: 'is',
            //
        }, callback);
    };
    this.XmlnodeRemoveAttribWithNamespace = function(node, attr, xmlns, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeRemoveAttribWithNamespace',
            body: [node, attr, xmlns],
            signature: 'iss',
            //
        }, callback);
    };
    this.XmlnodeSetNamespace = function(node, xmlns, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeSetNamespace',
            body: [node, xmlns],
            signature: 'is',
            //
        }, callback);
    };
    this.XmlnodeGetNamespace = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeGetNamespace',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.XmlnodeSetPrefix = function(node, prefix, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeSetPrefix',
            body: [node, prefix],
            signature: 'is',
            //
        }, callback);
    };
    this.XmlnodeGetPrefix = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeGetPrefix',
            body: [node],
            signature: 'i',
        }, callback);
    };
    this.XmlnodeToStr = function(node, len, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeToStr',
            body: [node, len],
            signature: 'ii',
        }, callback);
    };
    this.XmlnodeToFormattedStr = function(node, len, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeToFormattedStr',
            body: [node, len],
            signature: 'ii',
        }, callback);
    };
    this.XmlnodeFree = function(node, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'XmlnodeFree',
            body: [node],
            signature: 'i',
            //
        }, callback);
    };
    this.PurpleAttentionTypeNew = function(ulname, name, inc_desc, out_desc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeNew',
            body: [ulname, name, inc_desc, out_desc],
            signature: 'ssss',
        }, callback);
    };
    this.PurpleAttentionTypeSetName = function(type, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeSetName',
            body: [type, name],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAttentionTypeSetIncomingDesc = function(type, desc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeSetIncomingDesc',
            body: [type, desc],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAttentionTypeSetOutgoingDesc = function(type, desc, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeSetOutgoingDesc',
            body: [type, desc],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAttentionTypeSetIconName = function(type, name, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeSetIconName',
            body: [type, name],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAttentionTypeSetUnlocalizedName = function(type, ulname, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeSetUnlocalizedName',
            body: [type, ulname],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleAttentionTypeGetName = function(type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeGetName',
            body: [type],
            signature: 'i',
        }, callback);
    };
    this.PurpleAttentionTypeGetIncomingDesc = function(type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeGetIncomingDesc',
            body: [type],
            signature: 'i',
        }, callback);
    };
    this.PurpleAttentionTypeGetOutgoingDesc = function(type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeGetOutgoingDesc',
            body: [type],
            signature: 'i',
        }, callback);
    };
    this.PurpleAttentionTypeGetIconName = function(type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeGetIconName',
            body: [type],
            signature: 'i',
        }, callback);
    };
    this.PurpleAttentionTypeGetUnlocalizedName = function(type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleAttentionTypeGetUnlocalizedName',
            body: [type],
            signature: 'i',
        }, callback);
    };
    this.PurplePrplGotAccountIdle = function(account, idle, idle_time, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGotAccountIdle',
            body: [account, idle, idle_time],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurplePrplGotAccountLoginTime = function(account, login_time, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGotAccountLoginTime',
            body: [account, login_time],
            signature: 'ii',
            //
        }, callback);
    };
    this.PurplePrplGotAccountActions = function(account, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGotAccountActions',
            body: [account],
            signature: 'i',
            //
        }, callback);
    };
    this.PurplePrplGotUserIdle = function(account, name, idle, idle_time, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGotUserIdle',
            body: [account, name, idle, idle_time],
            signature: 'isii',
            //
        }, callback);
    };
    this.PurplePrplGotUserLoginTime = function(account, name, login_time, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGotUserLoginTime',
            body: [account, name, login_time],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurplePrplGotUserStatusDeactive = function(account, name, status_id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGotUserStatusDeactive',
            body: [account, name, status_id],
            signature: 'iss',
            //
        }, callback);
    };
    this.PurplePrplChangeAccountStatus = function(account, old_status, new_status, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplChangeAccountStatus',
            body: [account, old_status, new_status],
            signature: 'iii',
            //
        }, callback);
    };
    this.PurplePrplGetStatuses = function(account, presence, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGetStatuses',
            body: [account, presence],
            signature: 'ii',
        }, callback);
    };
    this.PurplePrplSendAttention = function(gc, who, type_code, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplSendAttention',
            body: [gc, who, type_code],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurplePrplGotAttention = function(gc, who, type_code, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGotAttention',
            body: [gc, who, type_code],
            signature: 'isi',
            //
        }, callback);
    };
    this.PurplePrplGotAttentionInChat = function(gc, id, who, type_code, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGotAttentionInChat',
            body: [gc, id, who, type_code],
            signature: 'iisi',
            //
        }, callback);
    };
    this.PurplePrplGetMediaCaps = function(account, who, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGetMediaCaps',
            body: [account, who],
            signature: 'is',
        }, callback);
    };
    this.PurplePrplInitiateMedia = function(account, who, type, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplInitiateMedia',
            body: [account, who, type],
            signature: 'isi',
        }, callback);
    };
    this.PurplePrplGotMediaCaps = function(account, who, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurplePrplGotMediaCaps',
            body: [account, who],
            signature: 'is',
            //
        }, callback);
    };
    this.PurpleFindPrpl = function(id, callback) {
        bus.invoke({
            destination: 'im.pidgin.purple.PurpleService',
            path: path,
            interface: 'im.pidgin.purple.PurpleInterface',
            member: 'PurpleFindPrpl',
            body: [id],
            signature: 's',
        }, callback);
    };
}
