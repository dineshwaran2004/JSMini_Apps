document.getElementById("button")
.addEventListener("click", function () {

  let name = document.getElementById("name_input").value;
  document.getElementById("name_output").innerHTML = name;

  let fileInput = document.getElementById("photoInput");
  let file = fileInput.files[0];

  if (file) {
    let img = document.getElementById("photoPreview");
    img.src = URL.createObjectURL(file);
  }

  let age = document.getElementById("age_input").value;
  document.getElementById("age_output").innerHTML = age;

  let phonenumber = document.getElementById("phoneNumber_input").value;
  document.getElementById("phoneNumber_output").innerHTML = phonenumber;

  let email = document.getElementById("email_input").value;
  document.getElementById("email_output").innerHTML = email;

  let Organization = document.getElementById("Organization_Name").value;
  document.getElementById("Organization_output").innerHTML = Organization;

});
