$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        $('#quiz').fadeToggle("fast", ()=> $('#result').fadeToggle("fast"));
    });
    $("input[name='start']").on('change', function() {
        $('#start').fadeToggle("fast", ()=> $('#quiz').fadeToggle("fast"));
    });
    $("#customRange1").on('change', function() {
        $('#range1Value').text($("input[type='range']").val());
    });
});

