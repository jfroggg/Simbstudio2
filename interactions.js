

$(window).bind("load", function () {
   
 
$('a').click(function() {  
    var link=$(this).attr("href");
    if(link[0]=="#"||link[0]=="."){
       
    }
    else{
        return window.confirm("Would you like to leave the site and go to "+link+".");
        
    }
    
});

document.querySelector(".overlay").classList.add('fade');
 });

 

  

