; (() => {
  'use strict'
  !(function () {
    if ('https://graph.baidu.com/pcpage/index?tpl_from=pc&tn=st11' == location.href) {
      var t = function () {
        if ((4 == this.readyState && 'https://miao.baidu.com/abdr' == this.responseURL && window.postMessage({ topic: 'set-antidata', data: JSON.parse(this.responseText) }, '*'), this._onreadystatechange)) return this._onreadystatechange.apply(this, arguments)
      },
        e = window.XMLHttpRequest.prototype.open,
        a = window.XMLHttpRequest.prototype.send
        ; (window.XMLHttpRequest.prototype.open = function (t, a, n, s, o) {
          return e.apply(this, arguments)
        }),
          (window.XMLHttpRequest.prototype.send = function (e) {
            return this.onreadystatechange && (this._onreadystatechange = this.onreadystatechange), (this.onreadystatechange = t), a.apply(this, arguments)
          })
    }
  })()
})()
