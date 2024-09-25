// Toggle nav
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// Promp Name
function replaceName(){
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("user").innerHTML = name
}
replaceName();


// Validasi form
function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-birth-date").innerHTML = "";
    document.getElementById("error-gender").innerHTML = "";
    document.getElementById("error-messages").innerHTML = "";

    // memeriksa kondisi jika salah satu kondisi true, maka akan menjalankan blok kode selanjutnya
    switch (true) { 
        case (name == ""):
            document.getElementById("error-name").innerHTML = "*Nama tidak Boleh kosong";
            return false;
        case (birthDate == ""):
            document.getElementById("error-birth-date").innerHTML = "*Isi Tanggal Lahir";
            return false;
        case (gender == ""):
            document.getElementById("error-gender").innerHTML = "*Pilih Salah Satu Gender";
            return false;
        case (messages == ""):
            document.getElementById("error-messages").innerHTML = "*Pesan Harap Di isi";
            return false;
    }

    // ketika isi form sudah benar maka data akan reset
    document.forms["message-form"].reset();

    setSenderUI(name, birthDate, gender, messages);
    return false
}

// data output dari form
function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

// slidshow dimulai dari gambar 1
var slideIndex = 1;
showDivs(slideIndex);

// function plusDivs(n) digunakan untuk mengubah slideIndex dan menampilkan gambar berikutnya atau sebelumnya
function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    // Kondisi if dan else if digunakan untuk memastikan bahwa ketika slideIndex melampaui jumlah gambar, slideshow akan kembali ke gambar pertama. 
    // Sebaliknya, jika slideIndex lebih kecil dari 1, slideshow akan berpindah ke gambar terakhir.
    if (n > imgList.length) {slideIndex = 1}
    else if(n < 1) {slideIndex =imgList.length};

    // for digunakan untuk menyembunyikan semua gambar dengan mengatur style.display menjadi "none".
    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display= "none";
    }
    // setelah semua gambar disembunyikan, gambar yang sesuai dengan slideIndex ditampilkan dengan mengubah properti display menjadi "block".
    imgList[slideIndex -1].style.display = "block";
}

// set waktu auto run
setInterval(() => {
    plusDivs(1);
}, 2000)