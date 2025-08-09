document.getElementById('alertBtn').onclick = function() {
  alert('You clicked the alert button!');
};

document.getElementById('moreBtn').onclick = function() {
  var extraInfo = document.getElementById('extraInfo');
  if (extraInfo.style.display === 'block') {
    extraInfo.style.display = 'none';
    this.textContent = 'Show More';
  } else {
    extraInfo.style.display = 'block';
    extraInfo.innerHTML = 
      '<b>More Info:</b> <br>' +
      'Web development lets you make your own websites.<br>' +
      'With basic HTML, CSS, and JavaScript, you can build simple, good-looking, and interactive pages for practice.';
    this.textContent = 'Hide Info';
  }
};
