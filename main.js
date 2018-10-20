document.getElementById(`content`).innerHTML = localStorage[`text`] || `Welcome to Notes\n \nThe quick brown fox jumps over the lazy dog`

setInterval(function () {
    localStorage[`text`] = document.getElementById(`content`).innerHTML
}, 1000)