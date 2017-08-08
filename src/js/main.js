/*
 * Custom Scripts
 *
 * This document contains all of the custom scripts for website. This is written
 * using jQuery to simplify code complexity.
 */
var clicks = 0;
var ctaButton = document.getElementById('#cta');
var toggle = document.getElementById('toggle');
var square = 'red';

$('#cta').click(function() {
    $('#form-holder').addClass('form-open');
    $('#form-holder').addClass('form-open');
    $('#menuCircle').addClass('toggle-circle-active');
    $('#line1').addClass('toggle-line1-active');
    $('#line2').addClass('toggle-line2-active');
    $('#line3').addClass('toggle-line3-active');
    clicks = 1;
});
$('#toggle').click(function() {
    clicks ++;
    if (clicks % 2 != 0 ) {
        $('#form-holder').addClass('form-open');
        $('#menuCircle').addClass('toggle-circle-active');
        $('#line1').addClass('toggle-line1-active');
        $('#line2').addClass('toggle-line2-active');
        $('#line3').addClass('toggle-line3-active');
    } else {
        $('#form-holder').removeClass('form-open');
        $('#menuCircle').removeClass('toggle-circle-active');
        $('#line1').removeClass('toggle-line1-active');
        $('#line2').removeClass('toggle-line2-active');
        $('#line3').removeClass('toggle-line3-active');
    }
});


$(".selector").mouseenter(function(e) {
  $(this).css('opacity','1');
});
$(".selector").mouseleave(function(e) {
  $(this).css('opacity','.6');
  $('#info-box').html($(this).data('info'));
});

$(".selector").click(function() {
    var info = this.id + '1';
    $('.info-body').removeClass('info-active');
    $('.' + info).addClass('info-active');
    $(".selector").removeClass('room-active');
    $(this).addClass('room-active');
//    alert(info);
});

$('#square').click(function() {
    if( square == 'red' ) {
        $(this).addClass('bluesquare');
        square = 'blue';
        return
    } if ( square == 'blue' ) {
        $(this).removeClass('bluesquare');
        $(this).addClass('greensquare');
        square = 'green';
        return
    } if ( square == 'green' ) {
        $(this).removeClass('greensquare');
        $(this).addClass('yellowsquare');
        square = 'yellow';
        return
    } if ( square == 'yellow' ) {
        $(this).removeClass('yellowsquare');
        square = 'red';
        return
    }
});

