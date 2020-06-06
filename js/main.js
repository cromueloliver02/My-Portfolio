function fadeOut() {
   $('.loader').fadeOut(750);
}

window.addEventListener('DOMContentLoaded', function () {
   setTimeout(() => {
      fadeOut();

      setTimeout(() => {
         const typed = new Typed('.element', {
            typeSpeed: 150,
            backSpeed: 35,
            loop: true,
            backDelay: 2000,
            strings: ['Fullstack Developer', 'Software Engineer', 'Penetration Tester', 'IT Student'],
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true
         });
      }, 4000);
   }, 1000);
});

$(document).ready(function () {



   // $(window).on('load', function () {
   //    setTimeout(() => {
   //       fadeOut();

   //       setTimeout(() => {
   //          const typed = new Typed('.element', {
   //             typeSpeed: 150,
   //             backSpeed: 35,
   //             loop: true,
   //             backDelay: 2000,
   //             strings: ['Fullstack Developer', 'Software Engineer', 'Penetration Tester', 'IT Student'],
   //             showCursor: true,
   //             cursorChar: '|',
   //             autoInsertCss: true
   //          });
   //       }, 0);
   //    }, 1000);
   // });

   // setTimeout(() => {
   //    const typed = new Typed('.element', {
   //       typeSpeed: 150,
   //       backSpeed: 35,
   //       loop: true,
   //       backDelay: 2000,
   //       strings: ['Fullstack Developer', 'Software Engineer', 'Penetration Tester', 'IT Student'],
   //       showCursor: true,
   //       cursorChar: '|',
   //       autoInsertCss: true
   //    });
   // }, 4750);

   AOS.init({
      offset: 100,
      duration: 1500
   });

   $('#slides').superslides({
      animation: 'fade',
      play: 5000,
      pagination: false
   })

   /* SMOOTH SCROLLING */
   $('#main-nav a').on('click', function (event) {
      if (this.hash !== '') {
         event.preventDefault();

         const hash = this.hash;

         $('html, body').animate(
            {
               scrollTop: $(hash).offset().top - 70
            },
            800
         );
      }
   });
});