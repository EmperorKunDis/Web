const parallax_el = document.querySelectorAll(".parallax");

var righttop_element = document.getElementById("ritoopaimg");
var rightbot_element = document.getElementById("riboopaimg");
var leftbot_element = document.getElementById("leboopaimg");
var lefttop_element = document.getElementById("letoopaimg");

var righttop_elemtxt = document.getElementById("ritoopatxt");
var rightbot_elemtxt = document.getElementById("riboopatxt");
var leftbot_elemtxt = document.getElementById("leboopatxt");
var lefttop_elemtxt = document.getElementById("letoopatxt");
    
const obraopa_el = document.querySelectorAll(".obraopa");
    
let xValue = 0, 
    yValue = 0;
    
window.addEventListener("mousemove", (e) => {
    xValue = (e.clientX - window.innerWidth / 2) * -1;
    yValue = (e.clientY - window.innerHeight / 2) * -1;
    
    let rightbot_num = (yValue / (window.innerHeight / 2)) * -1;
    let righttop_num = (xValue / (window.innerWidth / 2)) * -1;
    let leftbot_num = (yValue / (window.innerHeight / 2)) * -1;
    let lefttop_num = (xValue / (window.innerWidth / 2));    
    
    let righttop_opa = righttop_num.toFixed(2);
    let rightbot_opa = rightbot_num.toFixed(2);
    let leftbot_opa = leftbot_num.toFixed(2);
    let lefttop_opa = lefttop_num.toFixed(2);
    
    if (xValue >= 0 && yValue >= 0) {
        lefttop_element.style.opacity = lefttop_opa;
        if (lefttop_opa > 0.5) {
            lefttop_elemtxt.style.opacity = 1;
            leftbot_elemtxt.style.opacity = 0;
            righttop_elemtxt.style.opacity = 0;
            rightbot_elemtxt.style.opacity = 0;
        }else { lefttop_elemtxt.style.opacity = 0;
                leftbot_elemtxt.style.opacity = 1;
                righttop_elemtxt.style.opacity = 1;
                rightbot_elemtxt.style.opacity = 1;}

    } else if (xValue >= 0 && yValue < 0) {
        leftbot_element.style.opacity = leftbot_opa;
        if (leftbot_opa > 0.5) {
            leftbot_elemtxt.style.opacity = 1;
            righttop_elemtxt.style.opacity = 0;
            rightbot_elemtxt.style.opacity = 0;
            lefttop_elemtxt.style.opacity = 0;
        }else { leftbot_elemtxt.style.opacity = 0;
                righttop_elemtxt.style.opacity = 1;
                rightbot_elemtxt.style.opacity = 1;
                lefttop_elemtxt.style.opacity = 1;}

    } else if (xValue < 0 && yValue >= 0) {
        righttop_element.style.opacity = righttop_opa;
        if (righttop_opa > 0.5) {
            righttop_elemtxt.style.opacity = 1;
            rightbot_elemtxt.style.opacity = 0;
            lefttop_elemtxt.style.opacity = 0;
            leftbot_elemtxt.style.opacity = 0;
        }else { righttop_elemtxt.style.opacity = 0;
                rightbot_elemtxt.style.opacity = 1;
                lefttop_elemtxt.style.opacity = 1;
                leftbot_elemtxt.style.opacity = 1;}

    } else {
        rightbot_element.style.opacity = rightbot_opa;
        if (rightbot_opa > 0.5) {
            rightbot_elemtxt.style.opacity = 1;
            lefttop_elemtxt.style.opacity = 0;
            leftbot_elemtxt.style.opacity = 0;
            righttop_elemtxt.style.opacity = 0;
        }else { rightbot_elemtxt.style.opacity = 0;
                lefttop_elemtxt.style.opacity = 1;
                leftbot_elemtxt.style.opacity = 1;
                righttop_elemtxt.style.opacity = 1;}
    }
    
    console.log(rightbot_opa, righttop_opa, leftbot_opa, lefttop_opa);
        
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
    
    el.style.transform = `
        translateX(calc(-50% + ${
            xValue * speedx
        }px)) 
        translateY(calc(-50% + ${
            yValue * speedy
        }px))`;
    });
    
});
