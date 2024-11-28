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

            const paragraph = document.createElement("p");
            paragraph.classList.add("typewriter-text");

            section.appendChild(paragraph);
            additionalContent.appendChild(section);

            typeText(sections[currentIndex].text, paragraph, () => {
                const img = document.createElement("img");
                img.src = sections[currentIndex].image;
                img.alt = `Photo ${currentIndex + 1}`;
                img.style.opacity = 0;
                section.appendChild(img);

                setTimeout(() => {
                    img.style.opacity = 1;
                }, 200);

                if (currentIndex < sections.length - 1) {
                    loadMoreBtn.style.visibility = "visible";
                } else {
                    loadMoreBtn.style.display = "none";
                }

                currentIndex++; // Incrémente après l'affichage
            });
        }
    });

    function typeText(text, element, callback) {
        let i = 0;
        const typingSpeed = 80;
        const errorProbability = 0.08;
        let isMakingError = false;
    
        function type() {
            if (!isMakingError && Math.random() < errorProbability && i > 0) {
                isMakingError = true;
                element.textContent = element.textContent.slice(0, -1);
                setTimeout(type, typingSpeed / 2);
            } else if (isMakingError) {

                isMakingError = false;
                setTimeout(type, typingSpeed);
            } else if (i < text.length) {

                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, typingSpeed);
            } else {

                callback();
            }
        }
    
        type();
    }
    
});
