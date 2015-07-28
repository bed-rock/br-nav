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

  var nav = document.querySelector('br-nav');
  // var wrapper = document.querySelector('.wrapper');

  var menu = document.getElementById("js-menu");
  var subnavs = menu.querySelectorAll('.menu--item__has_submenu');


  // Open Sub Menu
  for (var i = 0; i < subnavs.length; i++) {

    if (subnavs[i].classList.contains('menu--item__has_submenu') ) {

      subnavs[i].addEventListener('click', function (e) {

        e.preventDefault();

        for (var j = 0; j < subnavs.length; j++) {

          if(this != subnavs[j])
            subnavs[j].classList.remove('submenu__opened');

        }

        this.classList.toggle('submenu__opened');

      }, false);

    }
  }


  // Toggle menu click
  querySelector('.toggle_menu').onclick = function () {
    nav.classList.toggle('page-nav__opened');
    // wrapper.classList.toggle('toggle-content');
  };


}, 100 );
