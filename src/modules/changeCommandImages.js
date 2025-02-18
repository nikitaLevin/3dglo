const changeCommandImages = () => {
    const commandImages = document.querySelectorAll('.command__photo');

    commandImages.forEach(item => {
        const defaultImage = item.src,
            hoverImage = item.dataset.img;
        item.addEventListener('mouseover', () => {
            item.src = hoverImage;
        });

        item.addEventListener('mouseout', () => {
            item.src = defaultImage;
        });
    });
};

export default changeCommandImages;
