// let about_us_btn;
// let meet_team_btn;
// let bean_wardrobe_btn;
// let season_archive_btn;
// let season_of_creativity_btn;

// let about_us_section;
// let meet_the_team_section;
// let season_archive_section;
// let placeholder_section;
// placeholder_section = document.getElementById("placeholder-section");

// let season_of_creativity_container;
// let creativity_emblem_clickable;
// let season_of_discovery_container;
// let season_of_secrecy_container;
// let season_of_placeholder_container;

// window.addEventListener("DOMContentLoaded", async () => {
//     about_us_btn = document.getElementById("about-us-btn");
//     meet_team_btn = document.getElementById("meet-team-btn");
//     bean_wardrobe_btn = document.getElementById("bean-wardrobe-btn");
//     season_archive_btn = document.getElementById("season-archive-btn");

//     about_us_btn.addEventListener('click', openAboutUsSection);
//     meet_team_btn.addEventListener('click', openMeetTeamSection);
//     bean_wardrobe_btn.addEventListener('click', togglePlaceholderSection);
//     season_archive_btn.addEventListener('click', togglePlaceholderSection);
// });

// function openAboutUsSection() {
//     about_us_section = document.getElementById("about-us-section");
//     about_us_section.style.display = "block";

//     meet_the_team_section = document.getElementById("meet-the-team-section");
//     meet_the_team_section.style.display = "none";

//     season_archive_section = document.getElementById("season-archive-section");
//     season_archive_section.style.display = "none";

//     placeholder_section.style.visibility = "hidden";
// }

// function openMeetTeamSection() {
//     about_us_section = document.getElementById("about-us-section");
//     about_us_section.style.display = "none";

//     meet_the_team_section = document.getElementById("meet-the-team-section");
//     meet_the_team_section.style.display = "block";

//     season_archive_section = document.getElementById("season-archive-section");
//     season_archive_section.style.display = "none";

//     placeholder_section.style.visibility = "hidden";
// }

// function openSeasonArchiveSection() {
//     about_us_section = document.getElementById("about-us-section");
//     about_us_section.style.display = "none";

//     meet_the_team_section = document.getElementById("meet-the-team-section");
//     meet_the_team_section.style.display = "none";

//     season_archive_section = document.getElementById("season-archive-section");
//     season_archive_section.style.display = "block";

//     placeholder_section.style.visibility = "hidden";

//     season_of_creativity_btn = document.getElementById("season-of-creativity-btn");
//     season_of_creativity_btn.addEventListener('click', openCreativityArchive);
// }

// function openCreativityArchive() {
//     let season_of_creativity_desc = document.getElementById("season-of-creativity-desc");
//     season_of_creativity_desc.style.display = "block";

//     season_of_discovery_container = document.getElementById("season-of-discovery-container");
//     season_of_discovery_container.style.display = "none";

//     season_of_secrecy_container = document.getElementById("season-of-secrecy-container");
//     season_of_secrecy_container.style.display = "none";

//     season_of_placeholder_container = document.getElementById("season-of-placeholder-container");
//     season_of_placeholder_container.style.display = "none";
// }

// function togglePlaceholderSection() {
//     about_us_section = document.getElementById("about-us-section");
//     about_us_section.style.display = "none";

//     meet_the_team_section = document.getElementById("meet-the-team-section");
//     meet_the_team_section.style.display = "none";

//     placeholder_section.style.visibility = "visible";
// }