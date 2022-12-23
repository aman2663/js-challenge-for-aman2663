var sr = 1;
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var username = document.getElementById("username");
var email = document.getElementById("email");
var address = document.getElementById("address");
var phone = document.getElementById("phone");
var website = document.getElementById("website");
var companyname = document.getElementById("company_name");
var table = document.getElementById("myTable");
var table = document.getElementById("myTable");
var cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8;

function insertcell() {
  var row = table.insertRow(-1);

  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  cell4 = row.insertCell(3);
  cell5 = row.insertCell(4);
  cell6 = row.insertCell(5);
  cell7 = row.insertCell(6);
  cell8 = row.insertCell(7);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.map((item) => {
      sr = item.id;

      insertcell();
      cell1.innerHTML = sr;
      cell2.innerHTML = item.name;
      cell3.innerHTML = item.username;
      cell4.innerHTML = item.email;
      cell5.innerHTML =
        item.address.street +
        ", " +
        item.address.suite +
        ", " +
        item.address.city +
        ", " +
        item.address.zipcode;
      cell6.innerHTML = item.phone;
      cell7.innerHTML = item.website;
      cell8.innerHTML = item.company.name;
      sr++;
    });
  })
  .catch((err) => alert("Something went wrong while fetching the users"));

var button = document.getElementById("button");
button.addEventListener("click", formdata);

function formdata() {
  if (
    firstname.value === "" ||
    firstname.value.length < 3 ||
    lastname.value === "" ||
    lastname.value.length < 3 ||
    username.value === "" ||
    email.value === "" ||
    address.value === ""
  )
    return;

  insertcell();

  cell1.innerHTML = sr;
  cell2.innerHTML = firstname.value + " " + lastname.value;
  cell3.innerHTML = username.value;
  cell4.innerHTML = email.value;
  cell5.innerHTML = address.value;
  cell6.innerHTML = phone.value;
  cell7.innerHTML = website.value;
  cell8.innerHTML = companyname.value;
  sr++;

  firstname.value = "";
  lastname.value = "";
  username.value = "";
  email.value = "";
  address.value = "";
  phone.value = "";
  website.value = "";
  companyname.value = "";
}
