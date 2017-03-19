/**
 * Created by CoderSong on 17/3/19.
 */

let pub = {},
  path = require('path'),
  fileType = require('./../conf/basicConf').FILE_TYPE,
  error = require('./../conf/basicConf').ERROR_INFO,
  fs = require('fs'),
  multiparty = require('multiparty');

/**
 * 上传单个图片的处理路由
 * @param req
 * @param scb
 * @param fcb
 */
pub.uploadingFile = (req, scb, fcb) => {
  let dir = path.join(__dirname, '..', 'public', 'images', 'uploading') + '/';
  let form = new multiparty.Form({uploadDir: dir});
  form.parse(req, (err, fileds, files) => {
    if (err) {
      fcb(error.UPLOADING_ERR, err);
    } else {
      let inputFile = files.inputFile[0];
      let upladedPath = inputFile.path;
      // 检测是不是符合要求的文件
      if (inputFile.headers['content-type'] == fileType.JPG.value ||
        inputFile.headers['content-type'] == fileType.PNG.value) {
        // let dstPath = dir + inputFile.originalFilename;
        scb(upladedPath)
      } else {
        // 删除非法文件
        fs.unlinkSync(upladedPath);
        fcb(error.UPLOADING_TYPE_ERR);
      }
    }
  })
};

module.exports = pub;