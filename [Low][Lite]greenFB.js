// JavaScript source code
function setIcon(icon) {
    var links = document.querySelectorAll('link');
    Array.from(links).forEach
        (
        function (ele, index, arr) {
            if (ele.rel.indexOf('shortcut icon') != -1) {
                ele.href = icon;
                return;
            }
        }
        ) 
}
function createStyle()
{
    var newStyle = document.createElement("style");
    newStyle.innerHTML += "* {background-color: rgb(100, 200, 100);}";
    newStyle.innerHTML += ".UFIRow {background-color: rgb(100, 200, 100);}";
    newStyle.innerHTML += "div {background-color: rgb(100, 200, 100);}";
    newStyle.innerHTML += "a {color:rgba(0,50,0,100);background-color: rgba(0,0,0,0);}";
    newStyle.innerHTML += "span{background-color:rgba(0,0,0,0);background-color: rgba(0,0,0,0)}";
    newStyle.innerHTML += "p{background-color:rgba(0,0,0,0)}";
    newStyle.innerHTML += "li{background-color:rgba(100,200,100,100)}";
    newStyle.innerHTML += "input{background-color:rgba(100,200,100,100)}";
    document.querySelector('head').appendChild(newStyle);
}
setIcon('http://imgur.com/d6kJJp8.png');//改FB的icon成綠色的
createStyle();