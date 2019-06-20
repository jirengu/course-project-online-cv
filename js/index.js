

window.onhashchange = () => {
  document.querySelector('#page').className = location.hash.replace('#', '')
}



function throttle(fn, gapTime) {
  let lastTime = null
  let nowTime = null
  return function() {
      nowTime = Date.now()
      if(!lastTime || nowTime - lastTime > gapTime) {
          fn.apply(this, arguments)
          lastTime = nowTime
      }
  }
}

let index = 0
let pageTabs = document.querySelectorAll('nav a')

function fn(e) {
  if(e.deltaY > 0 && index < pageTabs.length - 1 ) {
    index++
    pageTabs[index].click()
  } else if(e.deltaY < 0 && index > 0) {
    index--
    pageTabs[index].click()
  }
}
fn = throttle(fn, 800)


document.querySelector('#page').onwheel = function(e) {
  e.preventDefault()
  fn(e)
}




