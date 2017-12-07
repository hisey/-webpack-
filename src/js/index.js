require('../css/basic.scss');
// require('../css/common.scss');
// require('../css/iconfont.css');

import url from "./commons/url";

import Dialog from '../compenent/dialog/GB-dialog';

import Toast from '../compenent/toast/GB-message';



init();

function init () {
  url.getUrl();

  url.setUrl();

  /*const render = require('../view/index.html');
  const data = {
    tit: 'tits'
  };

  const html = render(data)
  console.log(html)

  if (typeof document === 'object') {
    document.body.innerHTML = html;
  }*/

  console.log('page home', Dialog);
  events();
}

function events () {
  document.getElementById('btnDialog').addEventListener('click', function () {
    Dialog.show({
      title: '标题',
      content: '这里是弹出层内容'
    });
  }, false);

  document.getElementById('btnToast').addEventListener('click', function () {
    Toast.show('Toast');
  }, false);
}
