/**
 * Created by CoderSong on 17/3/20.
 */

$(document).ready(function () {
  // 修改按钮点击事件
  $('#changeBtn').click(function () {
    var id = $(this).attr('data-id');
    var url = '/server/product/' + id;

    $.ajax({
      url: url,
      type: 'GET',
      success: function (res) {
        if (res.code.number == 200) {
          var data = res.data;
          $('#name').val(data.name);
          $('#model').val(data.model);
        } else {
          alert('网络状态差！请刷新页面！')
        }
      }
    })
  });
});
