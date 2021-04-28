const responsive={
    0:{
        item:1

    },
    320:{
        items:1
    },
    560:{
      items: 1
    },
    960:{
        items:2
    }
}
$(document).ready(function (){
        $('.owl-carousel').owlCarousel({
            loop:true,
            autoplay:false,
            autoplayTimeout: 3000,
            dots: false,
            nav:true,
            navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
            responsive: responsive
        });


    document.querySelector('.bars').addEventListener('click',
        ()=>document.querySelector('.main-nav').classList.toggle('show'))


})