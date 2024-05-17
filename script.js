// wrapper div
const whole_container = document.querySelector("#whole_container");
const wrapper = document.querySelector("#wrapper");

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

  resumeImage.src = formImage.value;
});

formContact.addEventListener("keyup", () => {
  resumeContact.innerText = formPhone.value;

  resumeEmail.innerText = formEmail.value;

  resumeAddress.innerText = formAddress.value;
});

// formProjectDiv1.addEventListener("keyup", () => {
//   resumeProjectHeading1.innerText = formProject1.value;
//   resumeProjectlink1.innerText = formProjectLink1.value;
//   resumeProjectRemarks1.innerText = formProjectDescription1.value;
// });

// formProjectDiv2.addEventListener("keyup", () => {
//   //   resumeProjectHeading2.innerText = formProject2.value;
//   resumeProjectHeading2.innerText = formProject2.value;
//   //   resumeProjectlink2.innerText = formProjectLink2.value;
//   resumeProjectLink2.innerText = formProjectLink2.value;
//   resumeProjectRemarks2.innerText = formProjectDescription2.value;
// });

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

// Experience Section code // Experience Section code

// array to add experience

let addExperience = [];
// let counter = 0;
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

  // alert("Add another experience");
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

// Experience Section code end here

//
// Education section code start here

let educationArray = [];

// collage name
const Institute = document.querySelector("#Institute");
const course = document.querySelector("#course");
const Institute_location = document.querySelector("#Institute-location");
const course_from = document.querySelector("#course-from");
const course_to = document.querySelector("#course-to");

const addEducationbtn = document.querySelector("#add_education");
const removeEducationbtn = document.querySelector("#remove_education");

addEducationbtn.addEventListener("click", getEducation);

function getEducation() {
  let obj = {
    Institute: `${Institute.value}`,
    Course: `${course.value}`,
    location: `${Institute_location.value}`,
    From: `${course_from.value}`,
    To: `${course_to.value}`,
  };
  console.log("clicked");
  educationArray.push(obj);
  // console.log(educationArray);

  Institute.value = "";
  course.value = "";
  Institute_location.value = "";
  course_from.value = "";
  course_to.value = "";

  showEducationResume(educationArray);
}

function showEducationResume(data) {
  const education_wrapper = document.querySelector("#education-wrapper");
  education_wrapper.innerText = "";

  console.log(education_wrapper);

  data.forEach((element) => {
    const parent = document.createElement("parent");
    parent.classList.add("education-section", "mb-2");

    const Institute = document.createElement("h6");
    Institute.classList.add("education-course", "mt-2");
    Institute.innerText = element.Institute;

    const para = document.createElement("p");
    para.classList.add("education-para", "company-para");
    // para.innerText = element.job;

    const EducationCourse = document.createElement("span");
    EducationCourse.classList.add("Institute_company");
    EducationCourse.innerText = element.Course;

    const educationLocation = document.createElement("span");
    educationLocation.classList.add("location", "Institute-location");
    educationLocation.innerText = element.location;

    const para_date = document.createElement("p");
    para_date.classList.add("para-Institute-date");

    const educationFrom = document.createElement("span");
    educationFrom.classList.add("from");
    educationFrom.innerText = element.From;

    const educationTo = document.createElement("span");
    educationTo.classList.add("to");
    educationTo.innerText = element.To;

    parent.append(
      Institute,
      para,
      EducationCourse,
      educationLocation,
      para_date,
      educationFrom,
      educationTo
    );
    education_wrapper.append(parent);
  });
  console.log("hi");
}

removeEducationbtn.addEventListener("click", () => {
  educationArray.pop();
  showEducationResume(educationArray);
});

// dynamic project div start here

// form project name 1
const formProject1 = document.querySelector("#form-Project-name1");

// Project-link1

const formProjectLink1 = document.querySelector("#Project-link1");

// Project-Description1

const formProjectDescription1 = document.querySelector("#Project-Description1");

// btn add project
const addProject = document.querySelector("#add-Project");
// btn remove project
const removeProject = document.querySelector("#remove_project");
const projectWrapper = document.querySelector("#project_wrapper");

// console.log(projectWrapper);
// array to store projects

let projects = [];

addProject.addEventListener("click", () => {
  let obj = {
    projectName: `${formProject1.value}`,
    projectLink: `${formProjectLink1.value}`,
    projectDescription: `${formProjectDescription1.value}`,
  };

  projects.push(obj);
  console.log(projects);

  formProject1.value = "";
  formProjectLink1.value = "";
  formProjectDescription1.value = "";

  showProjects(projects);
});

console.log(projectWrapper);

function showProjects(data) {
  projectWrapper.innerText = "";

  data.forEach((project) => {
    const parent = document.createElement("p");
    parent.classList.add("project-section", "company-section");

    const heading = document.createElement("h6");
    heading.classList.add("education-course", "project-heading");
    heading.innerText = project.projectName;

    const para = document.createElement("p");
    para.classList.add("project-para");

    const span = document.createElement("span");
    span.classList.add("project-link");
    span.innerText = project.projectLink;

    const remarks = document.createElement("p");
    remarks.classList.add("project-remarks");
    remarks.innerText = project.projectDescription;

    const hr = document.createElement("hr");

    parent.append(heading, para, span, remarks, hr);
    projectWrapper.append(parent);
  });
}

removeProject.addEventListener("click", () => {
  projects.pop();
  console.log("removed", projects);
  showProjects(projects);
});

// Skills section
// Skills section

const FormSkills = document.querySelector("#form-skills");
const removeSkills = document.querySelector("#remove_skills");
const add_skills = document.querySelector("#add_skills");
const skill_wrapper = document.querySelector("#skill_wrapper");

let skills = [];

// creating string with skill entered as fromskills value to pass it into job search API.
// creating string with skill entered as fromskills value to pass it into job search API.

let skillsString = "";

add_skills.addEventListener("click", () => {
  let skill = {
    skill: `${FormSkills.value}`,
  };
  skills.push(skill);

  // to make a string to pass into jobs suggestion api

  skillsString = skillsString + " " + FormSkills.value;
  // console.log(skills);
  FormSkills.value = "";
  showSkills(skills);
});

// console.log(skillsString);

function showSkills(data) {
  skill_wrapper.innerText = "";

  data.forEach((skill) => {
    const parent = document.createElement("div");
    parent.classList.add("skill_parent");

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = skill.skill;
    ul.appendChild(li);
    // ul.style.listStyleType = "bullet"; // or use "disc", "circle", "square", etc.

    // const br = document.createElement("br");
    const hr = document.createElement("hr");

    parent.append(ul, hr);
    skill_wrapper.append(parent);

    // console.log(skills);
  });
}

removeSkills.addEventListener("click", () => {
  skills.pop();
  showSkills(skills);
});

// button section
// button section

const print = document.querySelector("#print");
const download = document.querySelector("#download");
const Job_suggestion = document.querySelector("#Job_suggestion");
const project_suggestion = document.querySelector("#project_suggestion");

// print container
print.addEventListener("click", () => {
  window.print(wrapper);
});

// download;
download.addEventListener("click", generatePDF);

function generatePDF() {
  const element = document.getElementById("whole_container");
  document.getElementById("whole_container").style.display = "block";
  document.getElementById("whole_container").style.marginTop = "0px";
  document.getElementById("whole_container").style.border = "1px solid black";
  html2pdf().from(element).save("resumedownload.pdf");
}

function downloadCode() {
  var x = document.getElementById("whole_container");
  generatePDF();
  setTimeout(function () {
    window.location = window.location;
  }, 3000);
}

// Job suggestion API
// Job suggestion API

// output div to show fetched data from an API

const output = document.querySelector("#output");
const note_scroll = document.querySelector("#note-scroll");

Job_suggestion.addEventListener("click", () => {
  jobs_search(skillsString);
  let output = note_scroll;
  output.innerText = "Scroll Down to see recommendations";
});

function jobs_search(skillsString) {
  const url = `https://jsearch.p.rapidapi.com/search?query=${skillsString} %2C%20India&page=1&num_pages=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a6f775a0edmsh508446ebc358d84p1b8964jsn28dbde94c6fb",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  getData(url, options);
}

async function getData(url, options) {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  showJobs_suggestions(result.data);
}

function showJobs_suggestions(data) {
  output.innerText = "";

  data.forEach((jobs) => {
    const parent = document.createElement("div");
    parent.classList.add(
      "jobs_search_parent",
      "border",
      "border-gray-500",
      "p-3",
      "my-2"
    );

    const img_heading_wrapper = document.createElement("div");
    img_heading_wrapper.classList.add("img_heading_wrapper", "my-1", "px-2");

    // const img = document.createElement("img");
    // img.classList.add("img_employer", "my-1");
    // img.src = jobs.employer_logo;

    const job_heading = document.createElement("h3");
    job_heading.classList.add(
      "job_heading",
      "my-1",
      "px-2",
      "text-lg",
      "text-center"
    );
    job_heading.innerText = jobs.job_title;

    img_heading_wrapper.append(job_heading);

    const job_city = document.createElement("p");
    job_city.classList.add("job_city");
    job_city.innerText = jobs.job_city;

    const para = document.createElement("p");
    para.classList.add(
      "para_jobs_description",
      "p-2",
      "text-wrap",
      "w-auto",
      "h-auto",
      "text-sm"
    );
    para.innerText = jobs.job_description;

    const button = document.createElement("button");
    button.classList.add(
      "apply_button",
      "px-3",
      "py-1",
      "bg-yellow-700",
      "hover:bg-yellow-500",
      "text-white",
      "h-auto",
      "w-auto",
      "mx-auto"
    );
    button.innerText = "Apply Now";
    button.href = jobs.jobs_apply_link;
    // parent
    parent.append(img_heading_wrapper, job_city, para, button);
    output.append(parent);
  });
}

// Project recommendation work here

// console.log(project_suggestion);

project_suggestion.addEventListener("click", () => {
  // console.log("clicked");
  projectRecommendationData(skills);
});

async function projectRecommendationData(skills) {
  const apiKey = "AIzaSyCYtPML75kcG-s8_lNzhBNWVH04fhCMvrc";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  const data = {
    contents: [
      {
        parts: [
          {
            text: ` ${skills} suggest a project with these skills`,
          },
        ],
      },
    ],
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      showProjectsOnline(
        result["candidates"]["0"]["content"]["parts"]["0"]["text"]
      );
    })
    .catch((error) => console.error("Error:", error));
}

function showProjectsOnline(data) {
  output.innerText = "";
  const para = document.createElement("p");
  para.innerText = data;
  output.append(para);
}
