let jaw = {
    46: 11,
    47: 12,
    48: 13,
    49: 14,
    45: 15,
    41: 16,
    44: 17,
    43: 18,
    62: 21,
    63: 22,
    64: 23,
    65: 24,
    61: 25,
    58: 26,
    60: 27,
    59: 28,
    30: 41,
    31: 42,
    32: 43,
    33: 44,
    29: 45,
    26: 46,
    28: 47,
    27: 48,
    14: 31,
    15: 32,
    16: 33,
    17: 34,
    13: 35,
    10: 36,
    12: 37,
    11: 38,
};

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


    let checked = {
        current: '',
        black: [],
        red: [],
        green: [],
        blue: []
    };

    for(let el in jaw) {
        $('.st'+el).click(function () {
            if (checked.current != '') {
                $('#customCheck'+jaw[el]).prop('checked', ! $('#customCheck'+jaw[el]).prop('checked'));
                if ($('#customCheck'+jaw[el]).prop('checked')) {
                    $(this).css('fill', checked.current);
                    $(`[data-color=${checked.current}]`).parent().
                    parent().find("[name='count']").val(parseInt($(`[data-color=${checked.current}]`).parent().
                    parent().find("[name='count']").val() )+ 1);
                } else {
                    $(this).css('fill', `url(#SVGID_${parseInt(el)-1}_)`);
                    $(`[data-color=${checked.current}]`).parent().
                    parent().find("[name='count']").val(parseInt($(`[data-color=${checked.current}]`).parent().
                    parent().find("[name='count']").val()) - 1);
                }
            }
        })
    }

    $('.color').click(function (event) {
        $(this).css('background-color', $(this).data('color'));
        let $relatedInput = $(this).parent().parent().find("[name='count']");
        if( $relatedInput[0].hasAttribute('disabled')) {
            $relatedInput.removeAttr('disabled');
            $relatedInput.attr('readonly', true);
        }
        if (checked.current != '') {
            $('.teeth').find('input:checked').each(function () {
                checked[checked.current].push($(this).attr('id').slice(-2));
            });

        }
        checked.current = $(this).data('color');
        $('.teeth').find("input[type='checkbox']").each(function () {
            if (checked[checked.current].includes($(this).attr('id').slice(-2))) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        })
        for (let el in jaw) {
            if ($('#customCheck'+jaw[el]).prop('checked')) {
                $('.st'+el).css('fill', checked.current);
                console.log('1')
            } else {
                $('.st'+el).css('fill', `url(#SVGID_${parseInt(el)-1}_)`);
                console.log('2')
            }
        }
    })

});

