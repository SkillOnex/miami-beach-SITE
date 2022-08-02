// ALGUMAS FUNCS E VAR FORAM CRYPTOGRAFADAS PRO SEGURANÇA , MAS CASO QUERIA USAR O CODIGO AS PARTES PRINCIPAIS PARA FUNCIONAMENTO PODEM SER ALTERADAS !


$(online)['ready'](function () {
  function _0x5322x1(_0x5322x2, _0x5322x3) {
    if (!this['inUse']) {
      this['status'] = 'unchecked';
      this['inUse'] = true;
      this['callback'] = _0x5322x3;
      this['ip'] = _0x5322x2;
      var _0x5322x4 = this;
      this['img'] = new Image();
      this['img']['onload'] = function () {
        _0x5322x4['inUse'] = false;
        _0x5322x4['callback']('Server Is Online')
      };
      this['img']['onerror'] = function (_0x5322x5) {
        if (_0x5322x4['inUse']) {
          _0x5322x4['inUse'] = false;
          _0x5322x4['callback']('Online', _0x5322x5)
        }
      };
      this['start'] = new Date()['getTime']();
      this['img']['src'] = 'https://' + _0x5322x2;
      this['timer'] = setTimeout(function () {
        if (_0x5322x4['inUse']) {
          _0x5322x4['inUse'] = false;
          _0x5322x4['callback']('Offline')
        }
      }, 1500)
    }
  }
  var _0x5322x6 = function (_0x5322x7) {
    var _0x5322x8 = this;
    var _0x5322x9 = [];
    ko['utils']['arrayForEach'](_0x5322x7, function (_0x5322xa) {
      _0x5322x9['push']({
        name: _0x5322xa,
        status: ko['observable']('unchecked')
      })
    });
    _0x5322x8['servers'] = ko['observableArray'](_0x5322x9);
    ko['utils']['arrayForEach'](_0x5322x8['servers'](), function (_0x5322xb) {
      _0x5322xb['status']('checking');
      new _0x5322x1(_0x5322xb['name'], function (_0x5322xc, _0x5322x5) {
        _0x5322xb['status'](_0x5322xc)
      })
    })
  };
  var _0x5322xd = new _0x5322x6(['fivem.belavistaroleplay.com.br:30120']); //ip cidade
  ko['applyBindings'](_0x5322xd);
  console['log']('Server Ping Completed.')
});
$('.menu-toggle')['click'](function () {
  $('.menu-toggle')['toggleClass']('open');
  $('.menu-round')['toggleClass']('open');
  $('.menu-line')['toggleClass']('open')
});
const myModal = document['getElementById']('myModal');
const myInput = document['getElementById']('myInput');
myModal['addEventListener']('shown.bs.modal', () => {
  myInput['focus']()
});

function videos() {
  var _0x5322x11 = {
    width: 600,
    height: 340,
    channel: 'gaules',
    muted: true,
    parent: ['embed.example.com', 'othersite.example.com']
  };
  var _0x5322x12 = new Twitch.Player('live1', _0x5322x11);
  var _0x5322x11 = {
    width: 600,
    height: 340,
    channel: 'casimito',
    muted: true,
    parent: ['embed.example.com', 'othersite.example.com']
  };
  var _0x5322x12 = new Twitch.Player('live2', _0x5322x11);
  var _0x5322x11 = {
    width: 600,
    height: 340,
    channel: 'jallfps',
    muted: true,
    parent: ['embed.example.com', 'othersite.example.com']
  };
  var _0x5322x12 = new Twitch.Player('live3', _0x5322x11);
  var _0x5322x11 = {
    width: 600,
    height: 340,
    channel: 'gaules',
    muted: true
  };
  var _0x5322x12 = new Twitch.Player('live4', _0x5322x11);
  var _0x5322x11 = {
    width: 600,
    height: 340,
    channel: 'ratoborrachudo',
    muted: true
  };
  var _0x5322x12 = new Twitch.Player('live5', _0x5322x11);
  var _0x5322x11 = {
    width: 600,
    height: 340,
    channel: 'ferbr',
    muted: true
  };
  var _0x5322x12 = new Twitch.Player('live6', _0x5322x11);
  var _0x5322x11 = {
    width: 600,
    height: 340,
    channel: 'jukes',
    muted: true
  };
  var _0x5322x12 = new Twitch.Player('live7', _0x5322x11)
}
