/**
 * Created by CoderSong on 17/2/28.
 */

exports.pageSize = 10;
exports.imgPageSize = 12;

exports.NEW_TYPE = {

  NEWS: {
    'number': 1,
    'info_cn': '企业新闻',
    'info_en': 'news'
  },

  TECHNOLOGY: {
    'number': 2,
    'info_cn': '技术支持',
    'info_en': 'technology'
  },

  DYNAMIC: {
    'number': 3,
    'info_cn': '行业动态',
    'info_en': 'dynamic'
  },

  PRODUCT_NEW: {
    'number': 4,
    'info_cn': '产品新闻',
    'info_en': 'productNew'
  }
};

exports.ERROR_INFO = {

  SUCCESS: {
    'number': 200,
    'value': '操作成功完成'
  },

  // 数据库状态码
  DATABASE_ERR: {
    'number': 410,
    'value': '数据库操作有误'
  },

  // 错误状态码
  REQUEST_ERR: {
    'number': 401,
    'value': '携带参数不完整'
  },
  INSIDE_ERR: {
    'number': 402,
    'value': '函数内部错误'
  },
  INVALID_ERR: {
    'number': 403,
    'value': '无效请求（涉及不存在属性的修改）'
  },
  EXIST_ERR: {
    'number': 404,
    'value': '已经存在该对象'
  },

  // 上传文件错误码
  UPLOADING_ERR: {
    'number': 420,
    'value': '上传文件失败'
  },
  UPLOADING_TYPE_ERR: {
    'number': 421,
    'value': '上传文件的格式错误'
  }
};

exports.FILE_TYPE = {

  JPG: {
    'number': 1,
    'value': 'image/jpeg'
  },

  PNG: {
    'number': 2,
    'value': 'image/png'
  }
};