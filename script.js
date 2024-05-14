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

// form experience add
const formExperienceAdd = document.querySelector("#add-experience");

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

// class of input box of company  experience-job-role
// form experience add
// formExperienceAdd.addEventListener("click", () => {
//   const parent = document.createElement("div");
//   parent.classList.add("mb-2", "border", "p-2", "border-blue-700");

//   // job role
//   const labelJob = document.createElement("label");
//   labelJob.innerText = "Job Role";
//   // job role input
//   const inputJob = document.createElement("input");
//   inputJob.classList.add("experience-job-role");

//   const labelCompany = document.createElement("label");
//   labelCompany.innerText = "Company";

//   const inputCompany = document.createElement("input");
//   inputCompany.classList.add("experience-job-role");

//   // label loaction
//   const labelLocation = document.createElement("label");
//   labelLocation.innerText = "Location";

//   const inputLocation = document.createElement("input");
//   inputLocation.classList.add("experience-job-role");

//   const labelFrom = document.createElement("label");
//   labelFrom.innerText = "From";

//   const inputFrom = document.createElement("input");
//   inputFrom.classList.add("experience-job-role");
//   inputFrom.setAttribute("type", "date");

//   const labelTo = document.createElement("label");
//   labelTo.innerText = "To";

//   const inputTo = document.createElement("input");
//   inputTo.classList.add("experience-job-role");
//   inputTo.setAttribute("type", "date");

//   const hr = document.createElement("hr");

//   parent.append(
//     labelJob,
//     inputJob,
//     labelCompany,
//     inputCompany,
//     labelLocation,
//     inputLocation,
//     labelFrom,
//     inputFrom,
//     labelTo,
//     inputTo,
//     hr
//   );
//   document.querySelector("#experience").append(parent);
// });

// array to add experience

let addExperience = [];
let counter = 0;
// iska kaam hai, array me experience object push karana index ke sath, aur resume template me wo data dikhana

const job_role = document.querySelector("#job_role");
const company = document.querySelector("#experience-company");
const jobLocation = document.querySelector("#Location");
const experienceFrom = document.querySelector("#experience-from");
const experienceTo = document.querySelector("#experience-to");
// this button add experience to array
const button_experience_add = document.querySelector("#Add_data_to_experience");

button_experience_add.addEventListener("click", () => {
  let obj = {
    job: `${job_role.value}`,
    company: `${company.value}`,
    location: `${jobLocation.value}`,
    from: `${experienceFrom.value}`,
    to: `${experienceTo.value}`,
  };

  addExperience.push(obj);
  console.log(addExperience);

  // function responsible to show content in resume
  showExperienceInResume(addExperience);

  job_role.value = "";
  company.value = "";
  jobLocation.value = "";
  experienceFrom.value = "";
  experienceTo.value = "";

  alert("Add another experience");
});

// remove last experience

document.querySelector("#remove-experience").addEventListener("click", () => {
  addExperience.pop();
  showExperienceInResume(addExperience);
  console.log(addExperience);
});

function showExperienceInResume(data) {
  let Resumeexperience = document.querySelector("#resume_experience");
  Resumeexperience.innerText = "";
  // console.log(data.length);
  data.forEach((element) => {
    const parent = document.createElement("parent");
    parent.classList.add("experience-section");

    const heading = document.createElement("h6");
    heading.classList.add("experience-company");
    heading.innerText = element.job;

    const para = document.createElement("p");
    para.classList.add("company-para");
    // para.innerText = element.job;

    const spanCompany = document.createElement("span");
    spanCompany.classList.add("company");
    spanCompany.innerText = element.company;

    const spanLocation = document.createElement("span");
    spanLocation.classList.add("location");
    spanLocation.innerText = element.location;

    const para_date = document.createElement("p");
    para_date.classList.add("para_date");

    const spanFrom = document.createElement("span");
    spanFrom.classList.add("from");
    spanFrom.innerText = element.from;

    const spanTo = document.createElement("span");
    spanTo.classList.add("to");
    spanTo.innerText = element.to;

    parent.append(
      heading,
      para,
      spanCompany,
      spanLocation,
      para_date,
      spanFrom,
      spanTo
    );
    Resumeexperience.append(parent);
  });
  console.log("hi");
}
