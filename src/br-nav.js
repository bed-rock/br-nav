/*
==========================
Vertical Responsive Menu
==========================
*/

'use strict';


var tid = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval( tid );


  var querySelector = document.querySelector.bind(document);

  var nav = querySelector('br-nav');
  // var wrapper = document.querySelector('.wrapper');

  var menu = querySelector(".js-menu");
  var item = menu.querySelectorAll('.menu--item__has_submenu');


  // Open Sub Menu
  for (var i = 0; i < item.length; i++) {

    if (item[i].classList.contains('menu--item__has_submenu') ) {

      item[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (var j = 0; j < item.length; j++) {

          if(this != item[j])
            item[j].classList.remove('menu--item__has_submenu__opened');

        }

        this.classList.toggle('menu--item__has_submenu__opened');

      }, false);

    }
  }


  // Toggle menu click
  querySelector('.toggle_menu').onclick = function () {
    nav.classList.toggle('page-nav__opened');
  };


}, 100 );
