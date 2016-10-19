$(document).on('click','.hw-trigger',function(e){
  e.preventDefault();
  $this = $(this);
  $('.hover-window-bg').addClass('active')
  $('.hover-window').removeClass('hover-window-show');

  if(undefined != $this.data('width'))
    $('.hover-window').css('width',$this.data('width'));
  if(undefined != $this.data('height'))
  $('.hover-window').css('height',$this.data('height'));

  $('.hover-window .content').html($this.find('.content').html());
  $('.hover-window').addClass('hover-window-show');
});

$(document).on('click','.hover-window-bg',function(){
  $('.hover-window').removeClass('hover-window-show');
  $('.hover-window2').removeClass('hover-window-show');
  $(this).removeClass('active');
});

$(document).on('click','.hw-trigger2',function(e){
  e.preventDefault();
  $this = $(this);
  $('.hover-window-bg').addClass('active')
  $('.hover-window2').removeClass('hover-window-show');

  if(undefined != $this.data('width'))
  $('.hover-window2').css('width',$this.data('width'));
  if(undefined != $this.data('height'))
  $('.hover-window2').css('height',$this.data('height'));

  $('.hover-window2').addClass('hover-window-show');
});

$(document).on('change','select[name="city"]',function(){
  if ($(this).val() == 'trigger') {
    $(this).after('<input type="text" name="city" placeholder="Ваш вариант" />');
    $(this).remove();
  }
});

$(document).on('change','.onclick',function(){
  var uslugi = new Array();
  var sum = 0;
  $('.onclick:checked').each(function(i,e){
    var usluga = $(e).data('title');
    uslugi.push(usluga);
    sum += parseInt($(e).val());
  })
  sum += parseInt($('.onclick2').val());
  $('.resultsum').val(sum);

  uslugi = uslugi.join(',');
  $('.resultuslug').val(uslugi);

});
