function hide(id) {
    document.getElementById(id).style.display = ('none');
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    
    for(var i = 0; i < pages.length; i++) {
       var page = pages[i];
       hide(page.id);
       // hide(pages[i].id);
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