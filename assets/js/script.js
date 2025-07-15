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
    // icon: `<i class="fa-brands fa-java"></i>`,
    icon: `<img src="./assets/svgs/java-icon.svg" alt="skill" class="svg" />`,
    name: "Java",
  },
  {
    // icon: `<svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
    //               <path
    //                 fill="currentColor"
    //                 d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z"
    //               />
    //             </svg>`,
    icon: `<img src="./assets/svgs/springio-icon.svg" alt="skill" class="svg" />`,
    name: "Spring boot",
  },
  {
    icon: `<img src="./assets/svgs/jsp-servlet-icon.svg" alt="skill" class="svg" />`,
    name: "JSP servlet",
  },
];

var frontEnd_skills = [
  {
    // icon: `<i class="fa-brands fa-react"></i>`,
    icon: `<img src="./assets/svgs/react-icon.svg" alt="skill" class="svg" />`,
    name: "ReactJs",
  },
  {
    // icon: `<i class="fa-brands fa-react"></i>`,
    icon: `<img src="./assets/svgs/react-icon.svg" alt="skill" class="svg" />`,
    name: "React Native",
  },
  {
    // icon: `<i class="fa-brands fa-js"></i>`,
    icon: `<img src="./assets/svgs/javascript-icon.svg" alt="skill" class="svg" />`,
    name: "JavaScript",
  },
  {
    // icon: `<i class="fa-brands fa-html5"></i>`,
    icon: `<img src="./assets/svgs/w3_html5-icon.svg" alt="skill" class="svg" />`,
    name: "HTML",
  },
  {
    // icon: `<i class="fa-brands fa-css"></i>`,
    icon: `<img src="./assets/svgs/w3_css-icon.svg" alt="skill" class="svg" />`,
    name: "CSS",
  },
  {
    // icon: `<i class="fa-brands fa-sass"></i>`,
    icon: `<img src="./assets/svgs/sass-lang-icon.svg" alt="skill" class="svg" />`,
    name: "SASS",
  },
];

var database_skills = [
  {
    // icon: ` <i class="fa-solid fa-database"></i>`,
    icon: `<img src="./assets/svgs/mysql-icon.svg" alt="skill" class="svg" />`,
    name: "MySql",
  },
];

function renderSkills() {
  var html = "";
  if (backEnd_skills) {
    let be_skills = backEnd_skills
      .map(
        (item, index) => `<div class="skill-item grid-col-1_5 grid-col-2_mob"
           style="animation-delay: ${index * 0.15}s;">
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
        (item, index) => `<div class="skill-item grid-col-1_5 grid-col-2_mob"  
        style="animation-delay: ${index * 0.15}s;">
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
        (item, index) => `<div class="skill-item grid-col-1_5 grid-col-2_mob"
          style="animation-delay: ${index * 0.15}s;">
                ${item.icon}
                <p> ${item.name}</p>
              </div>`
      )
      .join("");
    html += `<div class="d-flex" style="flex-wrap: wrap">${db_skills}</div>`;
  }

  const items = document.querySelectorAll(".skill-item");
  items.forEach((el, i) => {
    el.style.animation = "fadeInUp 0.4s ease forwards";
    el.style.animationDelay = `${i * 0.1}s`; // mỗi item cách nhau 0.1s
  });

  document.getElementById("skill-list").innerHTML = html;

  // const items = document.querySelectorAll(".skill-item");
  // console.log("item len:" + items.length);
  // items.forEach((el, i) => {
  //   setTimeout(() => {
  //     console.log("active skill");
  //     el.classList.add("active");
  //   }, i * 100); // 100ms mỗi item
  // });
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

function downloadCV(e) {
  // Lấy URL từ thẻ a
  const url = e.currentTarget.href;
  window.open(url, "_blank");
  console.log("download cv");
  e.preventDefault();
  const link = document.createElement("a");
  link.href = url;
  link.download = "cv_ToMinhNhat.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
