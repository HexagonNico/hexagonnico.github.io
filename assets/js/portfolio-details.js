
const PROJECTS = {
    "ancient-mind": {
        "title": "Ancient Mind",
        "images": [
            "ancient-mind-1.png",
            "ancient-mind-2.png",
            "ancient-mind-3.png",
            "ancient-mind-4.png",
            "ancient-mind-5.png"
        ],
        "information": {
            "Category": "Game",
            "Release date": "19th November 2024",
            "Steam page": "https://store.steampowered.com/app/2376750/Ancient_Mind/",
            "Itch page": "https://hexagonnico.itch.io/ancient-mind",
            "Press kit": "https://github.com/AncientMindGame"
        },
        "descriptionHeader": "A Zelda-inspired action-adventure game",
        "description": [
            "Ancient Mind was my first released commercial project as an independent developer. " +
            "It is a Zelda-inspired action-adventure game characterized by a non-linear level design inspired from zelda dungeons, in which the player is not presented with a path to follow, but instead needs to explore the level in its entirety and create a mental map to figure out how to solve the puzzle.",
            "The project was released on the 19th of November 2024 on Itch and on the 20th on Steam after being in development for about three and a half years. " +
            "The first reception of the game was positive beyond my expectation.",
            "After the game was released, I kept updating it to implement some of the feedback received and provide some content updates."
        ]
    },
    "ardent-engine": {
        "title": "Ardent Engine",
        "images": [
            "ardent-engine-1.png"
        ],
        "information": {
        },
        "descriptionHeader": "A WIP general-purpose engine written in Java",
        // TODO: Put LWJRE back up and write about that instead
        "description": ""
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
            "Project page": "https://github.com/HexagonNico/CelestialBodies"
        },
        "descriptionHeader": "Procedural generation of planets and gravity simulation",
        "description": [
            "This project was an attempt at recreating Sebastian Lague's Solar System inside the Godot Engine. " +
            "It explores different ways of creating a procedural generator for a planet-like mesh.",
            "The project also tries to simulate how celestial bodies respond to gravitational forces and how they move.",
            "As of the time of writing, the addon is uploaded to the asset library and is currently being developed."
        ]
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
            "Store page": "https://hexagonnico.itch.io/pixel-island"
        },
        "descriptionHeader": "A simple game I created to learn Unity",
        "description": [
            "Pixel Island is a sandbox-building game about building a village on an island. " +
            "It was my first Unity Project, a game that I created mainly to learn how to use the engine. ",
            "The core gameplay consists in placing down structures with mouse clicks to create nice-looking scenes. " +
            "It offers no real challenge nor an objective, it a purely zen game.",
            "Despite this being just a learning project, when I decided to release it to the public it had a much greater success than I had expected an is still, as of today, my most well-received project on Itch."
        ]
    },
    "scalamath": {
        "title": "ScalaMath",
        "images": [
            "scalamath-1.png",
            "scalamath-2.png",
            "scalamath-3.png"
        ],
        "information": {
            "Category": "Tools",
            "Organization page": "https://github.com/ScalaMath",
            "Repositories": "https://github.com/orgs/ScalaMath/repositories"
        },
        "descriptionHeader": "A collection of libraries for Math, linear algebra, and geometry",
        "description": [
            "I originally created this project for my Java programming course in university. " +
            "It was a library that provided data structures to represent vectors and matrices.",
            "Several months later I came back to improve the project and publish the definitive version, written in Scala to make use of its operator overloading feature. " +
            "With time, I kept on improving the project, adding data structures for complex numbers, quaternions, colors, and geometric shapes.",
            "In the future, this project may me merged with the successor of LWJRE."
        ]
    },
    "dungeon-keys": {
        "title": "Dungen Keys",
        "images": [
            "dungeon-keys-1.png",
            "dungeon-keys-2.png",
            "dungeon-keys-3.png",
            "dungeon-keys-4.png"
        ],
        "information": {
            "Category": "Game",
            "Store page": "https://hexagonnico.itch.io/dungeon-keys"
        },
        "descriptionHeader": "The first full game I released, made with my own engine",
        "description": [
            "Dungeon Keys was the the first long term project that I managed to release.",
            "The game is a dungeon crawler about exploring a dungeon to find treasures, but the longer you stay there, the more your enemies become aware of your presence.",
            "It was one of my first projects, but also one of the most challenging ones, because I decided to write my own game engine for it. " +
            "This experience tought me a lot about game engines and lead me to creating a few different rendering engines as side-projects over the course of the next years.",
            "Not all the features that were planned have been introduced in the game, but the currently available version is fully playable from the beginning to the end.",
            "Despite Dungeon Keys not being my most original game, I still value it as a great learning experience."
        ]
    },
    "stickerest": {
        "title": "Stickerest",
        "images": [
            "stickerest-1.png",
            "stickerest-2.png"
        ],
        "information": {
            "Category": "Application",
            "Organization homepage": "https://github.com/STICKEREST",
            "Project page": "https://github.com/STICKEREST/stickerest"
        },
        "descriptionHeader": "A university team project, made with React Native",
        "description": "Stickerest is an app for sharing sticker packs developed for a university course about React Native. " +
            "The project was developed by four people and features a mobile application and a database backend."
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
                a.href = project.information[key];
                a.target = "_blank";
                // Display the site name instead of the full url
                if(project.information[key].includes("steam")) {
                    a.innerHTML = "Steam";
                } else if(project.information[key].includes("github")) {
                    a.innerHTML = "Github";
                } else if(project.information[key].includes("itch")) {
                    a.innerHTML = "Itch.io";
                } else {
                    a.innerHTML = project.information[key];
                }
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
        if(Array.isArray(project.description)) {
            // Add multiple paragraphs if the description is an array
            project.description.forEach((description) => {
                const p = document.createElement("p");
                p.innerHTML = description;
                projectDescription.appendChild(p);
            })
        } else {
            // Add a single paragraph if the description is a string
            const p = document.createElement("p");
            p.innerHTML = project.description;
            projectDescription.appendChild(p);
        }
    }
}