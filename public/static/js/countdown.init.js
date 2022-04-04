//countdown.init.js
// const hora = Date(Now)
let d1 = new Date(2022, 4, 4, 18, 00)
let d2 = new Date(2022, 3, 8, 18, 00)
let d0 = Date.now
console.log(d0)
$('#countdown').countdown(d1, function(event) {
var $this = $(this).html(event.strftime(''
    + '<div class="count-down"> <span class="count-number">%D</span> <span class="count-head position-relative d-block">Días</span></div> '
    + '<div class="count-down"> <span class="count-number">%H</span> <span class="count-head position-relative d-block">Horas</span></div> '
    + '<div class="count-down"> <span class="count-number">%M</span> <span class="count-head position-relative d-block">Minutos</span></div> '
    + '<div class="count-down"> <span class="count-number">%S</span> <span class="count-head position-relative d-block">Segundos</span></div>'
    ));
});

$('#eventdown').countdown(d2, function(event) {
var $this = $(this).html(event.strftime(''
    + '<div class="count-down"> <span class="count-number">%D</span> <span class="count-head position-relative d-block">Días</span></div> '
    + '<div class="count-down"> <span class="count-number">%H</span> <span class="count-head position-relative d-block">Horas</span></div> '
    + '<div class="count-down"> <span class="count-number">%M</span> <span class="count-head position-relative d-block">Minutos</span></div> '
    + '<div class="count-down"> <span class="count-number">%S</span> <span class="count-head position-relative d-block">Segundos</span></div>'
    ));
});