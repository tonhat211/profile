const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 100 && currentScroll > lastScroll) {
    if (header.classList.contains("active")) header.classList.remove("active");
  } else if (currentScroll < lastScroll) {
    header.classList.add("active");
  }

  lastScroll = currentScroll;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

document
  .querySelectorAll(
    "#about ,#skill .left, #skill .right, #education .left, #education .right, #experience, #contact"
  )
  .forEach((el) => {
    observer.observe(el);
  });

var backEnd_skills = [
  {
    icon: `<i class="fa-brands fa-java"></i>`,
    name: "Java",
  },
  {
    icon: `<svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z"
                  />
                </svg>`,
    name: "Spring boot",
  },
  {
    icon: ` <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 585.918 585.918"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M268.35,253.019c-6.622,0.118-11.095,0.826-13.418,1.503v41.334c2.754,0.64,6.156,0.861,10.849,0.892   c17.525,0.111,28.539-8.543,28.539-23.197C294.319,260.376,284.846,252.69,268.35,253.019z"
                    />
                    <path
                      fill="currentColor"
                      d="M537.115,48.979h-177.39c-0.787,0-1.553,0.077-2.329,0.124V0L11.176,46.206v492.311l346.22,47.402v-50.583   c0.776,0.052,1.542,0.114,2.329,0.114h177.39c20.756,0,37.627-16.888,37.627-37.627V86.602   C574.742,65.859,557.871,48.979,537.115,48.979z M98.075,315.893c0,36.175-15.854,47.985-40.654,46.716   c-5.743-0.294-13.242-1.771-18.079-3.822l2.742-22.194c3.402,1.391,7.788,2.457,12.702,2.624   c10.596,0.384,17.291-4.755,17.291-24.204v-78.534l25.999-0.858V315.893z M150.598,367.185   c-14.208-0.729-27.969-5.259-34.765-9.585l5.533-23.858c7.392,4.267,18.867,8.708,30.909,9.139   c13.163,0.473,20.21-5.013,20.21-13.712c0-8.294-6.1-13.144-21.323-19.087c-20.588-7.81-33.723-19.773-33.723-38.47   c0-21.942,17.316-39.336,46.87-40.355c14.52-0.499,25.378,2.323,33.253,5.688l-6.688,24.774   c-5.268-2.515-14.541-6.121-27.129-5.874c-12.402,0.231-18.332,6.176-18.332,12.971c0,8.347,7.058,12.014,23.455,18.465   c22.979,8.827,34.037,21.379,34.037,40.492C202.905,350.518,185.801,368.982,150.598,367.185z M314.246,306.944   c-11.707,10.325-28.738,14.683-48.245,14.283c-4.273-0.089-8.105-0.379-11.069-0.867v50.059l-31.338-1.563V233.307   c9.617-1.953,23.352-3.645,43.048-4.307c20.399-0.693,35.237,2.651,45.337,10.058c9.785,7.074,16.431,19.066,16.431,33.37   C328.409,286.733,323.358,298.833,314.246,306.944z M553.24,497.823c0,8.892-7.232,16.127-16.125,16.127h-177.39   c-0.797,0-1.563-0.111-2.329-0.231V382.273c12.072,1.669,28.859,2.646,51.969,2.646c64.21,0,92.394-11.779,97.019-16.746   c4.631-5.008-1.438-8.935-1.438-8.935s2.138,2.504-0.691,5.355c-2.856,2.839-28.908,9.967-70.653,12.104   c-28.992,1.501-59.69-0.977-76.215-4.415v-11.984c5.575-1.533,10.949-2.478,10.949-2.478c-0.943,0.116-5.417,0.283-10.949,0.787   v-58.642c9.266,4.573,28.462,7.229,57.512,6.211c50.782-1.817,56.758-11.381,62.059-15.977   c-29.418,8.013-107.528,7.499-108.09,1.606c-0.52-5.885,24.079-10.706,24.079-10.706s-23.838,0.021-35.549,4.729V70.722   c0.766-0.112,1.532-0.242,2.329-0.242h177.39c8.893,0,16.125,7.236,16.125,16.126V497.823z"
                    />
                    <path
                      fill="currentColor"
                      d="M452.357,179.983c12.818-20.874-1.617-41.191-1.617-41.191s3.212,14.982-5.343,30.493   c-8.557,15.515-40.163,24.625-52.452,51.363c-12.283,26.759,27.291,57.263,27.291,57.263s-14.452-27.84-13.922-48.174   C406.709,215.202,439.47,200.84,452.357,179.983z"
                    />
                    <path
                      fill="currentColor"
                      d="M474.3,193.368c0,0-49.229,18.721-49.229,40.115c0,21.413,13.375,28.363,15.518,35.313   c2.142,6.966-3.737,18.733-3.737,18.733s19.264-13.368,16.031-28.904c-3.213-15.519-18.194-20.33-9.627-35.843   C448.977,212.391,474.3,193.368,474.3,193.368z"
                    />
                    <path
                      fill="currentColor"
                      d="M484.453,282.184c0,0,21.941,0,24.073,13.376c2.132,13.368-27.811,33.157-27.811,33.157s47.16-9.495,42.771-33.68   C518.143,265.613,484.453,282.184,484.453,282.184z"
                    />
                    <path
                      fill="currentColor"
                      d="M379.559,317.479c-2.104-3.744,3.77-5.874,3.77-5.874c-26.783,6.436-12.152,17.644,19.218,19.812   c26.889,1.826,56.94-8.042,56.94-8.042l9.261-7.481c0,0-21.198,2.945-37.827,4.814   C408.641,323.211,381.706,321.232,379.559,317.479z"
                    />
                    <path
                      fill="currentColor"
                      d="M388.692,343.186c-1.092-2.505,1.056-3.916,1.056-3.916s-12.132,0.335-12.836,6.761c-0.712,6.388,3.771,9.627,33.786,8.925   c35.733-0.852,41.69-5.103,45.37-8.201l8.705-6.562c-23.356,3.03-25.161,3.854-38.4,4.23   C413.066,344.812,389.748,345.657,388.692,343.186z"
                    />
                    <path
                      fill="currentColor"
                      d="M481.418,389.191c-28.188,5.716-113.754,2.121-113.754,2.121s55.611,13.19,119.104,2.141   c30.347-5.279,32.121-19.983,32.121-19.983S509.592,383.475,481.418,389.191z"
                    />
                  </g>
                </svg>`,
    name: "JSP servlet",
  },
];

var frontEnd_skills = [
  {
    icon: `<i class="fa-brands fa-react"></i>`,
    name: "ReactJs",
  },
  {
    icon: `<i class="fa-brands fa-react"></i>`,
    name: "React Native",
  },
  {
    icon: `<i class="fa-brands fa-js"></i>`,
    name: "JavaScript",
  },
  {
    icon: `<i class="fa-brands fa-html5"></i>`,
    name: "HTML",
  },
  {
    icon: `<i class="fa-brands fa-css"></i>`,
    name: "CSS",
  },
  {
    icon: `<i class="fa-brands fa-sass"></i>`,
    name: "SASS",
  },
];

var database_skills = [
  {
    icon: ` <i class="fa-solid fa-database"></i>`,
    name: "MySql",
  },
];

function renderSkills() {
  var html = "";
  if (backEnd_skills) {
    let be_skills = backEnd_skills
      .map(
        (item) => `<div class="skill-item grid-col-1_5 grid-col-2_mob">
                ${item.icon}
                <p> ${item.name}</p>
              </div>`
      )
      .join("");
    html += `<div class="d-flex" style="flex-wrap: wrap">${be_skills}</div>`;
  }
  if (frontEnd_skills) {
    let fe_skills = frontEnd_skills
      .map(
        (item) => `<div class="skill-item grid-col-1_5 grid-col-2_mob">
                ${item.icon}
                <p> ${item.name}</p>
              </div>`
      )
      .join("");
    html += `<div class="d-flex" style="flex-wrap: wrap">${fe_skills}</div>`;
  }
  if (database_skills) {
    let db_skills = database_skills
      .map(
        (item) => `<div class="skill-item grid-col-1_5 grid-col-2_mob">
                ${item.icon}
                <p> ${item.name}</p>
              </div>`
      )
      .join("");
    html += `<div class="d-flex" style="flex-wrap: wrap">${db_skills}</div>`;
  }

  document.getElementById("skill-list").innerHTML = html;
}

renderSkills();

var projects = [
  {
    id: 1,
    name: "Stationery sale website",
    avatar: "./assets/imgs/thien_long_imgs/tl_avatar.png",
    description: `Built as a learning project, this site is based on the layout and features of Thiên Long’s official website.
              \nTech stack: ReactJs, Spring boot and MySQL`,
    githubs: [
      {
        title: "GitHub",
        link: "https://github.com/tonhat211/VanPhongPham",
      },
    ],
    imgs: [
      "./assets/imgs/thien_long_imgs/tl_1.png",
      "./assets/imgs/thien_long_imgs/tl_2.png",
      "./assets/imgs/thien_long_imgs/tl_3.png",
      "./assets/imgs/thien_long_imgs/tl_4.png",
      "./assets/imgs/thien_long_imgs/tl_5.png",
      "./assets/imgs/thien_long_imgs/tl_6.png",
      "./assets/imgs/thien_long_imgs/tl_7.png",
      "./assets/imgs/thien_long_imgs/tl_8.png",
      "./assets/imgs/thien_long_imgs/tl_9.png",
    ],
  },
  {
    id: 2,
    name: "Course registration application",
    avatar: "./assets/imgs/course_registration_imgs/cr_avatar.JPG",
    description: `This app was inspired by the course enrollment system of Nong Lam University.
              \nTech stack: React Native, Spring boot and MySQL`,
    githubs: [
      {
        title: "git.fe_user",
        link: "https://github.com/tonhat211/Mobile_User",
      },
      {
        title: "git.fe_admin",
        link: "https://github.com/tonhat211/Mobile_Admin",
      },
      {
        title: "git.be_server",
        link: "https://github.com/tonhat211/Mobile_Server",
      },
    ],
    imgs: [
      "./assets/imgs/course_registration_imgs/cr_1.jpg",
      "./assets/imgs/course_registration_imgs/cr_2.jpg",
      "./assets/imgs/course_registration_imgs/cr_3.jpg",
      "./assets/imgs/course_registration_imgs/cr_4.jpg",
      "./assets/imgs/course_registration_imgs/cr_5.jpg",
      "./assets/imgs/course_registration_imgs/cr_6.jpg",
      "./assets/imgs/course_registration_imgs/cr_7.jpg",
      "./assets/imgs/course_registration_imgs/cr_8.jpg",
      "./assets/imgs/course_registration_imgs/cr_9.jpg",
    ],
  },
];

function renderProjects() {
  const root = document.querySelector("#experience .experience-item");
  const container = document.querySelector("#experience-list");

  for (let i = 0; i < projects.length; i++) {
    const e = root.cloneNode(true);

    e.querySelector(".title").innerText = projects[i].name;
    e.querySelector(".description").innerText = projects[i].description;
    e.querySelector(".img_container").href = projects[i].avatar;
    e.querySelector("img").src = projects[i].avatar;

    const btn = e.querySelector(".view-demo-btn");
    if (btn) {
      btn.addEventListener("click", () => viewDemo(projects[i].id));
    }
    const aRoot = e.querySelector(".to-github-a");
    const actionBtnsContainer = e.querySelector(".action-btns-container");
    const gits = projects[i].githubs;
    for (let j = 0; j < gits.length; j++) {
      const newA = aRoot.cloneNode(true);
      newA.innerText = gits[j].title;
      newA.href = gits[j].link;
      actionBtnsContainer.appendChild(newA);
    }
    aRoot.style.display = "none";

    container.appendChild(e);
  }
  root.style.display = "none";
}

renderProjects();

function viewDemo(id) {
  const modal = document.getElementById("modal");
  if (modal && modal.classList.contains("hidden")) {
    const project = projects.find((p) => p.id === id);

    if (project) {
      let imgs = project.imgs
        .map(
          (
            src
          ) => `<a class="grid-col-6 p-10 grid-col-12_mob" href="${src}" target="_blank">

                      <img src="${src}" alt="demo" />
                    </a>`
        )
        .join("");
      modal.querySelector(".modal_content_title").innerText = project.name;
      modal.querySelector(".imgs-show").innerHTML = imgs;
      modal.classList.remove("hidden");
      requestAnimationFrame(() => {
        modal.classList.add("active");
      });
    } else {
      // modalContent.innerHTML = "<p>Không tìm thấy dự án phù hợp.</p>";
    }
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal && modal.classList.contains("active")) {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 600);
  }
}

function changePosition() {
  const pic1 = document.querySelector("#education .logo-container img.pic-1");
  const pic2 = document.querySelector("#education .logo-container img.pic-2");
  if (pic1.classList.contains("above")) {
    pic1.classList.remove("above");
    pic2.classList.remove("below");

    pic1.classList.add("below");
    pic2.classList.add("above");
  } else {
    pic1.classList.remove("below");
    pic2.classList.remove("above");

    pic1.classList.add("above");
    pic2.classList.add("below");
  }
}

const btn = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function showSecondNav() {
  console.log("show second nav");
  const nav = document.getElementById("second-nav");
  if (nav && nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    requestAnimationFrame(() => {
      nav.classList.add("active");
    });
  }
}

function closeSecondNav() {
  const nav = document.getElementById("second-nav");
  if (nav && nav.classList.contains("active")) {
    nav.classList.remove("active");
    setTimeout(() => {
      nav.classList.add("hidden");
    }, 600);
  }
}
