<script>
var range = document.getElementById("nombre");
var output = document.getElementById("output");

output.innerHTML = ('00' + range.value).slice(-3);

range.oninput = function() {
  output.innerHTML = ('00' + this.value).slice(-3);
}

function updateRange(event) {
  var step = parseInt(range.getAttribute('step')) || 1;
  var value = parseInt(range.value);
  switch (event.keyCode) {
    case 37: // flèche gauche
      value -= step;
      break;
    case 39: // flèche droite
      value += step;
      break;
  }
  if (value < parseInt(range.min)) {
    value = parseInt(range.min);
  } else if (value > parseInt(range.max)) {
    value = parseInt(range.max);
  }
  range.value = value;
  output.innerHTML = ('00' + value).slice(-3);
}

range.addEventListener('keydown', updateRange);
</script>