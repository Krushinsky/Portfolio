window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

  let github = document.querySelector('.github');
  github.addEventListener('click', ()=>{
    let url = 'https://github.com/Krushinsky?tab=repositories';
    window.open(url, '_blank');
    
  })