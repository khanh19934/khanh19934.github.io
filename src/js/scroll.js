import {move} from './preloading';

const delayAnimate = () => {
    const htmlSkillBar = document.getElementById('html');
    const javascriptSkillBar = document.getElementById('js');
    const reactSkillBar = document.getElementById('react');
    const reactNativeSkillBar = document.getElementById('react-native');
    const mongoSkillBar = document.getElementById('mongo');
    const nodeSkillBar = document.getElementById('nodejs')
    if(htmlSkillBar.classList.contains("start-animated")){
        move(55,20,htmlSkillBar,null,0.5);
        move(65,20,javascriptSkillBar,null,0.5);
        move(72,20,reactSkillBar,null,0.5);
        move(83,20,reactNativeSkillBar,null,0.5);
        move(50,20,mongoSkillBar,null,0.5);
        move(55,20,nodeSkillBar,null,0.5);
        window.removeEventListener("scroll",handler)
        
    }
    return;
    
}

const handler = () => {
    const skilIntroduce = document.getElementById('skill-introduce');
    const introduce = document.getElementById('introduce-page');
    const introduceRect = introduce.getBoundingClientRect();
    const rect = skilIntroduce.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    const introduceRectOffset = introduceRect.top - bodyRect.top
    const skillOffset   = rect.top - bodyRect.top - introduceRectOffset + 100;
    const skillHeader = document.getElementById('skill-header');
    const skillIntroduce = document.getElementById('skill-introduce');
    const curPos = window.scrollY;
    const htmlSkillBar = document.getElementById('html');
    if(curPos > skillOffset){
        skillHeader.classList.add("animated");
        skillIntroduce.classList.add("animated");
        htmlSkillBar.classList.add("start-animated");
        delayAnimate();
    }
    const a = window.screenY;
    console.log(a);
}
const scrollControll = () => {
    window.addEventListener("scroll",handler)  
}
scrollControll();
export default scrollControll;

