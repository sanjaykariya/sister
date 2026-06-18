// ❤️ Floating hearts animation
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (10 + Math.random() * 20) + "px";
    heart.style.opacity = "0.7";
    heart.style.animation = "floatUp 5s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 400);


// 🎵 Music play on click (browser safe fix)
window.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 1;

        let playPromise = music.play();

        if (playPromise !== undefined) {
            playPromise.catch(err => {
                console.log("Music blocked until user interaction:", err);
            });
        }
    }
});
// page click ripple feel (tiny polish)
document.addEventListener("click", (e) => {
    let ripple = document.createElement("div");
    ripple.style.position = "fixed";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    ripple.style.width = "10px";
    ripple.style.height = "10px";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255,255,255,0.6)";
    ripple.style.transform = "translate(-50%,-50%)";
    ripple.style.pointerEvents = "none";
    ripple.style.animation = "fadeOut 0.6s ease";

    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});