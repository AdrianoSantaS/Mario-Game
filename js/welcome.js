const text = "Your High Quality Digital Agency Based in Ireland!"
const container = document.getElementById ('welcome_text');
let index = 0;
const charactersPerLine = 38;

function Welcome_Text (){
    if (index < text.length){

        container.innerHTML += text.charAt (index);
        index++;
        setTimeout(Welcome_Text, 30);
    }
}
container.style.fontSize = "20px";


Welcome_Text();
