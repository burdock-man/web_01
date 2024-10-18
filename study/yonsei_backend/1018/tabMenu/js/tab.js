const targetLink = document.querySelectorAll(".tab_menu li a");
const tabContent = document.querySelectorAll("#tabContent>div");

// targetLink 배열을 forEach로 순회

targetLink.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault(); // 링크 금지
        let orgTarget = e.target.getAttribute("href"); // e.target 와 this. 와 비슷. 내가 클릭한놈의 속성을 읽어옴.
        // let tabTarget = orgTarget.replace("#",""); // #tab1 에서 #을 ""공란으로 대체
    

        // 모든 tanContent를 안보이게 설정
        tabContent.forEach(function(content){
            content.style.display = "none";
            
        });
        // 클릭한 탭만 보이게 설정
        // document.getElementById(tabTarget).style.display = "block"; // 이건 getElementById 를 사용할 때 tabTarget를 부르면 된다. 근데 굳이..?
        document.querySelector(orgTarget).style.display = "block"; // 얘가 tabContent의 forEach함수에 들어가지 않는 이유는 div의 개수(3개)를 순회하는동안 같이 일을 해야하기 때문.

        targetLink.forEach(function(link2){
            link2.classList.remove("active");
            e.target.classList.add("active");
        });

    });
});