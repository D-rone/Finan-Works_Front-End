 
            const header = document.querySelector("header"); 
            let navlist = document.querySelector(".navlist"); 
            let scroll = document.querySelector(".scroll");

            window.addEventListener("scroll", function () {
                header.classList.toggle("sticky" , window.scrollY > 80);
                navlist.classList.toggle("middle" , window.scrollY > 80);
                scroll.classList.toggle("scroll-tt" , window.scrollY > 650);
            })



            let menu = document.querySelector("#menu-icon");

            menu.onclick = () => {
                menu.classList.toggle("bx-x");
                navlist.classList.toggle("open");
            }; 

            window.onscroll = () => {
                menu.classList.remove("bx-x");
                navlist.classList.remove("open");
            }; 


            const text = document.querySelector('.text p');
            const text2 = document.querySelector('.text2 p');

            text.innerHTML = text.innerHTML.split("").map (
                (char, i) =>
                `<span style="transform:rotate(${i * 14.2}deg)">${char}</span>`
            ).join("")

            text2.innerHTML = text2.innerHTML.split("").map (
                (char, i) =>
                `<span style="transform:rotate(${i * 11}deg)">${char}</span>`
            ).join("")


            var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            grabCursor: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            });


            const toggleBtns = document.querySelectorAll('.toggle-btn');

            toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const box = btn.parentNode;
                const answer = box.querySelector('.answer');

                if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                btn.innerHTML = "<i class='bx bx-plus'></i>";
                } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                btn.innerHTML = "<i class='bx bx-minus'></i>";
                
                }
            });
            });

        let year = new Date().getFullYear();
          document.querySelector('.year').innerText += year;


          const sr = ScrollReveal ({
                origin : 'top',
                distance : '85px',
                duration : 2500, 
                reset : true 
            })

            sr.reveal('.home-text' , {delay: 300});
            sr.reveal('.home-img' , {delay: 400});
            sr.reveal('.container' , {delay: 300});

            sr.reveal('.boxs' , {});
            sr.reveal('.testimoniall' , {delay: 300});

            sr.reveal('.box1' , {delay: 300});
            sr.reveal('.box2' , {delay: 320});
            sr.reveal('.box3' , {delay: 340});
            sr.reveal('.box4' , {delay: 360});
            sr.reveal('.box5' , {delay: 380});
            sr.reveal('.box6' , {delay: 400});


            let logod = document.querySelectorAll(".logo-dark");
            let logol = document.querySelectorAll(".logo-light");

            var checkbox = document.querySelector("input[name=theme]");
            checkbox.addEventListener("change", function () {
            if (this.checked) {
                trans();
                document.documentElement.setAttribute("data-theme", "dark");

                for (var i = 0; i < logod.length; i++) {
                    logod[i].classList.toggle("logo-dark-hide");
                }

                for (var i = 0; i < logol.length; i++) {
                    logol[i].classList.toggle("logo-light-show");
                }

            } else {
                trans();
                document.documentElement.setAttribute("data-theme", "light");

                for (var i = 0; i < logod.length; i++) {
                    logod[i].classList.toggle("logo-dark-hide");
                }

                for (var i = 0; i < logol.length; i++) {
                    logol[i].classList.toggle("logo-light-show");
                }

            }
            });

            let trans = () => {
            document.documentElement.classList.add("transition");
            window.setTimeout(() => {
                document.documentElement.classList.remove("transition");
            }, 300);
            };