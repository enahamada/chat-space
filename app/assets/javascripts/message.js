$(function() {
  function buildHTML(message){
    var img ="";
    if (message.image){
    var img = `<img src = ${message.image} class: "lower-message_image">`
    }
    var html = `<div class="message">
              <div class="upper-message">
                <div class="upper-message__user-name">
                  ${ message.user_name }
                </div>
                <div class="upper-message__date">
                  ${ message.time }
                </div>
              </div>
              <div class="lower-message">
                <p class="lower-message__content">
                  ${ message.content }
                </p>
              </div>
            </div>`;
  return html;
  }
  function scroll() {
    $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});
  }
  
  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){//今いるページのリンクが/groups/グループID/messagesのパスとマッチすれば以下を実行。
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      var last_message_id = $('.message:last').data("message-id"); //dataメソッドで.messageにある:last最後のカスタムデータ属性を取得しlast_message_idに代入。
      // var group_id = $(".group").data("group-id");
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log('success');
    })
    .fail(function() {
      console.log('error');
    });
   }
  };

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(data){
　　   var html = buildHTML(data);
　　   $('.messages').append(html);
　　   $('.form__message').reset();
　　   $('.form__submit').prop('disabled', false);
      scroll()
   })
   .fail(function(){
     alert('error')
     $('.form__submit').prop('disabled', false);
   })
  })
});