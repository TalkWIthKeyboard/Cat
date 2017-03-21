/**
 * Created by CoderSong on 17/3/21.
 */

 $(document).ready(function () {
   // 修改按钮点击事件
   $('#changeBtn').click(function () {
     var id = $(this).attr('data-id');
     var url = '/server/new/' + id;

     $.ajax({
       url: url,
       type: 'GET',
       success: function (res) {
         if (res.code.number == 200) {
           var data = res.data.new;
           $('#title').val(data.title);
           $('#subtitle').val(data.subtitle);
           $('#content').val(data.content);
           $('#type').val(data.type);
           $('#look').val(data.look);
           $('#sureChangeBtn').attr('data-id', data._id);
         } else {
           alert('网络状态差！请刷新页面！')
         }
       }
     })
   });

   // 保存按钮点击事件
   $('#sureChangeBtn').click(function () {
     var id = $(this).attr('data-id');
     var url = '/server/new/' + id;

     var title = $('#title').val() || false;
     var subtitle = $('#subtitle').val() || false;
     var content = $('#content').val() || false;
     var type = $('#type').val();
     var look = $('#look').val();

     if (title) {
       $.ajax({
         url: url,
         type: 'PUT',
         data: {
           title: title,
           subtitle: subtitle,
           content: content,
           type: type,
           look: look
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
       alert('请至少填写技术支持的主标题！');
     }
   })
 });