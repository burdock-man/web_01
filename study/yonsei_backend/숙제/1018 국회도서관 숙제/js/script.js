var txtLenth = document.querySelectorAll(".tabMenuWrap .menu li a");
var menuLi = document.querySelectorAll(".tabMenuWrap .tab1 li a")



txtLenth.forEach(function(t){ // 이건 구글에 css 말줄임 검색해보셈. css로 날먹할수 있음 ㅇㅇ.
    console.log(t.textContent.length);
    if (t.textContent.length > 28) {
        t.textContent = t.textContent.substring(0, 27) + "···";
    }
});