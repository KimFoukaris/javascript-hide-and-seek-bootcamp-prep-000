function getFirstSelector(selector) {
  const select = document.querySelector(selector)
  return select
}

function nestedTarget() {
  const target = document.querySelector('#nested .target')
  return target
  }

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i=0; i<lis.length; i++) {
    var temp = parseInt(lis[i].innerHTML)
    temp = temp + n
    lis[i].innerHTML = temp
  return lis
  }
}
