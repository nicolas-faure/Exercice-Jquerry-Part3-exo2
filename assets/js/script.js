$(function(){
  var $count = 0;
   $('#buttonUp').click(function(){
     $count++;
       $('#number').text($count);
   });
   $('#buttonDown').click(function(){
     $count--;
       $('#number').text($count);
   });
});
