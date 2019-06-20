

window.onhashchange = () => {
  console.log('hash')
  document.querySelector('#page').className = location.hash.replace('#', '')
}


let index = 0
let pageTabs = document.querySelectorAll('nav a')
let gapTime = 1000 
let lastTime = null
let nowTime = null

document.querySelector('#page').onwheel = function(e) {
  e.preventDefault()
  nowTime = Date.now() 
  if(!lastTime || nowTime - lastTime > gapTime) {
    lastTime = nowTime
    if(e.deltaY > 0 && index < pageTabs.length - 1 ) {
      index++
      pageTabs[index].click()
    } else if(e.deltaY < 0 && index > 0) {
      index--
      pageTabs[index].click()
    }
  }
}




