window.addEventListener('DOMContentLoaded', () => {
    //Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        function updateClock() {
            let timer = getTimeRemaining();

            timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
            timerMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
            timerSeconds.textContent = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;

            if (timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000);
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }

        updateClock();

    }

    countTimer('27 february 2025');

    //Menu
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

    toggleMenu();

    //popup
    const togglePopup = () => {
        const popUp = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popUp.style.display = 'block';
            });
        });

        popUp.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.popup-content');

                if (!target) {
                    popUp.style.display = 'none';
                }
            }
        });
    };

    togglePopup();

    //scroll button
    const nextSlideButton = document.querySelector('a[href="#service-block"]');
    nextSlideButton.addEventListener('click', () => {
        event.preventDefault();
        const targetSection = document.querySelector('#service-block');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });


    //Tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();

    //Slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            dots = document.querySelectorAll('.dot');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };


        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {

            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dots, currentSlide, 'dot-active');
                currentSlide++;
                if (currentSlide >= slide.length) {
                    currentSlide = 0;
                }
            } else if (target.matches('#arrow-left')) {
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dots, currentSlide, 'dot-active');
                currentSlide--;
                if (currentSlide < 0) {
                    currentSlide = slide.length - 1;
                }
            } else if (target.matches('.dot')) {
                dots.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(3000);
    };

    slider();

    //Change image
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

    changeCommandImages();

    //validation

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

    inputValidation();

    //calculator
    const calc = (price) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            console.log(typeValue);
            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = Math.floor(total);
        };

        calcBlock.addEventListener('input', (event) => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };

    calc(100);

    //send-ajax-form

    const sendForm = () => {
        const errorMessage = 'Something went wrong...',
            loadMessage = 'Loading...',
            successMessage = 'Thank you! We will contact you soon!';

        const form = document.getElementById('form1');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);

            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                statusMessage.textContent = loadMessage;

                if (request.readyState !== 4) {
                    return;
                }

                if (request.status === 200) {
                    statusMessage.textContent = successMessage;
                } else {
                    statusMessage.textContent = errorMessage;
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            request.send(JSON.stringify(body));

        });
    };


    sendForm();
});
