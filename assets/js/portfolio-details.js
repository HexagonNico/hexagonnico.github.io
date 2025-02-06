
const PROJECTS = {
    "ancient-mind": {
        "title": "Ancient Mind",
        "images": [
            "ancient-mind-1.png"
        ],
        "information": {
            "Category": "Game",
            "Release date": "19th November 2024",
            "Store page": "s.team/a/2376750",
            "Press kit": "github.com/AncientMindGame"
        },
        "descriptionHeader": "A Zelda-inspired action-adventure game",
        "description": "This is a description. You're welcome."
    },
    "ardent-engine": {
        "title": "Ardent Engine",
        "images": [
        ],
        "information": {
        },
        "descriptionHeader": "A WIP general-purpose engine written in Java",
        "description": "This is a description. You're welcome."
    },
    "celestial-bodies": {
        "title": "Celestial Bodies",
        "images": [
            "celestial-bodies-1.png",
            "celestial-bodies-2.png",
            "celestial-bodies-3.png"
        ],
        "information": {
            "Category": "Tools",
            "Project page": "github.com/HexagonNico/CelestialBodies"
        },
        "descriptionHeader": "Procedural generation of planets and gravity simulation",
        "description": "This is a description. You're welcome."
    },
    "pixel-island": {
        "title": "Pixel Island",
        "images": [
            "pixel-island-1.png",
            "pixel-island-2.png",
            "pixel-island-3.png"
        ],
        "information": {
            "Category": "Game",
            "Release date": "31st March 2021",
            "Store page": "hexagonnico.itch.io/pixel-island"
        },
        "descriptionHeader": "A simple game I created to learn Unity",
        "description": "This is a description. You're welcome."
    },
    "dungeon-keys": {
        "title": "Dungen Keys",
        "images": [
        ],
        "information": {
            "Category": "Game",
            "Store page": "hexagonnico.itch.io/dungeon-keys"
        },
        "descriptionHeader": "The first full game I released, made with my own engine",
        "description": "This is a description. You're welcome."
    },
    "stickerest": {
        "title": "Stickerest",
        "images": [
            "stickerest-1.png",
            "stickerest-2.png"
        ],
        "information": {
            "Category": "Application",
            "Organization homepage": "github.com/STICKEREST",
            "Project page": "github.com/STICKEREST/stickerest"
        },
        "descriptionHeader": "A university team project, made with React Native",
        "description": "This is a description. You're welcome."
    }
};

window.onload = (event) => {
    // Get the project name from the URL params and the project object from PROJECTS
    const urlParams = new URLSearchParams(window.location.search);
    const project = PROJECTS[urlParams.get("project")];
    // Set the content of the page if a project with this name exists
    if(project != undefined) {
        // Set the title of the page
        const pageTitle = document.getElementById("page-title");
        pageTitle.innerHTML = project.title;
        // Add images to the images container
        const imagesContainer = document.getElementById("images-container");
        project.images.forEach((image) => {
            const div = document.createElement("div");
            div.classList.add("swiper-slide");
            const img = document.createElement("img");
            img.src = "assets/img/portfolio/" + image;
            div.appendChild(img);
            imagesContainer.appendChild(div);
        });
        // Add the project information to the side panel
        const projectInformation = document.getElementById("project-information");
        for(let key in project.information) {
            // Use the entry key
            const li = document.createElement("li");
            const strong = document.createElement("strong");
            strong.innerHTML = key;
            li.appendChild(strong);
            li.innerHTML += ": ";
            // Add a hyperlink if the info contains a dot
            if(project.information[key].includes(".")) {
                const a = document.createElement("a");
                a.href = "https://" + project.information[key];
                a.target = "_blank";
                a.innerHTML = project.information[key];
                li.appendChild(a);
            } else {
                li.innerHTML += project.information[key];
            }
            projectInformation.appendChild(li);
        }
        // Add a header to the description
        const projectDescription = document.getElementById("project-description");
        const descriptionHeader = document.createElement("h2");
        descriptionHeader.innerHTML = project.descriptionHeader;
        projectDescription.appendChild(descriptionHeader);
        // Add the full description
        const description = document.createElement("p");
        description.innerHTML = project.description;
        projectDescription.appendChild(description);
    }
}