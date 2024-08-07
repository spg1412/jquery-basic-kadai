$(function(){
    // Make the Text Red
    $('#change-color').on('click',function(){
      $('#target').css('color','red');
    });
    // Say Hello When clicked
    $('#change-text').on('click',function(){
      $('#target').text('Hello!');
    });
    // Fade out when clicked
    $('#fade-out').on('click',function(){
      $('#target').fadeOut(); 
    });
    //Fade in when clicked
    $('#fade-in').on('click',function(){
      $('#target').fadeIn(); 
    });
  });