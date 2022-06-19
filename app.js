
var btntranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input")
var outputDiv =document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured", error);
    alert("wrong")
}


function clickHandler() {
    
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(respond => respond.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
        
};


    btntranslate.addEventListener("click", clickHandler)




