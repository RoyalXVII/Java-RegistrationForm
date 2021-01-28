const ValidName = false
const ValidLastName = false
const ValidEmail = false
let usersArray = []

const regForm = document.querySelector('#regForm');

regForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let firstName = e.currentTarget[0].value;
    let lastName = e.currentTarget.lastName.value;
    let email = e.currentTarget.email.value;

    let nameElement = document.getElementById("firstName")
    let lastNameElement = document.getElementById("lastName")
    let emailElement = document.getElementById("email")


    if(firstName.length > 1 && firstName.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) { 
        this.ValidName = true 
        nameElement.classList.remove("is-invalid")
    } else {
        this.ValidName = false
        nameElement.classList.add("is-invalid")
    }

    if(lastName.length > 1 && lastName.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) { 
        this.ValidLastName = true 
        lastNameElement.classList.remove("is-invalid")
    } else {
        this.ValidLLastName = false
        lastNameElement.classList.add("is-invalid")
    }

    if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) { 
        this.ValidEmail = true 
        emailElement.classList.remove("is-invalid")
    } else {
        this.ValidEmail = false
        emailElement.classList.add("is-invalid")
    }


    if(!(e.currentTarget['toc'].checked)) {
        alert("you must check the checkbox")
        return false
    } else if (this.ValidName && this.ValidLastName && this.ValidEmail){ 


        let user = {
            firstName: e.currentTarget.firstName.value,
            lastName: e.currentTarget.lastName.value,
            email: e.currentTarget.email.value,
            id: Math.floor(Math.random() * 1000)
        }

        usersArray.push(user)
        console.log(usersArray)

        // Creates user in list
        let createUsername = document.createElement("div")
        createUsername.classList.add("container");
        createUsername.classList.add("font-weight-bold");
        createUsername.innerHTML = usersArray[usersArray.length - 1].firstName + usersArray[usersArray.length - 1].lastName
        document.body.appendChild(createUsername);

        let createEmail = document.createElement("div")
        createEmail.classList.add("container");
        createEmail.classList.add("custom-font-size");
        createEmail.innerHTML = usersArray[usersArray.length - 1].email
        document.body.appendChild(createEmail);

        // Resets input value
        nameElement.value = ''
        lastNameElement.value = ''
        emailElement.value = ''
    }

})
