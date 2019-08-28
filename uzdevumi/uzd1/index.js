function palielinat() {
    document.getElementById("vertiba").value = (esosaVertiba() + 1)
}

function samazinat() {
    document.getElementById("vertiba").value = (esosaVertiba() - 1)
    }

function esosaVertiba() {
    return parseInt(document.getElementById("vertiba").value)
}