const loadingPage = document.getElementById('loading');
const rootApp = document.getElementById('root');
const progressBar = document.getElementById("progress-bar"); 
const percentNumberElem = document.getElementById("percent-number");
const move = (number,delay,elem,percentNumberElem,numPerSec) => {
    let width = 1;
    let id = setInterval(frame, delay);
    function frame() {
        if (width >= number) {
            clearInterval(id);
        } else {
            if(numPerSec){
                width+numPerSec;
            }
            width++; 
            elem.style.width = width + '%';
            if(percentNumberElem){
                percentNumberElem.innerHTML = width * 1 + '%';
            }else {
                return;
            }  
        }
    }
}

const fakeLoadingScreen = () => {
    move(100,10,progressBar,percentNumberElem)
    setTimeout(() => {
        loadingPage.style.display = "none";
    },2300);
    setTimeout(() => {
        loadingPage.classList.add("slideAnimation");
        rootApp.style.display = "flex";
    },1600);
}



fakeLoadingScreen();

export {move}
export default fakeLoadingScreen;