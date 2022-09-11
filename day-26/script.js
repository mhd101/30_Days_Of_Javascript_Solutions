const country = document.querySelector('.countries')
const mainDiv = document.createElement('div')
mainDiv.style.display = 'grid'
mainDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto'
mainDiv.style.rowGap = '10px'
mainDiv.style.width = '80%'
mainDiv.style.rowGap = '40px'
mainDiv.style.justifyContent = 'space-evenly'
country.appendChild(mainDiv)

const sortedCountries = countries.sort(x => {
    const template = `<strong>${x}<strong>`
    const div = document.createElement('div')
    mainDiv.appendChild(div)
    div.innerHTML = template.toUpperCase()
    div.style.width = '150px'
    div.style.height = '150px'
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.background = 'url(map.jpg)'
    div.style.backgroundSize = 'cover'
    div.style.backgroundPosition = 'center center'
    div.style.color = 'white'
    div.style.boxShadow = 'inset 0 0 0 1000px rgba(13, 28, 77, 0.5)'
    div.style.borderRadius = '5px'
    div.style.textAlign = 'center'
})

const input = document.getElementById('input')

input.addEventListener('keyup', e => {

        const div = Array.from(document.querySelectorAll('.countries div div'))
        div.map(x => {
            const searchString = e.target.value.toUpperCase()
            if((x.textContent.includes(searchString))){
                x.style.display = 'flex'
            } else {
                x.style.display = 'none'
            }
        })
        
})




