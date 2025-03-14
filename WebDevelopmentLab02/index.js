document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const favTeam = urlParams.get("favTeam");
    const style = urlParams.get("style");
    const loyalty = urlParams.get("loyalty");

    let resultTitle = "";
    let resultImage = "";
    let resultDescription = "";

    if (favTeam === "realMadrid" && loyalty >= 8) {
        resultTitle = "Loyal Madridista";
        resultImage = "images/real.jpg";
        resultDescription = "You're committed to greatness, always pushing for excellence!";
    } else if (favTeam === "barcelona" && style === "creative") {
        resultTitle = "Catalan Creativity";
        resultImage = "images/barca.png";
        resultDescription = "You value creativity and precision, just like FC Barcelona!";
    } else if (favTeam === "manUnited" && loyalty < 5) {
        resultTitle = "pfft...Probably a city fan.";
        resultImage = "images/mancity.jpg";
        resultDescription = "You're tired of Man Utd and have probably jumped ship across to City.";
    } else if (favTeam === "liverpool") {
        resultTitle = "You'll Never Walk Alone";
        resultImage = "images/anfield.jpg";
        resultDescription = "Your loyalty is as deep as Anfield’s history!";
    } else {
        resultTitle = "Free-Spirit Fan";
        resultImage = "images/soccerfan.jpg";
        resultDescription = "You enjoy the sport without getting tied to a single team.";
    }

    document.getElementById("resultTitle").innerText = resultTitle;
    document.getElementById("resultImage").src = resultImage;
    document.getElementById("resultDescription").innerText = resultDescription;
});
