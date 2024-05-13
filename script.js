// form-about
const formAbout = document.querySelector("#form-about");

// form-contact
const formContact = document.querySelector("#form-contact");

// form name
const formFname = document.querySelector("#fname");
// form l name
const formLname = document.querySelector("#lname");

// form job role
const formJobrole = document.querySelector("#role");
// form image
const formImage = document.querySelector("#img");
// form phone no.
const formPhone = document.querySelector("#form-phone");

// form-email

const formEmail = document.querySelector("#form-email");

// form-address

const formAddress = document.querySelector("#form-address");

// form project name 1
const formProject1 = document.querySelector("#form-Project-name1");

// Project-link1

const formProjectLink1 = document.querySelector("#Project-link1");

// Project-Description1

const formProjectDescription1 = document.querySelector("#Project-Description1");

// form project name 2
const formProject2 = document.querySelector("#form-Project-name2");

// Project-link2

const formProjectLink2 = document.querySelector("#Project-link2");

// console.log(formProjectLink2);
// Project-Description2

const formProjectDescription2 = document.querySelector("#Project-Description2");

// project 1
const formProjectDiv1 = document.querySelector("#project1");
const formProjectDiv2 = document.querySelector("#project2");

// ---------------------------------------
// ---------------------------------------

// resume div
// resume div
// resume img
let resumeImage = document.querySelector("#image");

// resume First Name
let resumeFirstName = document.querySelector("#firstName");

// resume l name
let resumeLastName = document.querySelector("#lastName");

// resume role

let resumeRole = document.querySelector("#resume-role");

// resume contact no

let resumeContact = document.querySelector("#contact_no");

//resume email
let resumeEmail = document.querySelector("#resume-email");

// resume address
let resumeAddress = document.querySelector("#resume-address");

// resume projects
// resume projects

// project heading 1
let resumeProjectHeading1 = document.querySelector("#resume-project-heading1");

// project link 1
let resumeProjectlink1 = document.querySelector("#resume-project-link1");

// project remarks 1

let resumeProjectRemarks1 = document.querySelector("#resume-project-remarks1");

// project heading 2
let resumeProjectHeading2 = document.querySelector("#resume-project-heading2");

// resume project link 2
let resumeProjectLink2 = document.querySelector("#resume-project-link2");

// console.log(resumeProjectLink2);
//
let resumeProjectRemarks2 = document.querySelector("#resume-project-remarks2");

formAbout.addEventListener("keyup", () => {
  resumeFirstName.innerText = formFname.value;

  resumeLastName.innerText = formLname.value;

  resumeRole.innerText = formJobrole.value;
  // Not working

  //   resumeImage.src = formImage.value;
});

formContact.addEventListener("keyup", () => {
  resumeContact.innerText = formPhone.value;

  resumeEmail.innerText = formEmail.value;

  resumeAddress.innerText = formAddress.value;
});

formProjectDiv1.addEventListener("keyup", () => {
  resumeProjectHeading1.innerText = formProject1.value;
  resumeProjectlink1.innerText = formProjectLink1.value;
  resumeProjectRemarks1.innerText = formProjectDescription1.value;
});

formProjectDiv2.addEventListener("keyup", () => {
  //   resumeProjectHeading2.innerText = formProject2.value;
  resumeProjectHeading2.innerText = formProject2.value;
  //   resumeProjectlink2.innerText = formProjectLink2.value;
  resumeProjectLink2.innerText = formProjectLink2.value;
  resumeProjectRemarks2.innerText = formProjectDescription2.value;
});
