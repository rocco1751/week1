const profileImage = document.querySelector("#profileImage")
const firstnamespan = document.querySelector("#firstname");
const agespan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

const isWizard = confirm("Are you a Wizard?");

if(isWizard === true){
    console.log("Welcome to  Hogwarts");
}
else {
profileImage.src = "images/image2.jpg";
firstnamespan.innerHTML = "Dudley Dursley";
agespan.innerHTML = 12;
statusSpan.innerHTML = "Muggle";
 }

 btnUpdateProfile.addEventListener("click", () =>{ 
    profileImage.src = "images/image3.jpg";
    firstnamespan.innerHTML = "Lara Crof"
    agespan.innerHTML = 25;
    statusSpan.innerHTML = "Tomb Raider"  


 })