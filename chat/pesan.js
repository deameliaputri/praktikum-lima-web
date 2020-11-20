var result = document.getElementById('result');
var input = document.getElementById('inputChat');
var btnChat = document.getElementById('btn');

btnChat.addEventListener("click", function(){
result.innerHTML = result.innerHTML + "<br>" + input.value;
input.value = "";
    })
        
   