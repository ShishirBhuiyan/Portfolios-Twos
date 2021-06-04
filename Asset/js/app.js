$(document).ready(function() {
    //<=========== Hamburger Click =============>
    $(".menu").click(function() {
        $(".menu .line").toggleClass("active");
        $(".navigation").toggleClass("open");
    });
    //<=========== Menu Click =============>
    $(".list").click(function() {
        $(".menu .line").toggleClass("active");
        $(".navigation").toggleClass("open");
    });


    
    $('#toggles').click(function() {
        var html = document.querySelector("html");
        var tg = document.getElementById("toggles");
        tg.classList.toggle("active");
       
       
        if ($("html").attr("data-theme") == 'dark') {
            html.setAttribute("data-theme", "light");
        } else {
            html.setAttribute("data-theme", "dark");
        }
       
    });
});//<=========== Jquery End =============>

