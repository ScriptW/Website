let entered = false;
$(document).ready(() => {
    $("html").click(() => {
        if (entered) return;
        entered = true;
        $("pre").fadeIn();
        $("h1").fadeOut();
        $("audio").get(0).play();
    });
});

var vid = document.getElementById("dreams");
vid.volume = 0.2;