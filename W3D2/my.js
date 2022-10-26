
$(document).ready(function(){

let widthVal = $("#widthId").val();
let growthRate = $("#rateId").val();
let circleNum = $("#circleId").val();
let growthAmount = $("#amountId").val();

$("#btn").click(function(){    
for(let i=0; i<circleNum; i++){
    let bgcolor = (""+(100*Math.random(255))+","+(100*Math.random(255))+","+(100*Math.random(255)));
    console.log(i);

    $("#circle").prepend($("<div>",{
       "id": "div-circle-"+i,
        "css":{
          "background-color" : "rgb("+bgcolor+")", 
          "border-radius" : "50%",
          "width" : parseInt(widthVal)+"px",
          "height" : "100px",
          "top" : i*10+"%",
          "left" : i*10+"%",
          "position" : "fixed"
        },
        "click" : function(){
            $(this).hide();
        }

    }));
}


setInterval(function() {
    
    for(let i=0; i<100; i++){
        let divWidth = $("#div-circle-"+i).width();
        $("#div-circle-"+i).width((divWidth+parseInt(growthAmount))+"px");
        $("#div-circle-"+i).height((divWidth+parseInt(growthAmount))+"px");
    }

   }, growthRate);
});

});
