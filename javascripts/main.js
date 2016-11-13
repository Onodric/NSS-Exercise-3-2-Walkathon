"use strict";
// The donor information should be stored as JS objects that contain their content type as keys and the submitted information as the value. `{name: "John Donut", pledge: 70}`
var Donate = (function(oldDonate){
// the whole form:
  const wholeForm = document.getElementById("dataSubmit");
// buttons:
  const cancel = document.getElementById("btnClear");
  const donate = document.getElementById("btnSubmit");
  const conf = document.getElementById("confirm");
  const another = document.getElementById("another");
// form element locations:
  const amount = document.getElementById("donateAmount");
  const perLap = document.getElementById("donatePerLap");
  const lump = document.getElementById("donateLump");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const address_1 = document.getElementById("address1");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const zip = document.getElementById("zip");
  const email = document.getElementById("mail");
  const phone = document.getElementById("tel-num");
  const ccNum = document.getElementById("ccNum");
  const ccExp = document.getElementById("ccExp");
  const cvvNum = document.getElementById("cvvNum");
// table element locations:
  const doneski = document.getElementById("doneski");
  const userTable = document.getElementsByClassName("tableData");
  const dontype = document.getElementById("userDonType");
  const donAmt = document.getElementById("userDonAmt");
  const userName = document.getElementById("userName");
  const userAddress = document.getElementById("userAddress");
  const userCity = document.getElementById("userCity");
  const userState = document.getElementById("userState");
  const userZip = document.getElementById("userZip");
  const userMail = document.getElementById("userEmail");
  const userPhone = document.getElementById("userTelephone");
  const userCcNum = document.getElementById("userCcNum");
  const userCcExp = document.getElementById("userCcExp");
// Set up object with information
  const allUserData = [];
  let userData = {};

//   function clearTable (el, ind, arr) {
// console.log("clearTable called: ", el, ind, arr);
//     el.innerHTML = "User Information";     
//   }

  function clearPage (e) {
    wholeForm.reset();
    userData = {};
    // userTable.map(clearTable);
    conf.classList.add('hidden');
    cancel.innerHTML = "cancel";
  }

// Event Listeners!
  cancel.addEventListener("click", function(e){
    clearPage (e);
  });

  donate.addEventListener("click", function(e){
    userData.type = perLap.checked ? "Per Lap Completed" : "Lump Sum";
    userData.amount = amount.value;
    userData.firstName = firstName.value;
    userData.lastName = lastName.value;
    userData.address1 = address_1.value;
    userData.city = city.value;
    userData.state = state.value;
    userData.zip = zip.value;
    userData.mail = email.value;
    userData.telephone = phone.value;
    userData.ccNum = ccNum.value;
    userData.ccExp = ccExp.value;
    userData.cvvNum = cvvNum.value;
    dontype.innerHTML = userData.type;
    donAmt.innerHTML = userData.amount;
    userName.innerHTML = userData.firstName + " " + userData.lastName;
    userAddress.innerHTML = userData.address1;
    userCity.innerHTML = userData.city;
    userState.innerHTML = userData.state;
    userZip.innerHTML = userData.zip;
    userMail.innerHTML = userData.mail;
    userPhone.innerHTML = userData.telephone;
    userCcNum.innerHTML = userData.ccNum;
    userCcExp.innerHTML = userData.ccExp;
    conf.classList.toggle('hidden');
  });

  conf.addEventListener("click", function(e){
    allUserData.push(userData);
    conf.classList.toggle("hidden");
    doneski.classList.toggle("hidden");
    cancel.innerHTML = "Another Donation?";
console.log("allUserData: ", allUserData);
  });

})(Donate || {});