const textTimeout = (()=>{
    let svgText = document.querySelector("text");
    setTimeout(() => {
        svgText.innerHTML = "Join Us"
    }, 2000);
    setTimeout(() => {
        svgText.innerHTML = "Web Summit"
    }, 4000);
    setTimeout(() => {
        svgText.innerHTML = "Join Us"
    }, 6000);
    setTimeout(() => {
        svgText.innerHTML = "Web Summit"
    }, 8000);

});
window.onload = textTimeout();