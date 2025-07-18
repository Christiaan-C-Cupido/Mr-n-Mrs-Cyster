 const button = document.querySelector('.btn-RSVP');

  button.addEventListener('click', function () {
    window.open('https://www.google.com', '_blank');
  });

  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open('https://www.google.com', '_blank');
    }
  });