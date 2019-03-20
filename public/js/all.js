var content = document.getElementById('content');
var send = document.getElementById('send');

send.addEventListener('click',function(e){
    e.preventDefault();
    // prevent the default action of sending of form
    var xhr = new XMLHttpRequest();
    xhr.open('post','/searchAJAX');
    xhr.setRequestHeader('Content-type','application/json');
    // var data = 'content='+ content.value ;
    var data = JSON.stringify({content: content.value});
    console.log(data);
    xhr.send(data);
    xhr.onload = function(){
        console.log(xhr.responseText);
    }
})