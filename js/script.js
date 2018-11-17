$("#b1").click(function () {
    $('#myP').toggleClass('bold')
    });

$('#b2').click(function () {
     $('#myP').toggleClass('italic')
    });
 
    $('#b3').click(function() {
      $('#myP').toggleClass('underline')
        });    
 $('#b4').change(function() {

            $('#myP').css('font-size',$("#b4").val())
           });       

 $('#b5').change(function() {
       
      var listValue =$("#b5").val() 
         $('#myP').css('font-family', listValue)
            });  
/*function myFunction1() {

    document.getElementById("myP").classList.toggle('bold')
   
    

}
function myFunction2() {
document.getElementById("myP").classList.toggle('italic')
}

function myFunction3() {
    document.getElementById("myP").classList.toggle('underline') 

}
function myFunction4() {
    listValue = document.querySelector('#list').value
    $("#list").val() 
    document.getElementById("myP").style.fontSize = listValue;
}

function myFunction5() {
    listValue = document.querySelector('#list2').value
    document.getElementById("myP").style.fontFamily = listValue;
}
    */    


