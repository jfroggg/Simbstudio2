import {cards} from "./items.js";
import {quotes} from "./items.js";



function fillCards(){
var cardRows=document.querySelector("#cardRows")

var cardsArray=[];
var cardsLength=6;

if(cards.length<cardsLength){
    cardsLength=cards.length;
}

for(var i=0;i<cardsLength;i++){
findRandom(cards,cardsArray); 
}


cardsArray.forEach(element => {
    var link='./details.html?link='+element.link+'&index='+element.text;
    var htmlString='</div><div class="col-md-6 col-lg-4 col-xl-3 "   style="cursor: pointer;"" ><div class="hover"><div class="card mb-4"><a href="';
    var linkString= link+'" target=""><img src=';
    var img= element.img+' alt="..." class="img-thumbnail hover"></a><div class="card-body photo"><p class="card-text"><a class="text-dark" target="" href="'+link+'">'
    var text= element.text+'</a></p></div></div></div>';
    cardRows.innerHTML+=htmlString+linkString+img+text;
});

cardRows.innerHTML+='<hr class="border border-secondary col-12 mt-4">';

}

function fillQuotes(){
    var quotesRows=document.querySelector("#quoteRows")

    var quotesArray=[];
    var quotesLength=5;
    
    if(quotes.length<quotesLength){
        quotesLength=quotes.length;
    }
    
    for(var i=0;i<quotesLength;i++){
    findRandom(quotes,quotesArray); 
    }

    
    
    quotesArray.forEach(element => {
        var htmlString= '<div class="col-md-4 mt-4"><i class="fas fa-quote-left fa-2x text-primary mb-3"></i><blockquote class="blockquote"><p>';
        var quote= element.quote+'</p><footer class="blockquote-footer"><i>';
        var author=element.author+'</i></footer></blockquote></div>';
        quotesRows.innerHTML+=htmlString+quote+author;
    });
      
}

function findRandom(arr,custom){
    var randomNumber=Math.floor(Math.random()*arr.length);
        if(custom.includes(arr[randomNumber])){
        findRandom(arr,custom);
        }
        else{
        custom.push(arr[randomNumber]);
        }
}

function embedder(){
    const params = new URLSearchParams(window.location.search)
    var link=params.get("link");
    if(link!=null){
       var str= document.querySelector("iframe");
    str.setAttribute("src","https://poly.google.com/view/"+link+"/embed");
    var strTest=params.get("index");
    document.querySelector("#details").innerHTML+="<p class='emphasis'><u>"+strTest+"</u></p>"; 
    }

    
}


embedder();
fillCards();
fillQuotes();






