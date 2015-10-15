window.onload = function() {
    document.getElementById("hide").addEventListener('click', function() {
        var elements, i;
        
        elements = document.getElementsByTagName("section");
        for (i = 0; i < elements.length; i++) {
            if (elements[i].style.display == "none") {
                elements[i].style.display = "inline";
            }
            else {
                elements[i].style.display = "none";
            }
        }
    });
    
    document.getElementById("emphasise").addEventListener('click', function() {
        article = document.getElementById("article");
        article.innerHTML = article.innerHTML.replace(/\b(defeasible)\b/ig, '<span style="background-color: #FFFF00; font-weight: bold;">$1</span>');
    });
    
    document.getElementById("remove").addEventListener('click', function() {
        elements = document.getElementsByTagName("a");
        for (i = elements.length - 1; i >= 0; i--) {
            elements[i].parentElement.removeChild(elements[i]);
        }
    });
}