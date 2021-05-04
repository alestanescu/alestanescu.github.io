function hide(id) {
    document.getElementById(id).style.display = ('none');
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    
    for(var i = 0; i < pagesIds.length; i++) {
        hide(pages[i].id);
    }
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