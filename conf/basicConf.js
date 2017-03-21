/**
 * Created by CoderSong on 17/2/28.
 */

exports.pageSize = 10;
exports.imgPageSize = 12;

exports.NEW_TYPE = {

  NEWS: {
    'number': 1,
    'info_cn': '企业新闻',
    'info_en': 'news',
    'base_url': '/manage/news/page/',
    'base_page': 'managePage/'
  },

  TECHNOLOGY: {
    'number': 2,
    'info_cn': '技术支持',
    'info_en': 'technology',
    'base_url': '/manage/technology/page/',
    'base_page': 'managePage/technology'
  },

  DYNAMIC: {
    'number': 3,
    'info_cn': '行业动态',
    'info_en': 'dynamic',
    'base_url': '/manage/news/dynamic/page/',
    'base_page': 'managePage/'
  },

  PRODUCT_NEW: {
    'number': 4,
    'info_cn': '产品新闻',
    'info_en': 'productNew',
    'base_url': '/manage/news/product/page/',
    'base_page': 'managePage/'
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
  },

  // 管理员错误码
  ADMIN_ERR: {
    'number': 430,
    'value': '管理员账号/密码错误'
  },
  IDENTIFY_ERR: {
    'number': 431,
    'value': '账号权限存在问题'
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

exports.PRODUCT_SERIES = {

  ELECTROMAGNET: {
    'number': 0,
    'cn': '电磁铁',
    'value': 'ELECTROMAGNET'
  },

  DEMAGNETIZATION_MACHINE: {
    'number': 1,
    'cn': '退磁机',
    'value': 'DEMAGNETIZATION_MACHINE'
  },

  MAGNETIZING_MACHINE: {
    'number': 2,
    'cn': '充磁机',
    'value': 'MAGNETIZING_MACHINE'
  },

  DENSITY_METER: {
    'number': 3,
    'cn': '密度仪',
    'value': 'DENSITY_METER'
  },

  STANDARD_MAGNET: {
    'number': 4,
    'cn': '标准磁体',
    'value': 'STANDARD_MAGNET'
  },

  GAUSS_METER: {
    'number': 5,
    'cn': '高斯计',
    'value': 'GAUSS_METER'
  },

  MAGNETIC_FLUX_METER: {
    'number': 6,
    'cn': '磁通计',
    'value': 'MAGNETIC_FLUX_METER'
  }
};

exports.PRODUCT_NUM = {
  0: {
    'value': 'ELECTROMAGNET',
    'cn': '电磁铁'
  },
  1: {
    'cn': '退磁机',
    'value': 'DEMAGNETIZATION_MACHINE'
  },
  2: {
    'cn': '充磁机',
    'value': 'MAGNETIZING_MACHINE'
  },
  3: {
    'cn': '密度仪',
    'value': 'DENSITY_METER'
  },
  4: {
    'cn': '标准磁体',
    'value': 'STANDARD_MAGNET'
  },
  5: {
    'cn': '高斯计',
    'value': 'GAUSS_METER'
  },
  6: {
    'cn': '磁通计',
    'value': 'MAGNETIC_FLUX_METER'
  }
};