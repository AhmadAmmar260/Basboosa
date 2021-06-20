// More Topics Area


var tog = 0;
$('#moretopbtn').click(function() {
    $('#moretop-sec').show();
});

var tog = 0;
$('#moretopbtn2').click(function() {
    $('#moretop-sec').toggle();
    $('#moretopbtn2').toggleClass("rotate");


    if (tog == 0) {
        $("#conarea").css({ marginLeft: "50px" });
        tog++;
    } else {
        $("#conarea").css({ marginLeft: "184px" });
        tog = 0;
    }
});

$('#moretop-close').click(function() {
    $('#moretop-sec').hide();
})

$('#top1').click(function() {
    $('#drop1').slideToggle();
})

// Hide/Show Comment/Replay
$('#p-comment').click(function() {
    $('#comm-sec').slideToggle();
});

$('#replaybtn').click(function() {
    $('#replay-sec').slideToggle();
});

/*$('#comm-sec').hide();*/
$('#replay-sec').hide();

/*Cancel btn*/
$('#new-commbtn2').click(function() {
        $('#text').val(" ");

    })
    // New Comment & Replay
var a = 0;
$('#new-commbtn').click(function(e) {
    if (a != 5 && $('#new-comm').val().length > 0) { //Heart Button                                                                                                                                                                                                                                                                                                               Heart Button End        Replay Button                                                                                                                                                                                                                                                                                                                                                                                                                                  Replay Button End    Report Button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Report Button End               
        $('#comm-sec').append('<div id="comm"><small>By You</small><p>' + $('#new-comm').val() + '</p><a href="#" title="Give me a heart" id="heart"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg></a><small for="" id="comn" class="">150</small><a id="replaybtn"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-return-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 5.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 9l-2.647-2.646a.5.5 0 0 1 0-.708z" /><path fill-rule="evenodd" d="M3 2.5a.5.5 0 0 0-.5.5v4A2.5 2.5 0 0 0 5 9.5h8.5a.5.5 0 0 0 0-1H5A1.5 1.5 0 0 1 3.5 7V3a.5.5 0 0 0-.5-.5z" /></svg></a><a class="report"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-flag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/><path fill-rule="evenodd" d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"/></svg></a></div><br>');
        $('#new-comm').val('');
        a++;
    }
})

var b = 0;
$('#new-replaybtn').click(function(e) {
    if (b != 5 && $('#new-replay').val().length > 0) { // Heart Button                                                                                                                                                                                                                                                                                    Heart Button End                                       Report Button End                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Report Button End                                                           
        $('#replay-sec').append('<div id="replay"><small>You Replaied @Him</small><p>' + $('#new-replay').val() + '</p><a href="#" title="Give me a heart" id="heart"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg></a><small id="comn">100k</small><a class="report"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-flag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/><path fill-rule="evenodd" d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"/></svg></a></div><br>');
        $('#new-replay').val('');
        b++;
    }
});
var rows = 1;
// Down Line Comment & Replay Section
var observe;
if (window.attachEvent) {
    observe = function(element, event, handler) {
        element.attachEvent('on' + event, handler);
    };
} else {
    observe = function(element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}

function init() {
    var text = document.getElementById('text');

    function resize() {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight + 'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize() {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change', resize);
    observe(text, 'cut', delayedResize);
    observe(text, 'paste', delayedResize);
    observe(text, 'drop', delayedResize);
    observe(text, 'keydown', delayedResize);

    text.focus();
    text.select();
    resize();
}

// Replay textarea

function initt() {
    var text = document.getElementById('new-replay');

    function resize() {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight + 'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize() {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change', resize);
    observe(text, 'cut', delayedResize);
    observe(text, 'paste', delayedResize);
    observe(text, 'drop', delayedResize);
    observe(text, 'keydown', delayedResize);

    text.focus();
    text.select();
    resize();
}


// Report Section
$('#report-sec').hide();

$('.report').click(function() {
    $('#report-sec').show();

});



$('#close').click(function() {
    $('#report-sec').hide();
    $('#textarea').val('');
})



$("select#select").change(function() {

    if ($(this).children("#op:selected").val() == $(this).children(":selected").val()) {
        $('#textarea').show();
    } else {
        if ($('#checkboxe').prop('checked') == false) {
            $('#textarea').hide();
        }
    }


});

$('#checkboxe').click(function() {
    if ($("select#select").children("#op:selected").val() != $("select#select").children(":selected").val()) {
        $('#textarea').toggle();
    }

});

$(this).keydown(function(e) {
    if (e.which == 27) {
        if ($('#report-sec').show()) {
            $('#report-sec').hide();
        }
    }
})

// Like Buttons
$('.like').click(function() {
    $('.like').toggleClass('onlike');
    $('.dislike').removeClass('ondislike');

})


$('.dislike').click(function() {
    $('.dislike').toggleClass('ondislike');
    $('.like').removeClass('onlike');

});

$('.heart').click(function() {
    $('.heart').toggleClass('ondislike');
    console.log("well helllo theree");
})