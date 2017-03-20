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
          var data = res.data.product;
          $('#name').val(data.name);
          $('#model').val(data.model);
          $('#series').get(0).selectedIndex = parseInt(data.series);
          $('#params').val(data.params);
          $('#sureChangeBtn').attr('data-id', data._id);
          ue.setContent(data.content);
        } else {
          alert('网络状态差！请刷新页面！')
        }
      }
    })
  });

  // 保存按钮点击事件
  $('#sureChangeBtn').click(function () {
    var id = $(this).attr('data-id');
    var url = '/server/product/' + id;

    var name = $('#name').val() || false;
    var series = $('option:selected', '#series').index();
    var model = $('#model').val() || false;
    var content = ue.getContent();
    var params = $('#params').val();

    if (name && model) {
      $.ajax({
        url: url,
        type: 'PUT',
        data: {
          name: name,
          series: series,
          model: model,
          content: content,
          params: params,
          // relatedProducts: []
        },
        success: function (res) {
          if (res.code.number === 200) {
            location.reload();
          } else {
            alert(res.code)
          }
        }
      })
    } else {
      alert('请至少填写产品名称和产品型号！');
    }
  })
});
