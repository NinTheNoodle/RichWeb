window.onload = function() {
    links = document.getElementsByClassName("menu-link");
    
    for (i = 0; i < links.length; i++) {
        generateLink(links[i]);
    }
}

function generateLink(link) {
    link.addEventListener('click', function() {
        // set the page's title to the link text
        document.getElementById("heading").innerHTML = link.innerHTML;
        loadContent(link.getAttribute("data-page"));
    });
}

function loadContent(file) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        // request completed
        if (request.readyState == 4) {
            if (request.status == 200) {
                // fill in the returned text
                document.getElementById("content").innerHTML = request.responseText;
            }
            else {
                // ensure the assignment is being tested correctly
                document.getElementById("heading").innerHTML = "Error";
                document.getElementById("content").innerHTML = '<p><em class="red">Failed AJAX request. Make sure to run this website on a server.</em></p>';
            }
        }
    }
    request.open("GET", file, true);
    request.send();
}