$('.mobile-nav-toggle').click(function () {
  toggleMenu();
});

$('.div.navbar-bg.open').click(function () {
  toggleMenu();
});

function toggleMenu() {
  $('ul.navbar').toggleClass('open');
  $('div.navbar-bg').toggleClass('open');

  var txt = $('.mobile-nav-toggle i').text();
  $('.mobile-nav-toggle i').text((txt === 'menu') ? 'close' : 'menu');
}
