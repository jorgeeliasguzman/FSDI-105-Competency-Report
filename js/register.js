var salon={
    name: `The Fashion Pet`,
    phone: `555-555-5555`,
    address:{
        street:`University`,
        number:`187-K9`
    },
    hours:{
        open:`9:00 am`,
        close:`5:00 pm`
    },
    pets:[]
}
var {name,phone,address:{street,number},hours:{open,close}}=salon;

function displayInfo(){
    document.getElementById(`information`).innerHTML=`
    <p>${name}, ${street} ${number} </p>
    <p>It is open from ${open} to ${close} </p>
    `;
}


displayInfo();
var c=0;
//create the constructor
class Pet{
    constructor(name,type,age,breed,gender,service,owner,contactPhone){
        this.name=name;
        this.type=type;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.contactPhone=contactPhone;
        this.price=0;
        this.id=c++;
    }
}

// create the register funtion
var txtName=$('#petName');
var txtType=$('##type');
var txtAge=$('#petAge');
var txtBreed=$('#petBreed');
var txtGender=$('#petGender');
var txtService=$('#petService');
var txtOwner=$('#ownerName');
var txtPhone=$('#contactPhone');

function register(){
    var thePet = new Pet(txtName.val(),txtType.val(),txtAge.val(),txtBreed.val(),txtGender.val(),txtService.val(),txtOwner.val(),txtPhone.val());
    if(txtName.val()=="" || txtService.val()==""){
        $("#alert-box").removeClass("hidden");
        $("#alert-box").addClass("alert-danger");
        $("#alert-box").text("Add the required information");
        setTimeout(function(){
            $("#alert-box").addClass("hidden");
            $("#alert-box").removeClass("alert-danger");
        },1000);
    }else{    
        console.log(thePet)
        salon.pets.push(thePet);
        clearInputs();
        displayTable(thePet);
        $("#alert-box").removeClass("hidden");
        $("#alert-box").text("The register was successful");
        setTimeout(function(){
            $("#alert-box").addClass("hidden");
        },1000);
        //display the obj on the HTML
    }
}


//function displayTable(aPet){
//    if(aPet.service=="full"){
//        aPet.price=40;
//    }else if(aPet.service=="shower"){
//        aPet.price=30;
//    }else if(aPet.service=="nails"){
//        aPet.price=10;
//    }else if(aPet.service=="hair"){
//        aPet.price=20;
//    }
//    var icon="";
//    if(aPet.type=="dog"){
//        icon="🐕";
//    }else if(aPet.type=="cat"){
//        icon="🐈";
//    }else if(aPet.type=="snake"){
//        icon="🐍";
//    }else{
//        icon="👽";
//    }
//    var div=document.getElementById('types');
//    div.innerHTML=`<p>🐕 =1 🐈 =1 🐍=1 👽=1 </p>`;
//        tmp=`<div id="${aPet.id}" class="pet">
//            <h3 class="pet-name"> Name: ${aPet.name} <button onclick="deletePet(${aPet.id})">🗑️</button></h3>
//            <p> Type: ${icon}</p>
//            <p> Age: ${aPet.age}<p>
//            <p> Breed: ${aPet.breed},<p>
//            <p> Gender: ${aPet.gender},<p>
//            <p> Service: ${aPet.service},<p>
//            <p> Price: ${aPet.price},<p>            
//            <p> Owner: ${aPet.owner},<p>
//            <p> Phone: ${aPet.contactPhone},<p> 
//        </div>       
//        `;
//    document.getElementById('pets').innerHTML+=tmp;
//    profitCalculation();
//}

function displayTable(aPet){
    if(aPet.service=="full"){
        aPet.price=40;
    }else if(aPet.service=="shower"){
        aPet.price=30;
    }else if(aPet.service=="nails"){
        aPet.price=10;
    }else if(aPet.service=="hair"){
        aPet.price=20;
    }
    var icon="";
    if(aPet.type=="dog"){
        icon="🐕";
    }else if(aPet.type=="cat"){
        icon="🐈";
    }else if(aPet.type=="snake"){
        icon="🐍";
    }else{
        icon="👽";
    }
    //create the row
    var row=`
    <tr>
        <td>${aPets.name}</td>
        <td>${aPets.age}</td>
        <td>${aPets.gender}</td>
        <td>${aPets.breed}</td>
        <td>${icon}</td>
        <td>${aPets.service}</td>
        <td>${aPets.price}</td>
        <td>${aPets.owner}</td>
        <td>${aPets.contactPhone}</td>
        <button class="btn btn-danger">Delete</button> </td>
    </tr>`
    //append the row to the table
    $('#petTable').append(row);
    profitCalculation();
}

function clearInputs(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}
profitCalculation();
function profitCalculation(){
    var sum=0;
    for(var i=0;i<salon.pets.length;i++){
        sum=sum+salon.pets[i].price;
    }
    document.getElementById(`profits`).innerHTML=`Profits=$${sum}`;
    // Challenge: Use the forEach to calculate the profits.
}

function deletePet(petId){
    console.log("delele pet " + petId);
    //    delete the card from the html
    var card=$('#'+petId);
    var indexDelete;
    for(var i=0;i<salon.pets.length;i++){
        if(salon.pets[i].id===petId){
            indexDelete=i;
            break;
        }

    }
    console.log(indexDelete);
    //remove the pet from the array
    salon.pets.splice(indexDelete,1);
    //remove from HTML
    card.remove();
    profitCalculation();
}

function searchPet(){
    var ss=$('#search').val();
    console.log(ss);
    salon.pets.forEach(pet=>{
        if(pet.name.toLowerCase().includes(ss.toLowerCase())||
        pet.service.toLowerCase().includes(ss.toLowerCase())){
            $('#'+pet.id).removeClass('unactive');
            // $("#search").val("");
        }else{
            $('#'+pet.id).addClass('unactive');
        }
    });

}
function init(){
    console.log("init");
    var scooby= new Pet("Scooby", "Dog", 50,"Dane","Male","hair","Shaggy","555-555-5555");
    var speedy= new Pet("Speedy", "Dog", 80,"Mixed","Male","full","Bugs","555-555-5556");
    salon.pets.push(scooby);
    salon.pets.push(speedy);
    displayTable(scooby);
    displayTable(speedy);
    profitCalculation();
    //hook events
    $('#register-btn').click(register);
    $('#search-btn').click(searchPet);
    $('#search').keypress(function(e){
        if(e.key=="Enter"){
            searchPet();
        }
    });
    $('#search').on('keyup',searchPet);
}
window.onload=init;

function salonPetCounter(){
    document.getElementById(salon.pets).innerHTML+=tmp;
}

function typeCalculation(){
    var div=document.getElementById('types');
    div.innerHTML='<p> 🐕 🐈 🐍 </p>;'
}
