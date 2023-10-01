const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel:true,
    parallax: true,
breakpoints: {
    0: {
        slidesPerView: 2.5,
        spaceBetween: 20
    },
    
    320: {        
        slidesPerView: 1.5, 
        spaceBetween: 10      
     },     
      480: {        
        slidesPerView: 2,        
        spaceBetween: 20      
     },    
 
      640: {        
        slidesPerView: 3,        
        spaceBetween: 30      
     }, 
     680: {
        slidesPerView: 3.5,
        spaceBetween: 60
    }
}
});


const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
})
sliderMain.controller.control = sliderBg;
let desc = document.querySelector('.description');
sliderMain.on('slideChange', e =>{
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})


document.querySelectorAll( '.slider__item').forEach(item=>{
    item.addEventListener('click', event =>{

        item.classList.toggle('opened');

        document.addEventListener( 'click', (e) => {
             const withinBoundaries = e.composedPath().includes(item);
             if ( ! withinBoundaries ) {
                
    
                item.classList.remove('opened')
                        }
                        })
                        document.addEventListener('keydown', function(e) {
                            if( e.keyCode == 27 ){ 
                                item.classList.remove('opened');
                                navClose()

                            }
                            
                        });
                        
                        if ( document.querySelector('.swiper').style.overflow = 'hidden') {
                            document.querySelector('.swiper').style.overflow = 'visible';
                        }            
                        
                        function navClose(){
                            if (item.classList.contains('opened')){
                                document.querySelector('nav').classList.remove('fixed-top');
                            }
                            
                            else {
                                document.querySelector('nav').classList.add('fixed-top');
                        }
                        }    
                       navClose()

                        
   
        })})

document.querySelectorAll('.diplom').forEach(item=>{
    item.addEventListener('click', event => {
        item.classList.toggle('fullSize');
        document.querySelector('nav').classList.toggle('fixed-top');
    })})



    