function italicLinks() {
    $("a").css("font-style", "italic");
}

function addContent() {
    $.ajax("section.txt").done(function(data) {
        $("#article").append("<section>" + data + "</section>");
    });
}

function openCloseButton() {
    $("section").each(function(i, section) {
        section = $(section);
        
        var button = $("<button></button><br/>");
        
        button.text("close " + section.find("h1").text());
        
        button.click(function() {
            section.toggle();
            if (button.text().startsWith("close")) {
                button.text("open " + section.find("h1").text());
            }
            else {
                button.text("close " + section.find("h1").text());
            }
        });
        
        section.before(button);
    });
}