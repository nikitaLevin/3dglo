const inputValidation = () => {
    //calc-item only numbers
    const calcInput = document.querySelectorAll('.calc-item');
    calcInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/g, '');
        });
    });

    //your name and mail only letters
    const formName = document.querySelector('.form-name'),
        formEmail = document.querySelector('.form-email');
    formName.addEventListener('input', () => {
        formName.value = formName.value.replace(/[^a-zA-Z\s-]+/g, '');
    });
    formEmail.addEventListener('input', () => {
        formEmail.value = formEmail.value.replace(/[^a-zA-Z@\-_.!~*']+$/g, '');
    });

    //phone number
    const phoneInput = document.querySelector('.form-phone');
    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/[^0-9()\-+]+/g, '');
    });

    //have a question block
    const topFormName = document.querySelectorAll('.top-form'),
        messageInput = document.querySelector('.mess');
    topFormName.forEach(item => {
        if (item.classList.contains('form-email')) {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^a-zA-Z@\-_.!~*']+$/g, '');
            });
        } else if (item.classList.contains('form-phone')) {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9()\-+]+/g, '');
            });
        } else {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^a-zA-Z\s-]+/g, '');
            });
        }
    });
    messageInput.addEventListener('input', () => {
        messageInput.value = messageInput.value.replace(/[^a-zA-Z\s-]+/g, '');
    });
};

export default inputValidation;
