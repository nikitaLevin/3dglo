const scrollButton = () => {
    const nextSlideButton = document.querySelector('a[href="#service-block"]');
    nextSlideButton.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector('#service-block');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
};

export default scrollButton;
