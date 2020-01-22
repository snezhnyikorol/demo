$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        $('#quiz').fadeToggle("fast", ()=> $('#result').fadeToggle("fast"));
    });
    $("input[name='start']").on('change', function() {
        $('#start').fadeToggle("fast", ()=> $('#quiz').fadeToggle("fast"));
    });
    $("input[type='range']").on('change', function() {
        $('#rangeValue').text($("input[type='range']").val());
    });
});

