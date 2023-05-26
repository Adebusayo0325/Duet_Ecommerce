let slideIndex = [1,1]
let shopSlide = document.getElementById('shop-slide')
let shopSlides = document.getElementsByClassName('ss')
let dealSlide = document.getElementById('deal-slide')
let dealSlides = document.getElementsByClassName('deal')
console.log(dealSlides.length)
const state = {
    n : 0,
    x:0
}

const setState = (obj) => {
    state.n = obj.n
    state.x = obj.x
    slideShow()    
}

let startDealSlideN = null
let stopDealSlideN = null
let startShopSlideN = null
let stopShopSlideN = null
function shopSlideStart() {
    if (stopShopSlideN !== null) {
        clearInterval(stopShopSlideN)
        stopShopSlideN = null
    }
    if (startShopSlideN !== null) return
    startShopSlideN = setInterval(() => {
        let index = state.n < shopSlides.length-1 ? state.n+1 : 0 
        setState({...state,n:index})
    }, 2000);
}
shopSlideStart()
function shopPauseSlides() {
    if (startShopSlideN ) {
        clearInterval(startShopSlideN)
        startShopSlideN = null
    }
    stopShopSlideN = state.n
    setState({...state,n:stopShopSlideN}) 
}

function dealSlideStart() {
    if (stopDealSlideN !== null) {
        clearInterval(startDealSlideN)
        startDealSlideN = null
    }
    if(startDealSlideN !==  null ) return
    startDealSlideN = setInterval(() => {
        let index = state.x < dealSlides.length-1 ? state.x+1 : 0
        setState({...state,x:index})
    }, 2000);
}
dealSlideStart()
function dealPauseSlides() {
    if (startDealSlideN) {
        clearInterval(startDealSlideN)
        startDealSlideN = null
    }
    stopDealSlideN = state.x
    setState({...state, x:stopDealSlideN})
}

function listeners() {
    shopSlide.addEventListener('mouseout',()=>{
        shopSlideStart()
    })
    shopSlide.addEventListener('mouseover',()=>{
        shopPauseSlides()
    })
    dealSlide.addEventListener('mouseout',()=>{dealSlideStart()})
    dealSlide.addEventListener('mouseover',()=>{dealPauseSlides()})
}
listeners()
function slideShow() {
    shopSlide.style.right = `${100 * state.n}%`
    dealSlide.style.right = `${100 * state.x}%`
  
}
slideShow()

