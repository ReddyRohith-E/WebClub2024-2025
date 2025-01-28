// Projects Section
document.addEventListener("DOMContentLoaded", () => {
    const projectData = document.getElementById("project-data").textContent;
    const projects = JSON.parse(projectData);
    const container = document.getElementById("project-container");

    projects.forEach((project) => {
        const card = document.createElement("div");
        card.className = "project-card";
        const projectLink = project.link || '#';
        const targetAttr = projectLink === '#' ? '' : 'target="_blank"';
        card.innerHTML = `
            <div class="overlay">
                <img src="${project.image}" alt="${project.alt}">
                <h2>${project.title}</h2>
            </div>
            <p>${project.description}</p>
            <a href="${projectLink}" ${targetAttr} class="exp-btn">Explore</a>
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

// Testimonials
document.addEventListener("DOMContentLoaded", function() {
    const dataScript = document.getElementById('testimonials-data');
    if (!dataScript) {
        console.error('Testimonials data script not found');
        return;
    }

    let data;
    try {
        data = JSON.parse(dataScript.textContent);
    } catch (error) {
        console.error('Error parsing testimonials data:', error);
        return;
    }

    if (!data.testimonials || !Array.isArray(data.testimonials)) {
        console.error('Invalid testimonials data format');
        return;
    }

    const container = document.getElementById('Testimonials-container');
    if (!container) {
        console.error('Testimonials container not found');
        return;
    }

    data.testimonials.forEach(testimonial => {
        //console.log('Appending testimonial:', testimonial);
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'Testimonials-sub';
        testimonialDiv.innerHTML = `
            <img src="assets/Images/quotes.jpg" alt="Quotes" class="quotes">
            <h3>${testimonial.name}</h3>
            <b>${testimonial.id}</b>
            <p>${testimonial.quote}</p>
        `;
        container.appendChild(testimonialDiv);
    });

    // Debugging: Log the container's innerHTML to verify the elements are appended
    //console.log('Testimonials container content:', container.innerHTML);
});