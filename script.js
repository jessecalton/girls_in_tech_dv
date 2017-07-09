window.onload = function() {
    alert("Click on the ESCAPE button in the top right-hand corner anytime you need to leave this page")
}


$(function(){ 
  $('button#need-help').on('click',function(){
    $('.types-of-help').toggle();
    $('.need-help').hide();
    });
});
$(function(){ 
  $('button#know-someone').on('click',function(){
    $('.types-of-help').toggle();
    $('.need-help').hide();
    });
}); 
$(function(){ 
  $('button#dont-know').on('click',function(){
    $('.need-help').toggle();
    $('.types-of-help').hide();
    });
}); 

$(function(){ 
  $('button#housing-button').on('click',function(){
    $('#shelter-housing').toggle();
    $('#legal-issues').hide();
    $('#chatbot-locator').hide();

    });
});

$(function(){ 
  $('button#filter-button').on('click',function(){
    $('#search-form').toggle();

    });
}); 

$(function(){ 
  $('#about-us').on('click',function(){
    $('#about-description').toggle()

    });
}); 

$(function(){ 
  $('button#legal-button').on('click',function(){
    $('#legal-issues').toggle();
    $('#shelter-housing').hide();
    $('#chatbot-locator').hide();
    });
}); 

$(function(){ 
  $('#shelter-housing form').on('submit',function(e){
    // This is set up for AJAX. For now it does a fake ajax call for demo purposes
    e.preventDefault()
    $('form').hide();
    $('p#title').hide();
    $('#housing-results').show();

    });
});

$(function(){ 
  $('button#chatbot-button').on('click',function(){
    $('#chatbot-locator').show();
    $('#legal-issues').hide();
    $('#shelter-housing').hide();
    $('.footer').hide();
    });
}); 


$(function(){ 
  $('#escape').on('click',function(){
    location.replace("https://www.weather.com")
}); 
});