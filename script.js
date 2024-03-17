
  const firebaseConfig =   {
    apiKey:"AIzaSyD07Qudb_Zg-5JQGIGTNniHBo53Ngqi3Y8",
    authDomain: "payment-form-efbae.firebaseapp.com",
    projectId: "payment-form-efbae",
    storageBucket: "payment-form-efbae.appspot.com",
    messagingSenderId: "1002748677441",
    appId: "1:1002748677441:web:d38928d8189a176011a5c0",
    measurementId: "G-JW4NT496N8"
    };
//initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var paymentFormDB = firebase.database().ref("paymentForm");

document.getElementById("paymentForm").addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getElementVal("name");
  var gender = getElementVal("gender");
  var address = getElementVal("address");
  var email = getElementVal("email");
  var pincode = getElementVal("pincode");
  var card_type = getElementVal("card_type");
  var card_number = getElementVal("card_number");
  var exp_date = getElementVal("exp_date");
  var cvv= getElementVal("cvv");

  saveMessages(name, gender, address, pincode, card_type, card_number, exp_date,cvv);

  //Enabled Alert
  document.querySelector(".alert").style.display = "block";

  //Remove alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //Reset the form
  document.getElementById("paymentForm").reset();
}

const saveMessages = (name, gender, address, email, pincode, card_type, card_number, exp_date, cvv) => {
  var newPaymentForm = paymentFormDB.push();

  newPaymentForm.set({
    name:name,
    gender:gender,
    address:address,
    email:email,
    pincode:pincode,
    card_type:card_type,
    card_number:card_number,
    exp_date:exp_date,
    cvv:cvv,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};