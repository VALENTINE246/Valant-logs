
function myFunction(x) {
  x.classList.toggle("change");
  var navigation = x.nextElementSibling;
  navigation.style.display = x.classList.contains("change") ? "block" : "none";
  document.addEventListener("click", function(event) {
    if (!x.contains(event.target) && !navigation.contains(event.target)) {
      x.classList.remove("change");
      navigation.style.display = "none";
    }
  });
}

const menuToggle = document.getElementById('menu-toggle')

menuToggle.addEventListener('click', function() {  
  document.getElementById('nav-menu').classList.toggle('active');  
});  

function hideSidebar() {
  document.getElementById('nav-menu').classList.toggle('active');  

}

const anim = document.getElementById('anim-cover')
window.onload = () => {
  setTimeout(function() {
    anim.style.display = 'none'
  },1500)
}






