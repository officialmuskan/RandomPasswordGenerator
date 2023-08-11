const lengthSlider = document.querySelector(".pass-length input")
const options = document.querySelectorAll("li input");
const passwordinput = document.querySelector(".input input")
const copyicon = document.querySelector(".input i")
generatebtn = document.querySelector(".generate")

const characters = { 
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

function generateRandomPassword() {   
    const passLength = lengthSlider.value;
    
    let password = '';
    let randompasword = '';
    options.forEach(option => {
        if(option.checked){//check for what have been checked
            password += characters[option.id]
        }
    })
    // console.log(password) //jonsa check hoga usko combine krega
    
    for (let i = 0; i < passLength; i++) {
        console.log(Math.random())
        console.log(Math.floor(Math.random() * password.length))

        
        let randomIndex = password[Math.floor(Math.random() * password.length)];   
        console.log(randomIndex) 
        randompasword += randomIndex;
    }
    passwordinput.value = randompasword;

}

function updateSlider(){
    document.querySelector(".pass-length span").innerText = lengthSlider.value
    generateRandomPassword()
}

updateSlider();

function copypass(){
    if(passwordinput.value){
        navigator.clipboard.writeText(passwordinput.value)    
    }
}

copyicon.addEventListener("click", copypass);
lengthSlider.addEventListener("input", updateSlider);
generatebtn.addEventListener("click", generateRandomPassword)
