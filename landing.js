
let CountButtonHomeClicks = 1
 var links = document.getElementById("three-lines");

 links.addEventListener('click', event => {
   let link = document.getElementById('links')
    CountButtonHomeClicks += 1
    if (CountButtonHomeClicks % 2 == 0) {
      link.style.display = 'block'
      let bars = document.getElementsByClassName('fa-bars')[0]
      bars.classList.remove('fa-bars')
      bars.classList.add('fa-x')

   } else {
      let bar = document.getElementsByClassName('fa-x')[0]
      bar.classList.remove('fa-x')
      bar.classList.add('fa-bars')
      link.style.display = 'none'
   }

})


// $("button").click(function(){
//   $("div").animate({left: '250px'});
// });

//  let cards = document.getElementsByClassName('cards')

window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = window.scrollY;
  const backToTop = document.getElementById('back')

  console.log(Math.ceil(scrolled))
  if(Math.ceil(scrolled) > height - 100) {
     backToTop.style.backgroundColor ='#1597BB'
     console.log('true')
    } else {
      backToTop.style.backgroundColor = null
    }
 })
