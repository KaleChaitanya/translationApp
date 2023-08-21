var btn = document.querySelector('#btn-translate');
var inputText = document.querySelector('#inputText');
var outputDiv = document.querySelector('#outputDiv');
var clearBtn=document.querySelector('#clear');

var url = "https://api.funtranslations.com/translate/sith.json";

function getText(text) {
    return url + "?" + "text=" + text
}

function translateText(){
    var userInput=inputText.value;
    fetch(getText(userInput))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })
};

btn.addEventListener('click', translateText)

clearBtn.addEventListener('click',function(){
    inputText.value='';
})