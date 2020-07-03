function outputs(ev) {
    document.getElementById('output').value = ev.target.value
}

document.getElementById('volume').addEventListener('input', outputs);