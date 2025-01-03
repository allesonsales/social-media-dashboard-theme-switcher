const btnSwitch = document.getElementById ('btnSwitch')

function switchTheme() {
    document.body.classList.toggle ('dark-theme')
    document.body.classList.toggle ('light-theme')
    if (btnSwitch) {
        btnSwitch.style.flexDirection =
        btnSwitch.style.flexDirection === 'row-reverse' ? 'row' : 'row-reverse'
    } else {
        console.log ('switch não encontrado')
    }
}