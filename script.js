
$(function(){ 
  $('button#need-help').on('click',function(){
    var r = $('<p>This works</p>')
    $('.types-of-help').append(r);
    });
});
$(function(){ 
  $('button#know-someone').on('click',function(){
    $('#shelter-housing').toggle();
    });
}); 
$(function(){ 
  $('button#dont-know').on('click',function(){
    var r = $('<p>This works</p>')
    $('.types-of-help').append(r);
    });
}); 

$(function(){ 
  $('#escape').on('click',function(){
    location.replace("https://www.w3schools.com")
}); 
});