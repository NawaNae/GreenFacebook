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
function setTagColor(tag, color) {//都是字串 ex tag='div' 也可以是css選擇器  color='rgba(20,40,60,80)'或者'green'
    var elements = document.querySelectorAll(tag);
    Array.from(elements).forEach(function (ele, index, arr) {
        ele.style.color = color;
    }
    );
}
function setTagBackColor(tag, color) {//都是字串 ex tag='div' 也可以是css選擇器  color='rgba(20,40,60,80)'或者'green'
    var elements = document.querySelectorAll(tag);
    Array.from(elements).forEach(function (ele, index, arr) {
        ele.style.backgroundColor = color;
    }
    );
}
function FBtoGreen() {
    setTagColor('a', 'rgba(0,50,0,100)');
    setTagColor('span', 'rgba(0, 100, 0, 100)');
    setTagColor('p', 'rgba(0,150,0,100)');
    setTagBackColor('a', 'rgba(0,0,0,0)');
    setTagBackColor('span', 'rgba(0,0,0,0)');
    setTagBackColor('div', 'rgba(100,200,100,100)');
    setTagBackColor('li', 'rgba(100,200,100,100)');
    setTagBackColor('input', 'rgba(170,250,170,0)');
}
//FBtoGreen();//單次執行用
setIcon('http://imgur.com/d6kJJp8.png');//改FB的icon成綠色的
setInterval(FBtoGreen, 1000);//每秒刷新所有網頁物件背景