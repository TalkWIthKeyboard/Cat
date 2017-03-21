/**
 * Created by CoderSong on 17/3/19.
 */

let pub = {},
  path = require('path'),
  fileType = require('./../conf/basicConf').FILE_TYPE,
  error = require('./../conf/basicConf').ERROR_INFO,
  _ = require('underscore'),
  fs = require('fs'),
  multiparty = require('multiparty');


/**
 * 上传单个文件的处理路由
 * @param req
 * @param flag 是否检验文件的类型(true为不验证、false为验证)
 * @param scb
 * @param fcb
 */
pub.uploadingFile = (req, flag, scb, fcb) => {
  let dir = '',
    reDir = '';
  // 保存路径
  if (flag) {
    dir = path.join(__dirname, '..', 'public', 'file') + '/';
    reDir = '/' + path.join('file') + '/';
  } else {
    dir = path.join(__dirname, '..', 'public', 'images', 'uploading') + '/';
    reDir = '/' + path.join('images', 'uploading') + '/';
  }

  let form = new multiparty.Form({uploadDir: dir});
  form.parse(req, (err, fileds, files) => {
    if (err) {
      fcb(error.UPLOADING_ERR, err);
    } else {
      let inputFile = files.file[0];
      let upladedPath = inputFile.path;
      // 检测是不是符合要求的文件
      if (inputFile.headers['content-type'] == fileType.JPG.value ||
        inputFile.headers['content-type'] == fileType.PNG.value || flag) {
        let strLast = _.last(upladedPath.split('/'));
        scb(reDir + strLast)
      } else {
        // 删除非法文件
        fs.unlinkSync(upladedPath);
        fcb(error.UPLOADING_TYPE_ERR);
      }
    }
  })
};

module.exports = pub;