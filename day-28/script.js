// Creating Date Function
const date = () => {
    let today = new Date();
    let month = today.toLocaleString('default', { month: 'short' });
    let date = today.getDate();
    let year = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    
    (date > 10) ? `0${date}` : date;
    (hours > 10) ? `0${hours}` : hours;
    (minutes > 10) ? `0${minutes}` : minutes;

    return `${month.toUpperCase()} ${date}, ${year} ${hours}:${minutes}`
}

// Selecting Wrapper Class to append players_Container
const wrapper = document.querySelector('.wrapper')

// Creating Container with className 'players_Container'
const players_Container = document.createElement('div')
wrapper.appendChild(players_Container)

// Adding style to players_Container
players_Container.className = 'Players-Container'
players_Container.style.width = '50%'

// Creating Default Array of Players
const playersObjectArray = [
    {
        firstName: 'MARTHA',
        lastName: 'YOHANES',
        date: 'AUG 20, 2022 10:25',
        country: 'Finland',
        score: 85
    },
    {
        firstName: 'DAVID',
        lastName: 'SMITH',
        date: 'AUG 15, 2022 5:05',
        country: 'SWEDEN',
        score: 70
    },
    {
        firstName: 'ASABENEH',
        lastName: 'YETAYEH',
        date: 'AUG 12, 2022 8:59',
        country: 'Finland',
        score: 75
    }
]

// Sorting the Default Player Array
const sortPlayersObjectArray = playersObjectArray.sort((a, b) => {
    if (a.score < b.score) return 1
    if (a.score > b.score) return -1
    return 0
})

// Looping through sorted Player Array
sortPlayersObjectArray.forEach(x => {

    // Creating Div for default Player Array
    const default_Players_Div = document.createElement('div')
    players_Container.appendChild(default_Players_Div)

    // Styling default players div
    default_Players_Div.style.display = 'flex'
    default_Players_Div.style.flexDirection = 'column'
    default_Players_Div.style.margin = '20px 0'

    const template =
        `
    <div class="player ${x.firstName}">
        <div>
            <p>${x.firstName.toUpperCase()} ${x.lastName.toUpperCase()}<p>
            <p class="date">${x.date}</p>
        </div>
        <div>
            <p>${x.country.toUpperCase()}</p>
        </div>
        <div class="${x.firstName.toLowerCase()}">
            <p>${x.score}</p>
        </div>
    </div>
    `

    default_Players_Div.innerHTML = template

    // Creating Action Div 
    const action_div = document.createElement('div')
    // Creating Delete Button
    const delete_btn = document.createElement('p')
    // Creating Plus Button
    const add_btn = document.createElement('p')
    // Creating Minus Button
    const minus_btn = document.createElement('p')

    // Selecting Unique Player Div
    const unique_Player = document.querySelector(`.${x.firstName}`)

    // unique player Appending Three Childs (delete_btn, add_btn, minus_btn)
    unique_Player.appendChild(action_div)
    action_div.appendChild(delete_btn)
    action_div.appendChild(add_btn)
    action_div.appendChild(minus_btn)

    // Adding class to all three childs
    action_div.className = 'actions'
    delete_btn.className = 'delete'
    add_btn.className = 'plus'
    minus_btn.className = 'minus'

    // Adding content in all three childs
    delete_btn.textContent = '❌'
    add_btn.textContent = '+5'
    minus_btn.textContent = '-5'

    // Buttons Actions

    // delete button 
    delete_btn.addEventListener('click', () => {
        unique_Player.style.display = 'none'
    })

    // add button
    add_btn.addEventListener('click', () => {
        x.score += 5
        const score_Div = document.querySelector(`.${x.firstName.toLowerCase()} p`)
        score_Div.textContent = x.score

    })

    // minus button
    minus_btn.addEventListener('click', () => {
        x.score += -5
        const score_Div = document.querySelector(`.${x.firstName.toLowerCase()} p`)
        score_Div.textContent = x.score

    })

})

// Add Player Button 

// Selecting Add player button
const button = document.querySelector('button')


// Adding click event listener to selected button
button.addEventListener('click', () => {

    // Input Validation
    const input = Array.from(document.querySelectorAll('input'))
    if (input[0].value.length == 0 || input[1].value.length == 0 || input[2].value.length == 0 || input[3].value.length == 0) {
        const error = document.querySelector('.error')
        error.style.display = 'block'
    } else {
        const error = document.querySelector('.error')
        error.style.display = 'none'

        const player = {
            firstName: input[0].value,
            lastName: input[1].value,
            date: date(),
            country: input[2].value,
            score: parseInt(input[3].value)
        }

        // Pushing New Input in players object
        playersObjectArray.push(player)

        // Sorting New Input Data
        const sortedPlayers = playersObjectArray.sort((a, b) => {
            if (a.score < b.score) return 1
            if (a.score > b.score) return -1
            return 0
        })

        // Removing Previous Data
        const previous_Players = document.querySelector('.Players-Container')
        const all_Divs = Array.from(document.querySelectorAll('.Players-Container div'))
        all_Divs.forEach(div => {
            previous_Players.remove(div)
        })

        // Creating Container with className 'players_Container'
        const players_Container = document.createElement('div')
        wrapper.appendChild(players_Container)

        // Adding style to players_Container
        players_Container.className = 'Players-Container'
        players_Container.style.width = '50%'

        sortedPlayers.forEach(x => {

            // Creating Div for default Player Array
            const default_Players_Div = document.createElement('div')
            players_Container.appendChild(default_Players_Div)

            // Styling default players div
            default_Players_Div.style.display = 'flex'
            default_Players_Div.style.flexDirection = 'column'
            default_Players_Div.style.margin = '20px 0'

            const template =
            `
             <div class="player ${x.firstName}">
                <div>
                    <p>${x.firstName.toUpperCase()} ${x.lastName.toUpperCase()}<p>
                    <p class="date">${x.date}</p>
                </div>
                <div>
                    <p>${x.country.toUpperCase()}</p>
                </div>
                <div class="${x.firstName.toLowerCase()}">
                    <p>${x.score}</p>
                </div>
            </div>
            `

            default_Players_Div.innerHTML = template

            // Creating Action Div 
            const action_div = document.createElement('div')
            // Creating Delete Button
            const delete_btn = document.createElement('p')
            // Creating Plus Button
            const add_btn = document.createElement('p')
            // Creating Minus Button
            const minus_btn = document.createElement('p')

            // Selecting Unique Player Div
            const unique_Player = document.querySelector(`.${x.firstName}`)

            // unique player Appending Three Childs (delete_btn, add_btn, minus_btn)
            unique_Player.appendChild(action_div)
            action_div.appendChild(delete_btn)
            action_div.appendChild(add_btn)
            action_div.appendChild(minus_btn)

            // Adding class to all three childs
            action_div.className = 'actions'
            delete_btn.className = 'delete'
            add_btn.className = 'plus'
            minus_btn.className = 'minus'

            // Adding content in all three childs
            delete_btn.textContent = '❌'
            add_btn.textContent = '+5'
            minus_btn.textContent = '-5'

            // Buttons Actions

            // delete button 
            delete_btn.addEventListener('click', () => {
                unique_Player.style.display = 'none'
            })

            // add button
            add_btn.addEventListener('click', () => {
                x.score += 5
                const score_Div = document.querySelector(`.${x.firstName.toLowerCase()} p`)
                score_Div.textContent = x.score

            })

            // minus button
            minus_btn.addEventListener('click', () => {
                x.score += -5
                const score_Div = document.querySelector(`.${x.firstName.toLowerCase()} p`)
                score_Div.textContent = x.score

            })

        })
    }
})


// Adding Style to class 'wrapper'
wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.alignItems = 'center'
wrapper.style.justifyContent = 'center'

/* End of Code */
