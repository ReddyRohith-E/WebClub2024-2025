// Projects Section
document.addEventListener("DOMContentLoaded", () => {
	const projectData = document.getElementById("project-data").textContent;
	const projects = JSON.parse(projectData);
	const container = document.getElementById("project-container");
    console.log(container)

	projects.forEach((project) => {
		const card = document.createElement("div");
		card.className = "project-card";
		card.innerHTML = `
            <div class="overlay">
                <img src="${project.image}" alt="${project.alt}">
                <h2>${project.title}</h2>
            </div>
            <p>${project.description}</p>
            <a href="#" class="exp-btn">Explore</a>
        `;
		container.appendChild(card);
	});
});

// Memories Section
// Data for gallery images
const galleryData = JSON.parse(document.getElementById('gallery-data').textContent);
const carouselSlide = document.getElementById('carousel-slide');
const dotsContainer = document.getElementById('dots-container');

// Initialize variables
let currentIndex = 0;

// Load images dynamically into the carousel
galleryData.forEach((item, index) => {
	// Create image elements
	const img = document.createElement('img');
	img.src = item.image;
	img.alt = item.alt;
	carouselSlide.appendChild(img);

	// Create dot elements
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) dot.classList.add('active'); // First dot active by default
	dot.dataset.index = index; // Add index as data attribute
	dotsContainer.appendChild(dot);
});

// Select all dots
const dots = document.querySelectorAll('.dot');

// Carousel functionality
const updateCarousel = () => {
	const slideWidth = carouselSlide.clientWidth;
	carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

	// Update active dot
	dots.forEach(dot => dot.classList.remove('active'));
	dots[currentIndex].classList.add('active');
};

// Next button functionality
document.getElementById('next-btn').addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % galleryData.length;
	updateCarousel();
});

// Previous button functionality
document.getElementById('prev-btn').addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
	updateCarousel();
});

// Dot click functionality
dots.forEach(dot => {
	dot.addEventListener('click', (e) => {
		currentIndex = parseInt(e.target.dataset.index);
		updateCarousel();
	});
});

// Handle window resize for responsiveness
window.addEventListener('resize', updateCarousel);