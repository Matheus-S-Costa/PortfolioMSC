const inputContainer = document.querySelector('.input')
const rootElement = document.documentElement

const lightTheme = {
    '--background-color': '#ededed',
    '--primary-color': '#f1f1f1',
    '--secondary-color': '#f0f0f0',
    '--menu-color': '#b4b4b4',
    '--white-color': '#111111',
    '--background': 'url(../images/main-light-bg.svg)',
    '.github': 'assets/images/github-dark.png',
}
const darkTheme = {
    '--background-color': '#121214',
    '--primary-color': '#0A1128',
    '--secondary-color': '#1f1f23',
    '--menu-color': '#0a0a0b',
    '--light-gray-color': 'silver',
    '--white-color': '#ffffff',
    '--background': 'url(../images/main-bgg.svg)',
    '.github': 'assets/images/github-logo.png',
}

inputContainer.addEventListener('change', function() {
  const isChecked = inputContainer.checked
  if (isChecked) {
    changeTheme(lightTheme)
    save(lightTheme)
  } else {
    changeTheme(darkTheme)
    save(darkTheme)
  }

})

function changeTheme(theme) {
    for (let prop in theme){
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}