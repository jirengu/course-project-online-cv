
window.onhashchange = () => {
  document.querySelector('#page').className = location.hash.replace('#', '')
}



