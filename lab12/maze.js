$(document).ready(function () {
  //let statusObj = $("#status");
  let startGame = 0;

  let endObj = $("#end").click(function(){
    
    startGame = 0;

    if( $(".boundary").hasClass("youlose")){
        $("#status").text("You lose!");
        $(".boundary").each(function () {
            $(this).removeClass("youlose");
          });
    }else{
        $("#status").text("You win!");
    }
   
  });

 
  let startObj = $("#start").click(function(){
    $(".boundary").removeClass("youlose");
    $("#status").text("Click the 'S' to begin");
    startGame = 1;
  });

  

  $(".boundary").mouseover(function () {
    if(startGame == 1){
        $(".boundary").each(function () {
            $(this).addClass("youlose");
          });
          let statusObj = $("#status");
          statusObj.text("You Lose!");
    }
    
  });
});
