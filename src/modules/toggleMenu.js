const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li'),
        closeBtn = document.querySelector('.close-btn');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', () => {
        handlerMenu();
    });

    closeBtn.addEventListener('click', () => {
        handlerMenu();
    });

    menuItems.forEach(item => item.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = item.querySelector('a').getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        handlerMenu();
    }));
};

export default toggleMenu;
