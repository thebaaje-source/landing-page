const productsMenu = document.querySelector('.products-menu');
const productsButton = document.querySelector('.products-button');
const readingProgress = document.querySelector('#readingProgress');

productsButton.addEventListener('click', () => {
	const isOpen = productsMenu.classList.toggle('open');
	productsButton.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (event) => {
	if (!productsMenu.contains(event.target)) {
		productsMenu.classList.remove('open');
		productsButton.setAttribute('aria-expanded', 'false');
	}
});

window.addEventListener('scroll', () => {
	const scrollable = document.documentElement.scrollHeight - window.innerHeight;
	readingProgress.style.width = `${(window.scrollY / scrollable) * 100}%`;
});
