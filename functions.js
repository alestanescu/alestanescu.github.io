function hide(id) {
    document.getElementById(id).style.display = ('none');
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    var pages = Array.from(document.querySelectorAll(".page"));
    var pagesIds = pages.map(function(page){
        return page.id;
    });    
    pagesIds.forEach(function(pageId){
        hide(pageId);
    });
}

function showPage(pageId) {
    hideAllPages();
    show(pageId);
}

function listenMenuClicks() {
    var menu = document.getElementById('top-menu-bar');
    menu.addEventListener("click", function(e){
        var link = e.target;
        if (link.matches("a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
    });
}

listenMenuClicks();

showPage("skills");

var allSkills = [
    { name: "HTML", favorite: true, endorsements: 5 },
    { name: "CSS", favorite: true, endorsements: 4 },
    { name:"JS", favorite: true, endorsements: 6}
];

var allSkillsHtml = allSkills.map(function(skill){
    return `<li>${skill.name} <span>(${skill.endorsements})</span></li>`;
});

var skillsEl = document.querySelector("#skills ul");
skillsEl.innerHTML = allSkillsHtml.join("");