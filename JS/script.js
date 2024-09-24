const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});


function replaceName(){
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("user").innerHTML = name
}
replaceName();


function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-birth-date").innerHTML = "";
    document.getElementById("error-gender").innerHTML = "";
    document.getElementById("error-messages").innerHTML = "";

    if (name == ""){
        document.getElementById("error-name").innerHTML = "*Nama tidak Boleh kosong";     
        return false;
    }else if( birthDate == ""){
        document.getElementById("error-birth-date").innerHTML = "*Isi Tanggal Lahir";
        return false;
    }else if( gender == ""){
        document.getElementById("error-gender").innerHTML = "*Pilih Salah Satu Gender";
        return false;
    }else if(messages == ""){
        document.getElementById("error-messages").innerHTML = "*Pesan Harap Di isi";
        return false;
    }

    // ketika isi form sudah benar maka data akan reset
    document.forms["message-form"].reset();

    setSenderUI(name, birthDate, gender, messages);
    return false
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) {slideIndex = 1}
    else if(n < 1) {slideIndex =imgList.length};

    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display= "none";
    }

    imgList[slideIndex -1].style.display = "block";
}
setInterval(() => {
    plusDivs(1);
}, 2000)