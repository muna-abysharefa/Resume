
function calculatewindow(){
  var clientwidth = window.innerWidth;

  if(clientwidth > 990){
      document.querySelector('.desktop-nav-group').style.display ='flex';
      document.querySelector('.mobile-nav-group').style.display='none';

  }
  else{
    document.querySelector('.desktop-nav-group').style.display='none';
    document.querySelector('.mobile-nav-group').style.display='flex';
  }
}

calculatewindow();

window.addEventListener('resize', calculatewindow);

var asideShade = document.querySelector('.aside-shade');
asideShade.addEventListener('click', handleToggleMenu)


var sideNavToggle = document.querySelectorAll('.side-nav-toggle');
for (let el of sideNavToggle){
    el.addEventListener('click', handleToggleMenu)
}

function handleToggleMenu(){
    if(document.querySelector('aside').classList.contains('show'))
    {

        document.querySelector('aside').classList.remove('show')
        document.body.classList.remove('no-scroll');
        document.querySelector('.aside-shade').classList.remove('show');
    }
    else{
        document.querySelector('aside').classList.add('show');
        document.body.classList.add('no-scroll');
        document.querySelector('.aside-shade').classList.add('show');
    }
}



