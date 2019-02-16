function getIt(){
  $('p').on('click', function(key){
    alert ('Hey!');
  });
}
function frameIt(){
  $('.tasty').on('load', function(){
    
  });
}
function pressIt(){
  $('input').on('keydown', function(key){
    if (key.which==71){
      alert ("G was pressed");
    }
  }
}
$(document).ready(function(){

// call functions here

});
