

const myform = document.getElementById("myform");
const inpfile = document.getElementById("inpfile");
myform.addEventListener("submit" , e=> {
    e.preventDefault();
});

const endpoint = "upload.php";
const formdata = new FormData();

console.log(inpfile.files);
formdata.append("inpfile",inpfile.files[0]);