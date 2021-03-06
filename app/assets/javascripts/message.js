$(document).on('turbolinks:load', function() {
　
  function buildHTML(message){
    var image = message.image.url ? `<img src=${ message.image.url }>` : "";
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user">
                      ${ message.user_name }
                    </div>
                    <div class="upper-message__date">
                      ${ message.updated_at }
                    </div>
                  </div>
                  <div class="lower-message">
                    <div class="lower-message__content">
                      ${ message.content }
                    </div>
                    ${ image }
                  </div>
                </div>`
    return html;
  }
  function scroll() {
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
  }
  
  $('#new_message').on('submit', function(e){
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
　　   $('.form__submit').prop('disabled', false);
      $("#new_message")[0].reset();
      scroll()
    })
    .fail(function(){
      alert('error')
      $('.form__submit').prop('disabled', false);
    })  
  })

  var reloadMessages = function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      //今いるページのリンクが/groups/グループID/messagesのパスとマッチすれば以下を実行。
      //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      var last_message_id = $('.message:last').data("message-id");
      //dataメソッドで.messageにある:last最後のカスタムデータ属性を取得しlast_message_idに代入。
      $.ajax({
        //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
        url: 'api/messages',
        //ルーティングで設定した通りhttpメソッドをgetに指定
        type: 'get',
        dataType: 'json',
        //dataオプションでリクエストに値を含める
        data: {last_id: last_message_id}
      })
      .done(function(messages){
        if (messages.length !== 0){
          var insertHTML = '';
          messages.forEach(function(messages){ 
            insertHTML = buildHTML(messages);
            $('.messages').append(insertHTML);
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
          });
        }
      })
      .fail(function() {
        alert('error');
      });
    };
  };
  setInterval(reloadMessages, 5000);
});