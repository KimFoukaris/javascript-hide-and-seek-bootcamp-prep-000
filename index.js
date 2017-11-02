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
    var temp = parseInt(lis[i].innerHTML) + parseInt(n)
    lis[i].innerHTML = temp
  }
  return lis
}

function deepestChild() {
  const children = document.getElementById('grand-node').querySelectorAll('div')
  var temp = ""
    for (let i=o; i<children.length; i++) {
      if (children[i] != null)
        var temp = children[i].innerHTML
    }
}
