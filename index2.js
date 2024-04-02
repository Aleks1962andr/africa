    const input = document.querySelector("#guess");
    const button = document.querySelector("#btn");
    const attemptsText = document.querySelector("#attempts-text");
    const answer = Math.floor(Math.random() * 20) + 1;
    let attempts = 5;
    let gameFinished = false; 

    input.addEventListener("keypress", function (e) {
        if (e.keyCode === 13 && !gameFinished) {
            play();
        }
    });

    button.addEventListener("click", function () {
        if (!gameFinished) {
            play();
        }
    });

    function play() {
        const userNumber = document.querySelector("#guess").value;

        if (userNumber < 1 || userNumber > 20) {
            Swal.fire({
                title: "Ошибка!!!<br> Введи число от 1 до 20!",
                    imageUrl: "32545.jpg",
                    imageWidth: 380,
                    imageHeight: 300,
                    imageAlt: "Custom image",
                    customClass: {
                    popup: 'custom-popup-class3',
                    }                    
            });
        } else if (isNaN(userNumber)) {
            Swal.fire({
                title: "Ошибка!!!<br> Нужно ввести число!",
                imageUrl: "32545.jpg",
                imageWidth: 380,
                imageHeight: 300,
                imageAlt: "Custom image",
                customClass: {
                popup: 'custom-popup-class3',
                }                    

            });
        } else {
            if (userNumber < answer) {
                Swal.fire({
                    
                    title: "Попробуй число повыше",
                    imageUrl: "27733.jpg",
                    imageWidth: 260,
                    imageHeight: 300,
                    imageAlt: "Custom image",
                    customClass: {
                    popup: 'custom-popup-class',
                    }                    
            });
            } else if (userNumber > answer) {
                Swal.fire({
                    
                    title: "Попробуй число пониже",
                    imageUrl: "22212.jpg",
                    imageWidth: 260,
                    imageHeight: 300,
                    imageAlt: "Custom image",
                    customClass: {
                    popup: 'custom-popup-class',
                    }                    
            });
            } else {
                Swal.fire({
                    title: "Победа!",
                    imageUrl: "pl2d_j5yd_210524.jpg",
                    imageWidth: 300,
                    imageHeight: 370,
                    imageAlt: "Победа!",
                    customClass: {
                    popup: 'custom-popup-class1',
                        }                    
                });

                gameFinished = true; 
            }

            attempts--;
            attemptsText.textContent = `Осталось попыток: ${attempts}`;
            
            if (attempts === 0) {
                Swal.fire({
                    title: `Вы проиграли. Загаданное число было ${answer}.`,
                    imageUrl: "proigr.jpg",
                    imageWidth: 300,
                    imageHeight: 380,
                    imageAlt: "Поражение!",
                    customClass: {
                    popup: 'custom-popup-class2',
                            }                    
                });

                    gameFinished = true; 
            }
        }
    }
    let text = "Угадай сколько животных скрывается в саванне";
	let i = 0;
	let speed = 150;
	let delay = 1200; 
		
	function typeText(callback) {
	if (i < text.length) {
	document.querySelector(".heading").textContent += text.charAt(i);
		i++;
	 		setTimeout(function () {
	 			typeText(callback);
	 		}, speed);
	 	} else {
	 		callback();
	 	}
	 }
	
	setTimeout(function () {
		typeText();
	 }, delay);

    gsap.fromTo('#container', { duration: 3, delay: 6.0, y: 300, opacity: 0 },{y:100, delay: 6.0, duration: 3, opacity: 1})






