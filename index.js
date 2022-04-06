$(function(){
    var firstElement = $("#container").width() - $(window).width();
    var secondElement = $("#container").height() - $(window).height();
    $( "#draggable" ).draggable({ containment: [-700, -100, 0, 0] });
    
});