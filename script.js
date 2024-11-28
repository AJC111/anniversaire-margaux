document.addEventListener("DOMContentLoaded", () => {
    const loadMoreBtn = document.getElementById("load-more");
    const additionalContent = document.querySelector(".additional-content");

    const sections = [
        {
            text: "C'est d'ailleurs après ce premier regard à l'entrée d'un parking que nous avons cuisiné ensemble pour la première fois!",
            image: "images/premier_repas.jpeg"
        },
        {
            text: "Nos premiers week-ends en Bretagne ont marqué le début d'une belle aventure à deux.",
            image: "images/premiers_we_bretagne1.jpeg"
        },
        {
            text: "Le premier 'oui' échangé restera un moment gravé dans nos mémoires.",
            image: "images/premier_oui.jpeg"
        },
        {
            text: "Une visite de château pour célébrer notre complicité et notre amour grandissant.",
            image: "images/premier_chateau.jpeg"
        },
        {
            text: "Des expériences culinaires amusantes et pleines de saveurs.",
            image: "images/premieres_experiences_culinaires.jpeg"
        },
        {
            text: "Le premier envol de nos rêves communs, toujours plus haut.",
            image: "images/premier_envol.jpeg"
        }
    ];

    let currentIndex = 0;

    loadMoreBtn.addEventListener("click", () => {
        loadMoreBtn.style.visibility = "hidden";

        if (currentIndex < sections.length) {
            const section = document.createElement("div");
            section.classList.add("new-section");

            const textContainer = document.createElement("div");
            textContainer.classList.add("text-container");
            section.appendChild(textContainer);

            const img = document.createElement("img");
            img.src = sections[currentIndex].image;
            img.alt = `Photo ${currentIndex + 1}`;
            img.style.opacity = 0;
            img.style.transition = "opacity 0.5s ease-in-out";

            additionalContent.appendChild(section);

            typeText(sections[currentIndex].text, textContainer, () => {
                section.appendChild(img);
                setTimeout(() => {
                    img.style.opacity = 1; 
                    if (currentIndex < sections.length - 1) {
                        loadMoreBtn.style.visibility = "visible";
                    } else {
                        loadMoreBtn.style.display = "none";
                    }
                }, 200);
            });

            currentIndex++;
        }
    });

    function typeText(text, container, callback) {
        let i = 0;
        const typingSpeed = 50;
        const errorProbability = 0.03;
        let isDeleting = false;

        container.innerHTML = `<span class="text-content"></span><span class="typewriter-caret"></span>`;
        const textContent = container.querySelector(".text-content");
        const caret = container.querySelector(".typewriter-caret");

        function type() {
            if (i < text.length) {
                if (Math.random() < errorProbability && !isDeleting) {
                    const incorrectChar = String.fromCharCode(
                        Math.floor(Math.random() * 26) + 97
                    );
                    textContent.textContent += incorrectChar;
                    isDeleting = true;

                    setTimeout(() => {
                        textContent.textContent = textContent.textContent.slice(0, -1);
                        isDeleting = false;
                        type();
                    }, typingSpeed / 2);
                } else {
                    textContent.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, typingSpeed);
                }
            } else {

                setTimeout(() => {
                    caret.remove();
                    callback();
                }, 1000);
            }
        }

        type();
    }
});
