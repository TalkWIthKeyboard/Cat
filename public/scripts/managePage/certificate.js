/**
 * Created by CoderSong on 17/3/16.
 */

$(document).ready(function () {
  // 修改按钮点击事件
  $('#changeBtn').click(function () {
    var id = $(this).attr('data-id');
    var url = '/server/certificate/' + id;

    $.ajax({
      url: url,
      type: 'GET',
      success: function (res) {
        if (res.code.number == 200) {
          var data = res.data.certificate;
          $('#certificateImg').attr('src', data.img);
          $('#name').val(data.name);
          $('#sureChangeBtn').attr('data-id', data._id);
        } else {
          alert('网络状态差！请刷新页面！')
        }
      }
    })
  });

  /**
   * 上传组件逻辑
   */
  $('#certificateImg').click(function () {
    $('#chooseImg').click();
  });

  $('#chooseImg').on('change', function () {
    var file = this.files[0];
    uploadingImg(file);
  });

  function uploadingImg(f) {
    var form = new FormData();
    form.append('file', f);
    $.ajax({
      url: '/server/file/uploading/flag/false',
      type: 'POST',
      data: form,
      processData: false,
      contentType: false,
      success: function (res) {
        if (res.code.number === 200) {
          $('#certificateImg').attr('src', res.data);
        } else {
          alert('上传图片失败，请重新上传！')
        }
      }
    });
  }

  // 保存按钮的点击事件
  $('#sureChangeBtn').click(function () {
    var id = $(this).attr('data-id');
    var url = '/server/certificate/' + id;
    var name = $('#name').val() || false;
    var img = $('#certificateImg').attr('src') || false;

    if (name && img) {
      $.ajax({
        url: url,
        type: 'PUT',
        data: {
          name: name,
          img: img
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
      alert('请至少填写资质证书名称！');
    }
  })
});