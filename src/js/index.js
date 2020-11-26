import '../scss/main.scss';

console.log("Hello, it's Kamila here - nice to meet You 😁 🚀")

fetch("https://api.github.com/users/kamila-kryszak/repos?sort=created&direction=asc")
    .then((res) => res.json())
    .then((res) => {
        const container = document.querySelector(".projects-grid--js");
        for (let repo of res) {
            const {
                description,
                homepage,
                html_url,
                name
            } = repo;

            const template = `<article class="project">
            <div class="project__window">
              <span class="project__circle"></span>
              <span class="project__circle"></span>
              <span class="project__circle"></span>
            </div>
            <div class="project__content-box">
            <img src="img/githubIcon.svg" alt="" target="_blank" rel="noopener noreferrer">
              <h3 class="project__grid project__title">
                <span class="project__label">project: </span><span class="project__name">${name}</span>
              </h3>
              <p class="project__grid project__grid--description">
                <span class="project__label">description:</span>
                <span class="project__description">${description}</span>
              </p>
              <p class="project__grid">
                <span class="project__label">demo:</span>
                <span>&lt;<a href="${homepage}" title="${name}" target="_blank" rel="noopener noreferrer" class="project__link">see_here</a>&gt;</span>
              </p>
              <p class="project__grid">
                <span class="project__label">github:</span>
                <span>&lt;<a href="${html_url}" title="${name}" target="_blank" rel="noopener noreferrer" class="project__link">source_code</a>&gt;</span>
              </p>
            </div>
          </article>`
            if (description) {
                container.innerHTML += template;
            }
        }


    })
    .catch((e) => console.log(e));