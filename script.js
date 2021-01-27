const ValidName = false
const ValidLastName = false
const ValidEmail = false


const regForm = document.querySelector('#regForm');


regForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let firstName = e.currentTarget[0].value;
    let lastName = e.currentTarget.lastName.value;
    let email = e.currentTarget.email.value;

    let usersArray = []

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



    // Doesn't send the register form if statement below isn't true
    if(!(e.currentTarget['toc'].checked)) { // && this.ValidName == false && this.ValidLastName == false && this.ValidEmail == false
        alert("you must check the checkbox")
        return false
    } else if (this.ValidName && this.ValidLastName && this.ValidEmail){


        let user = {
            firstName: e.currentTarget.firstName.value,
            lastName: e.currentTarget.lastName.value,
            email: e.currentTarget.email.value,
            id: Math.floor(Math.random() * 10000)
        }
        usersArray.push(user)
        console.log(usersArray)

        console.log(user)

        let text = "";

        for (let i = 0; i < usersArray.length; i++) {
            nameText = usersArray[i].firstName + usersArray[i].lastName;
            emailText = usersArray[i].email
        }
        document.getElementById("user").innerHTML = nameText;
        document.getElementById("emailText").innerHTML = emailText;

        nameElement.value = ''
        lastNameElement.value = ''
        emailElement.value = ''
    }

})