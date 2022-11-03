function getFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fact').innerHTML = data.fact;
        })
}
window.onload = getFact();