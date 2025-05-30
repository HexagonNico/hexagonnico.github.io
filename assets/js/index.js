
const PORTFOLIO = [
    {
        "name": "ancient-mind",
        "displayName": "Ancient Mind",
        "image": "ancient-mind-1.png"
    },
    {
        "name": "lwjre",
        "displayName": "LWJRE",
        "image": "lwjre-1.png"
    },
    {
        "name": "celestial-bodies",
        "displayName": "Celestial Bodies",
        "image": "celestial-bodies-1.png"
    },
    {
        "name": "pixel-island",
        "displayName": "Pixel Island",
        "image": "pixel-island-1.png"
    },
    {
        "name": "scalamath",
        "displayName": "Scalamath",
        "image": "scalamath-1.png"
    },
    {
        "name": "dungeon-keys",
        "displayName": "Dungeon Keys",
        "image": "dungeon-keys-1.png"
    },
    {
        "name": "stickerest",
        "displayName": "Stickerest",
        "image": "stickerest-1.png"
    }
]

window.onload = () => {
    // Add each project to the portfolio
    const portfolioProjects = document.getElementById("portfolio-projects");
    PORTFOLIO.forEach(project => {
        // Create portfolio item element
        const portfolioItem = document.createElement("a");
        portfolioItem.href = "portfolio-details.html?project=" + project.name;
        portfolioItem.classList.add("col-lg-4", "col-md-6", "portfolio-item", "isotope-item");
        // Outer div to contain image and project name
        const outerDiv = document.createElement("div");
        outerDiv.classList.add("portfolio-content", "h-100");
        // Portfolio item image
        const img = document.createElement("img");
        img.src = "assets/img/portfolio/" + project.image;
        img.classList.add("img-fluid");
        // Inner div
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("portfolio-info");
        // Inner text
        const p = document.createElement("p");
        p.innerText = project.displayName;
        // Add the HTML element to the page
        innerDiv.appendChild(p);
        outerDiv.appendChild(img);
        outerDiv.appendChild(innerDiv);
        portfolioItem.appendChild(outerDiv);
        portfolioProjects.appendChild(portfolioItem);
    });
}
