
const PORTFOLIO = [
    {
        "name": "ancient-mind",
        "title": "Ancient Mind",
        "image": "ancient-mind-1.png"
    },
    {
        "name": "lwjre",
        "title": "LWJRE",
        "image": "lwjre-1.png"
    },
    {
        "name": "twenty-games-challenge",
        "title": "Twenty Games Challenge",
        "image": "twenty-games-challenge-1.png"
    },
    {
        "name": "underground-worlds",
        "title": "Underground Worlds",
        "image": "underground-worlds-1.png"
    },
    {
        "name": "celestial-bodies",
        "title": "Celestial Bodies",
        "image": "celestial-bodies-1.png"
    },
    {
        "name": "pixel-island",
        "title": "Pixel Island",
        "image": "pixel-island-1.png"
    },
    {
        "name": "scalamath",
        "title": "Scalamath",
        "image": "scalamath-1.png"
    },
    {
        "name": "dungeon-keys",
        "title": "Dungeon Keys",
        "image": "dungeon-keys-1.png"
    },
    {
        "name": "stickerest",
        "title": "Stickerest",
        "image": "stickerest-1.png"
    }
]

// Add each project to the portfolio
const portfolioProjects = document.getElementById("portfolio-projects");
PORTFOLIO.forEach(project => {
    // Create portfolio item element
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("col-lg-4", "col-md-6", "portfolio-item", "isotope-item");
    // Create portfolio content element
    const portfolioContent = document.createElement("div");
    portfolioContent.classList.add("portfolio-content", "h-100");
    // Create the image icon
    const portfolioImage = document.createElement("img");
    portfolioImage.classList.add("img-fluid");
    portfolioImage.src = "assets/img/portfolio/" + project.image;
    // Create the portfolio info element
    const portfolioInfo = document.createElement("div");
    portfolioInfo.classList.add("portfolio-info");
    // Create the title element
    //const title = document.createElement("h4");
    //title.innerText = project.title;
    // Create the description paragraph
    const description = document.createElement("p");
    description.innerText = project.title;
    // Create the portfolio details link
    const portfolioDetails = document.createElement("a");
    portfolioDetails.href = "portfolio-details.html?project=" + project.name;
    portfolioDetails.title = "More details";
    portfolioDetails.classList.add("details-link");
    // Create the details icon
    const linkIcon = document.createElement("i");
    linkIcon.classList.add("bi", "bi-zoom-in");
    // Add the HTML to the page
    portfolioDetails.appendChild(linkIcon);
    //portfolioInfo.appendChild(title);
    portfolioInfo.appendChild(description);
    portfolioInfo.appendChild(portfolioDetails);
    portfolioContent.appendChild(portfolioImage);
    portfolioContent.appendChild(portfolioInfo);
    portfolioItem.appendChild(portfolioContent);
    portfolioProjects.appendChild(portfolioItem);
});
