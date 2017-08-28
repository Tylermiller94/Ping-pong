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
      if (i % 15 == 0){
        outputString += "<li>Ping-Pong!</li>";
         //if output is dividable by 15 add pingpong
    } else if (i % 5 == 0){
      outputString += "<li>Pong!</li>";
      //if input is dividable by 5 add pong

    } else if (i % 3 == 0){
       outputString += "<li>Ping!</li>";
       //if input is dividable by 3 add Ping

     } else  {
       outputString += "<li>" + i + "</li>";
       //combine string elements
      }
    }
    return outputString;

};
