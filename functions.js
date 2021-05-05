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
    
    for(var i = 0; i < pagesIds.length; i++) {
        hide(pageIds[i]);
    }
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