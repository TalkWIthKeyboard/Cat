/**
 * Created by CoderSong on 17/3/16.
 */

$(document).ready(function () {
  // 获取分页数据
  $.ajax({
    url: '/server/certificate/page/1',
    type: 'GET',
    success: function (res) {
      if (res.code.number === 200) {
        
      } else {
        alert('数据请求有误！');
      }
    }
  })
});