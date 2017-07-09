
$(function(){ 
  $('button#need-help').on('click',function(){
    $('.types-of-help').show();
    $('.need-help').hide();
    });
});
$(function(){ 
  $('button#know-someone').on('click',function(){
    $('.types-of-help').show();
    $('.need-help').hide();
    });
}); 
$(function(){ 
  $('button#dont-know').on('click',function(){
    $('.need-help').show();
    $('.types-of-help').hide();
    });
}); 

$(function(){ 
  $('button#housing-button').on('click',function(){
    $('#shelter-housing').show();
    });
}); 

$(function(){ 
  $('#shelter-housing form').on('submit',function(e){
    // This is set up for AJAX. For now it does a fake ajax call for demo purposes
    e.preventDefault()
    $('form').hide();
    $('p').hide();
    var r = "<p>Thank you for that information!</p>";
    $('#shelter-housing').append(r);

    });
});

$(function(){ 
  $('button#chatbot-button').on('click',function(){
    $('#chatbot-locator').show();
    });
}); 


$(function(){ 
  $('#escape').on('click',function(){
    location.replace("https://www.w3schools.com")
}); 
});