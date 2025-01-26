document.addEventListener('DOMContentLoaded', () => {
    const projectData = document.getElementById('project-data').textContent;
    const projects = JSON.parse(projectData);
    const container = document.getElementById('project-cards-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="overlay">
                <img src="${project.image}" alt="${project.alt}">
                <h2>${project.title}</h2>
            </div>
            <p>${project.description}</p>
            <button class="exp-btn">Explore</button>
        `;
        container.appendChild(card);
    });
});