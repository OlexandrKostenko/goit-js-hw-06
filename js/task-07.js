const input = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

input.oninput = function() {
    textEl.style.fontSize = input.value +'px';
}