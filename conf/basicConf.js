/**
 * Created by CoderSong on 17/2/28.
 */

exports.pageSize = 12;

exports.NEW_TYPE = {

  NEWS: {
    'number': 1,
    'info_cn': '新闻',
    'info_en': 'news'
  },

  TECHNOLOGY: {
    'number': 2,
    'info_cn': '技术支持',
    'info_en': 'technology'
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
  }
};