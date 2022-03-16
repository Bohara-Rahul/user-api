const url = 'https://randomuser.me/api/'

// variables
const btn = document.querySelector('#btn')
const img = document.querySelector('.user-img')
const value = document.querySelector('.user-name')
const email = document.querySelector('.user-email')
const phone = document.querySelector('.user-phone')

// when the page loads
window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)

async function getUser() {
    const response = await fetch(url)
    const data = await response.json()
    const person = data.results[0]
    const { phone, email } = person
    const { large: image } = person.picture
    const { first, last } = person.name
    return {
        phone, 
        email, 
        image, 
        name: `${first} ${last}`
    }
}

function displayUser(person) {
    img.src = person.image
    value.textContent = person.name
    email.textContent = person.email
    phone.textContent = person.phone
}

async function showUser(){
    // get user
    const person = await getUser()

    // display user
    displayUser(person)
}