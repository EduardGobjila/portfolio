
let CountButtonHomeClicks = 0
 var links = document.getElementById("three-lines");
 links.addEventListener('click', event => {
   let link = document.getElementById('links')
   CountButtonHomeClicks += 1
   if (CountButtonHomeClicks % 2 == 0) {
    link.style.display = 'block'
    let bars = document.getElementsByClassName('fa-bars')
    bars = ''
    console.log(bars)
   } else {
    link.style.display = 'none'
   }

})


{/* <i class="fa-solid fa-x"></i> */}
