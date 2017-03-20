/**
 * Created by CoderSong on 17/3/20.
 */

$(document).ready(function () {

  // 登录按钮的响应事件
  $('#loginBtn').click(function () {
    var username = $('#username').val() || false;
    var password = $('#password').val() || false;
    if (username && password) {
      $.ajax({
        url: '/server/admin/in',
        type: 'POST',
        data: {
          'username': username,
          'password': password
        },
        success: function (res) {
          if (res.code.number === 200) {
            location.href = '/manage/index'
          } else {
            alert('用户名/密码错误');
          }
        }
      })
    } else {
      alert('请填写用户名和密码！')
    }
  });

  // 注册按钮的响应事件
  $('#sureChangeBtn').click(function () {
    var username = $('signup-username').val() || false;
    var password = $('signup-password').val() || false;
    var rePassword = $('signup-repeat-password').val() || false;
    if (username && password && rePassword && password === rePassword) {
      $.ajax({
        url: '/server/admin',
        type: 'POST',
        data: {
          'username': username,
          'password': password
        },
        success: function (res) {
          if (res.code.number == 200) {
            location.reload();
          } else {
            alert('用户名/密码错误')
          }
        }
      })
    } else {
      alert('请正确完整填写所有内容!');
    }
  })
});