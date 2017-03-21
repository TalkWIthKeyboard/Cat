/**
 * Created by CoderSong on 17/3/21.
 */

$(document).ready(function () {
  // 修改按钮点击事件
  $('#changeBtn').click(function () {
    var id = $(this).attr('data-id');
    var url = '/server/download/' + id;

    $.ajax({
      url: url,
      type: 'GET',
      success: function (res) {
        if (res.code.number == 200) {
          var data = res.data.download;
          $('#name').val(data.title);
          $('#url').val(data.url);
          $('#content').val(data.content);
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
  $('#urlBtn').click(function () {
    $('#inputFile').click();
  });

  $('#inputFile').on('change', function () {
    var file = this.files[0];
    uploadingImg(file);
  });

  function uploadingImg(f) {
    var form = new FormData();
    form.append('file', f);
    $.ajax({
      url: '/server/file/uploading/flag/true',
      type: 'POST',
      data: form,
      processData: false,
      contentType: false,
      success: function (res) {
        if (res.code.number === 200) {
          $('#url').val(res.data);
        } else {
          alert('上传文件失败，请重新上传！')
        }
      }
    });
  }

  // 保存按钮点击事件
  $('#sureChangeBtn').click(function () {
    var id = $(this).attr('data-id');
    var url = '/server/download/' + id;

    var title = $('#name').val() || false;
    var downloadUrl = $('#url').val() || false;
    var content = $('#content').val();

    if (title && downloadUrl) {
      $.ajax({
        url: url,
        type: 'PUT',
        data: {
          title: title,
          url: downloadUrl,
          content: content,
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
      alert('请至少填写下载文件名并上传文件！');
    }
  })
});