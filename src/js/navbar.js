// Toggle the collapsed navbar content
const navbarTogglerButton = document.querySelector(".navbar__toggler-button");
const navbarTogglerButtonIcon = document.querySelector(".navbar__toggler-button-icon");
const navbarCollapseContent = document.querySelector(".navbar__collapse-content");

let togglerStateExpanded = false;

navbarTogglerButton.addEventListener("click", function() {
    if (!togglerStateExpanded) {
        navbarCollapseContent.classList.add("navbar__collapse-content--show");
        navbarTogglerButtonIcon.classList.add("navbar__toggler-button-icon--active");
        togglerStateExpanded = true;
    } else {
        navbarCollapseContent.classList.remove("navbar__collapse-content--show");
        navbarTogglerButtonIcon.classList.remove("navbar__toggler-button-icon--active");
        togglerStateExpanded = false;
    }
});