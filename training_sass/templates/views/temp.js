 // Function to build and send Segment identify call
 function sendIdentifyCall(userId, traits) {
     analytics.identify(userId, traits);
 }
 // Function to handle button click event
 function handleIdentifyClick() {
     console. log("segment form test");
     const first_name = document.getElementById('FirstName').value;
     const last_name = document.getElementById('LastName').value;
     const email = document.getElementById('Email').value;
     const phone = document.getElementById('Phone').value;
     const country = document.getElementById('Country').value;
     const industry = document.getElementById('Industry').value;
     const inquiry_type = document.getElementById('typeofInquiry').value;
     //const opt_in = document.getElementById('opt_in').checked;
     const traits = {
         first_name: FirstName,
         last_name: LastName,
         email: Email,
         phone: Phone,
         country: Country,
         industry: Industry,
         inquiry_type: typeofInquiry,
         opt_in: opt_in
             // Add more traits as needed
     };
     sendIdentifyCall(traits);

     // Track the form submission
     //analytics.track('Form Submitted', {
     //    form_name: 'userForm' // Change 'userForm' to the actual form name if needed and add additional properties
     //});
 }

 // Attach click event listener to the button
// document.getElementsByClassName('mktoButton').addEventListener('click', handleIdentifyClick);

 let buttons = document.getElementsByClassName('mktoButton');
for(let button of buttons) {
  button.addEventListener('click', handleIdentifyClick);
}