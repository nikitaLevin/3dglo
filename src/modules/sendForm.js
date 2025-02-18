const sendForm = (form) => {
    const errorMessage = 'Something went wrong...',
        loadMessage = 'Loading...',
        successMessage = 'Thank you! We will contact you soon!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.append(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        const body = {};
        formData.forEach((val, key) => body[key] = val);

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Status network not 200');
                }
                statusMessage.textContent = successMessage;
                form.querySelectorAll('input').forEach(input => input.value = '');
                setTimeout(statusMessage.remove(), 5000);
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
                form.querySelectorAll('input').forEach(input => input.value = '');
                setTimeout(statusMessage.remove(), 5000);
            });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;
