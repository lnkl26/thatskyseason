let about_us_btn;
let meet_team_btn;
let bean_wardrobe_btn;
let season_archive_btn;

let about_us_section;
let meet_the_team_section;
let placeholder_section;

window.addEventListener("DOMContentLoaded", async () => {
    about_us_btn = document.getElementById("about-us-btn");
    meet_team_btn = document.getElementById("meet-team-btn");
    bean_wardrobe_btn = document.getElementById("bean-wardrobe-btn");
    season_archive_btn = document.getElementById("season-archive-btn");

    about_us_btn.addEventListener('click', openAboutUsSection);
    meet_team_btn.addEventListener('click', openMeetTeamSection);
    bean_wardrobe_btn.addEventListener('click', togglePlaceholderSection);
    season_archive_btn.addEventListener('click', togglePlaceholderSection);
});

function openAboutUsSection() {
    about_us_section = document.getElementById("about-us-section");
    
    about_us_section.style.display = "flex";
    about_us_section.style.justifyContent = "center";
    about_us_section.style.flexWrap = "wrap";

    meet_the_team_section = document.getElementById("meet-the-team-section");

    meet_the_team_section.style.display = "none";

    placeholder_section.style.visibility = "hidden";
}

function openMeetTeamSection() {
    about_us_section = document.getElementById("about-us-section");
    
    about_us_section.style.display = "none";

    meet_the_team_section = document.getElementById("meet-the-team-section");

    meet_the_team_section.style.display = "flex";
    meet_the_team_section.style.justifyContent = "center";
    meet_the_team_section.style.flexWrap = "wrap";

    placeholder_section.style.visibility = "hidden";
}

function togglePlaceholderSection() {
    about_us_section = document.getElementById("about-us-section");
    
    about_us_section.style.display = "none";

    meet_the_team_section = document.getElementById("meet-the-team-section");

    meet_the_team_section.style.display = "none";

    placeholder_section = document.getElementById("placeholder-section");

    placeholder_section.style.visibility = "visible";
}