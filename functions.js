function hide(id) {
    document.getElementById(id).style.display = ('none');
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    hide('languages');
    hide('skills');
    hide('projects');
    hide('home');
}

function showHomePage() {
    hideAllPages();
    show('home');
}

function showLanguagesPage() {
    hideAllPages();
    show('languages');
}

function showSkillsPage() {
    hideAllPages();
    show('skills');
}

function showProjectsPage() {
    hideAllPages();
    show('projects');
}