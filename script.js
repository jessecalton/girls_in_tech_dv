$(function(){ 
  $('button#need-help').on('click',function(){
    var r = $('<p>This works</p>')
    $('.types-of-help').append(r);
    });
}); 