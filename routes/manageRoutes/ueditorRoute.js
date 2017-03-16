/**
 * Created by CoderSong on 17/3/16.
 */

let pub = {},
  ueditor = require('ueditor');

pub.solveUeditor = (req, res, next) => {

  // ueditor 客户端发起上传图片请求
  if (req.query.action === 'uploadimage') {
    let foo = req.ueditor,
      imgname = req.ueditor.filename,
      img_url = '/images/ueditor/';

    // 输入要保存的地址
    res.ue_up(img_url);
    // IE8下载需要设置返回头尾text/html 不然json返回文件会被直接下载打开
    res.setHeader('Content-Type', 'text/html');
  }
  // 客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
    var dir_url = '/images/ueditor/';
    res.ue_list(dir_url);
  }
  // 客户端发起其他请求
  else {
    res.setHeader('Content-Type', 'application/json');
    res.redirect('/ueditor/php/config.json');
  }
};

module.exports = pub;