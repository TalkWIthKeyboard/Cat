/**
 * Created by CoderSong on 17/3/20.
 */

// 操作类型
exports.OPERATION_TYPE = {

  'USE_WEB': {
    'key': 'USE_WEB',
    'name': '使用管理端网页'
  },

  'USE_API': {
    'key': 'USE_API',
    'name': '使用ServerAPI'
  }
};

// 用户角色
exports.AUTH_ROLE = {
  'ADMIN': {
    'key': 'ADMIN',
    'name': '系统管理员',
    'number': 0,
    'permission': ['USE_WEB', 'USE_API']
  },

  'WEB_MANAGER': {
    'key': 'WEB_MANAGER',
    'name': '网页管理员',
    'number': 1,
    'permission': ['USE_WEB']
  },

  'API_USER': {
    'key': 'WEB_MANAGER',
    'name': 'API使用者',
    'number': 2,
    'permission': ['USE_API']
  }
};