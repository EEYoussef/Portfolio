// java script fro the hamburger action


  const toggle_Button =  document.getElementById('togglebutn');
  const navlist = document.getElementById('navlinks');
  toggle_Button.addEventListener('click',()=>{ 
    navlist.classList.toggle('active');
  })


  