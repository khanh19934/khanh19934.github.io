const loadingPage = document.getElementById('loading');
const rootApp = document.getElementById('root');
const progressBar = document.getElementById("progress-bar"); 
const percentNumberElem = document.getElementById("percent-number");
const move = () => {
    let width = 1;
    let id = setInterval(frame, 30);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            progressBar.style.width = width + '%'; 
            percentNumberElem.innerHTML = width * 1 + '%';
        }
    }
}

const fakeLoadingScreen = () => {
    move()
    setTimeout(() => {
        loadingPage.style.display = "none";
    },3500);
    setTimeout(() => {
        loadingPage.classList.add("slideAnimation");
        rootApp.style.display = "flex";
    },3000);
}



fakeLoadingScreen();

export default fakeLoadingScreen;