const baseUrl = '/client'

exports.itemsPerPage = {
  product: 12,
  other: 10
}

exports.aboutMe = {
  title: '关于我们',
  info:  [
    {
      title: '公司简介',
      url: baseUrl + '/aboutMe'
    },
    {
      title: '企业文化',
      url: baseUrl + '/aboutMe/businessCulture'
    },
    {
      title: '招商加盟',
      url: baseUrl + '/aboutMe/businessJoin'
    }
  ]
}

exports.contact = {
  title: '联系我们',
  info: []
}

exports.product = {
  title: '产品展示',
  info: [
    {
      title: '电磁铁',
      url: baseUrl + '/productShow/series/电磁铁/page/1'
    },
    {
      title: '退磁机',
      url: baseUrl + '/productShow/series/退磁机/page/1'
    },
    {
      title: '充磁机',
      url: baseUrl + '/productShow/series/充磁机/page/1'
    },
    {
      title: '密度仪',
      url: baseUrl + '/productShow/series/密度仪/page/1'
    },
    {
      title: '标准磁体',
      url: baseUrl + '/productShow/series/标准磁体/page/1'
    },
    {
      title: '高斯计',
      url: baseUrl + '/productShow/series/高斯计/page/1'
    },
    {
      title: '磁通计',
      url: baseUrl + '/productShow/series/磁通计/page/1'
    }
  ]
}

exports.news = {
  title: '新闻中心',
  info: [
    {
      title: '企业新闻',
      url: baseUrl + '/news/companyNew/page/1'
    },
    {
      title: '行业动态',
      url: baseUrl + '/news/dynamic/page/1'
    },
    {
      title: '产品新闻',
      url: baseUrl + '/news/productNew/page/1'
    }
  ]
}

exports.certificate = {
  title: '资质证书',
  info: []
}

exports.success = {
  title: '成功案例',
  info: []
}