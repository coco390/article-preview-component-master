
//Adding button hover state
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.share-image');

    button.addEventListener('mouseover', () => {
      button.querySelector('img').style.filter = 'brightness(0) invert(1)';
      button.style.backgroundColor = '#6E8098';
    });
//Resetting the state
    button.addEventListener('mouseout', () => {
      button.querySelector('img').style.filter = 'invert(0%)';
      button.style.backgroundColor = '';
    });
  });


//Adding mouse click event listener
