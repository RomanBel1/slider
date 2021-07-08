let slider = function Slider(){
    this.start = function(){
        let btnNext = document.querySelector('.btn__next')
        if(!btnNext) return

        let btnPrev = document.querySelector('.btn__prev')
        if(!btnPrev) return

        let slideItems = document.querySelectorAll('.slider__item')
        if(!slideItems) return

        btnNext.addEventListener('click',()=>{
            this.next(slideItems);
        })

        btnPrev.addEventListener('click',()=>{
            this.prev(slideItems);
        })
    }

    this.next = function(slideItems){
        let slide = slideItems[0],
            ml = !slide.style.marginLeft ? 0 : Math.abs(parseInt(slide.style.marginLeft))
        ml = ml + 100

        if(ml < slideItems.length*100){
            slide.style.marginLeft = `-${ml}%`
        }


    }

    this.prev = function(slideItems){
        let slide = slideItems[0],
        ml = !slide.style.marginLeft ? 0 : Math.abs(parseInt(slide.style.marginLeft))
    ml = ml - 100
    if(ml >= 0){
        slide.style.marginLeft = `-${ml}%`
    }
    }
}

window.addEventListener('load',()=>{
    let promoSlider = new slider()
    promoSlider.start()
})