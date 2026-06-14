const weddingDate = new Date("2026-08-20T20:00:00");
function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play().catch(err => {
        console.log("المتصفح منع التشغيل التلقائي");
    });
}
function openEnvelope() {

    document.getElementById("envelope").style.display = "none";

    const invitation = document.getElementById("invitation");

    invitation.classList.remove("hidden");
    invitation.classList.add("show-invitation");

    playMusic();
}
function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
            "🎉 Wedding is started!";
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML =
        `Days:${days} Hours:${hours} Minutes:${minutes} Seconds:${seconds}`;
}
updateCountdown();
setInterval(updateCountdown, 1000);