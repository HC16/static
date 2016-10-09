$('.mobile-nav-toggle').click(function () {

  $('ul.navbar').toggleClass('open');
  $('div.navbar-bg').toggleClass('open');

  var txt = $('.mobile-nav-toggle i').text();
  $('.mobile-nav-toggle i').text((txt === 'menu') ? 'close' : 'menu');
  console.log(txt);
});
