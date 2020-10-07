console.log('js');
$('#birdSection, #contactSection').hide();
$(document).ready(function(){
  // $('body').click(function(){
  //   alert('body clicked');
  // });
  $('#contact').click(function(){
    $('#contactSection').show();
    $('#homeSection').hide();
    $('#birdSection').hide();
  });
  $('#home').click(function(){
    $('#contactSection').hide();
    $('#homeSection').show();
    $('#birdSection').hide();
  });
  $('#birds').click(function(){
    $('#contactSection').hide();
    $('#homeSection').hide();
    $('#birdSection').show();
  });

});
