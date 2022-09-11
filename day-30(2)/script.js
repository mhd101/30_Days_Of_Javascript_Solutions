const first_name_input = document.querySelector('#first-name')
const last_name_input = document.querySelector('#last-name')
const email_input = document.querySelector('#email-id')
const password_input = document.querySelector('#pass-word')
const telephone_input = document.querySelector('#tele-phone')
const bio_input = document.querySelector('#your-bio')
const submit_button = document.querySelector('#submit')

// First Name Validation
first_name_input.addEventListener('keyup', () => {
        const pattern = /^[a-zA-Z0-9]{3,16}$/g
        const input_value = first_name_input.value
        const firstname_error = document.querySelector('.firstname-error')
        firstname_error.style.textAlign = 'center'
        firstname_error.style.fontWeight = 'bold'
        firstname_error.style.color = 'red'

        
        const firstname = document.querySelector('.firstname')

        // Condition Check
        if(input_value.search(pattern) == '-1'){
            firstname_error.style.display = 'block'
            firstname.classList.add('error')
            
        } else {
            firstname_error.style.display = 'none'
            firstname.classList.remove('error')
            firstname.classList.add('success')
        }
})

// Last Name Validation
last_name_input.addEventListener('keyup', () => {
    const pattern = /^[a-zA-Z0-9]{3,16}$/g
    const input_value = last_name_input.value
    const lastname_error = document.querySelector('.lastname-error')
    lastname_error.style.textAlign = 'center'
    lastname_error.style.fontWeight = 'bold'
    lastname_error.style.color = 'red'

    
    const lastname = document.querySelector('.lastname')

    // Condition Check
    if(input_value.search(pattern) == '-1'){
        lastname_error.style.display = 'block'
        lastname.classList.add('error')
        
    } else {
        lastname_error.style.display = 'none'
        lastname.classList.remove('error')
        lastname.classList.add('success')
    }
})

// Email Validation
email_input.addEventListener('keyup', () => {
    const pattern = /[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]com/g
    const input_value = email_input.value
    const email_error = document.querySelector('.email-error')
    email_error.style.textAlign = 'center'
    email_error.style.fontWeight = 'bold'
    email_error.style.color = 'red'

    
    const email = document.querySelector('.email')

    // Condition Check
    if(input_value.search(pattern) == '-1'){
        email_error.style.display = 'block'
        email.classList.add('error')
        
    } else {
        email_error.style.display = 'none'
        email.classList.remove('error')
        email.classList.add('success')
    }
})

// Password Validation
password_input.addEventListener('keyup', () => {
    const pattern = /^[a-zA-Z0-9@_-]{6,20}$/g
    const input_value = password_input.value
    const password_error = document.querySelector('.password-error')
    password_error.style.textAlign = 'center'
    password_error.style.fontWeight = 'bold'
    password_error.style.color = 'red'

    
    const password = document.querySelector('.password')

    // Condition Check
    if(input_value.search(pattern) == '-1'){
        password_error.style.display = 'block'
        password.classList.add('error')
        
    } else {
        password_error.style.display = 'none'
        password.classList.remove('error')
        password.classList.add('success')

    }
})

// Telephone Validation
telephone_input.addEventListener('keyup', () => {
    const pattern = /^[0-9]{10}$/g
    const input_value = telephone_input.value
    const telephone_error = document.querySelector('.telephone-error')
    telephone_error.style.textAlign = 'center'
    telephone_error.style.fontWeight = 'bold'
    telephone_error.style.color = 'red'

    
    const telephone = document.querySelector('.telephone')

    // Condition Check
    if(input_value.search(pattern) == '-1'){
        telephone_error.style.display = 'block'
        telephone.classList.add('error')
        
    } else {
        telephone_error.style.display = 'none'
        telephone.classList.remove('error')
        telephone.classList.add('success')
    }
})

// Bio Validation
bio_input.addEventListener('keyup', () => {
    const pattern = /^[a-z-_.\s]{8,50}$/g
    const input_value = bio_input.value
    const bio_error = document.querySelector('.bio-error')
    bio_error.style.textAlign = 'center'
    bio_error.style.fontWeight = 'bold'
    bio_error.style.color = 'red'

    
    const bio = document.querySelector('.bio')

    // Condition Check
    if(input_value.search(pattern) == '-1'){
        bio_error.style.display = 'block'
        bio.classList.add('error')
        
    } else {
        bio_error.style.display = 'none'
        bio.classList.remove('error')
        bio.classList.add('success')
    }
})

// Submit Check
submit_button.addEventListener('click', () => {

    const input_div = Array.from(document.querySelectorAll('.input-div'))

    if(input_div[0].classList.contains('success') && input_div[1].classList.contains('success') && input_div[2].classList.contains('success') && input_div[3].classList.contains('success') && input_div[4].classList.contains('success') && input_div[5].classList.contains('success')){
        submit_button.style.backgroundColor = 'green'
    }

})

    
    

