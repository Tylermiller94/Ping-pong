$(document).ready(function(){
  $("#ping-pong-form").submit(function(event){
    var numberInput = parseFloat($("#number-input").val());
    var output = pingPong(numberInput);
    $("#output").append(output);
    event.preventDefault();
  });
});



function pingPong(numberInput){
    var outputString = "";

    for(var i = 1; i <= numberInput; i++){
      if (i % 3 == 0){
       outputString += "<li>ping</li>";
       //if input is dividable by 3 add Ping

    }else if (i % 5 == 0){
      outputString += "<li>pong</li>";
      //if input is dividable by 5 add pong

    } else if (i % 15 == 0){
      outputString += "<li>pingpong</li>";
       //if output is dividable by 15 add pingpong

     } else  {
       outputString += "<li>" + i + "</li>";
       //combine string elements
      }
    }
    return outputString;

};
