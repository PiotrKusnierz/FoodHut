function getWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

function getHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function toggleNavbar(minWidth = 957) {
    if (getWidth() < minWidth) {
        document.getElementsByClassName("navBarBackground")[0].style.display = "none";
        document.getElementsByClassName("sidebar")[0].style.display = "block";
        document.getElementById("logo").style.left = "0px";
        document.getElementById("logo").style.margin = "auto";
    } else {
        document.getElementsByClassName("navBarBackground")[0].style.display = "block";
        document.getElementsByClassName("sidebar")[0].style.display = "none";
        document.getElementById("logo").style.left = "15%";
        document.getElementById("logo").style.margin = "0";
    }
}

function toggleSidebar() {
    var sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.style.left = sidebar.style.left === "0px" ? "-172px" : "0px";
    console.log(sidebar.style.left);
    console.log(sidebar);
}

window.addEventListener('resize', function(event) {
    toggleNavbar();
});

window.onload = function() {
    toggleNavbar();

    document.getElementById('sidebarToggle').onclick = function(event) {
        toggleSidebar();
    }
}

