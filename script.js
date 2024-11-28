document.addEventListener("DOMContentLoaded", () => {
    const loadMoreBtn = document.getElementById("load-more");
    const additionalContent = document.querySelector(".additional-content");

    const sections = [
        {
            text: "C'est d'ailleurs après ce premier regard à l'entrée d'un parking que nous avons cuisiné ensemble pour la première fois!",
            image: "images/premier_repas.jpeg"
        },
        {
            text: "C'est d'ailleurs après ce premier regard à l'entrée d'un parking que nous avons cuisiné ensemble pour la première fois!",
            image: "images/premiers_we_bretagne1.jpeg"
        },
        {
            text: "C'est d'ailleurs après ce premier regard à l'entrée d'un parking que nous avons cuisiné ensemble pour la première fois!",
            image: "images/premier_oui.jpeg"
        },
        {
            text: "C'est d'ailleurs après ce premier regard à l'entrée d'un parking que nous avons cuisiné ensemble pour la première fois!",
            image: "images/premier_chateau.jpeg"
        },
        {
            text: "C'est d'ailleurs après ce premier regard à l'entrée d'un parking que nous avons cuisiné ensemble pour la première fois!",
            image: "images/premieres_experiences_culinaires.jpeg"
        },
        {
            text: "C'est d'ailleurs après ce premier regard à l'entrée d'un parking que nous avons cuisiné ensemble pour la première fois!",
            image: "images/premier_envol.jpeg"
        }
    ];

    let currentIndex = 0;

    loadMoreBtn.addEventListener("click", () => {
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
                section.appendChild(img);

                setTimeout(() => {
                    img.style.opacity = 1;
                }, 200);

                if (currentIndex === sections.length - 1) {
                    loadMoreBtn.style.display = "none";
                }
            });

            currentIndex++;
        }
    });

    function typeText(text, element, callback) {
        let i = 0;
        const typingSpeed = 50;
        const errorProbability = 0.1;

        function type() {
            if (i < text.length) {
                if (Math.random() < errorProbability && i > 0) {
                    element.textContent = element.textContent.slice(0, -1);
                    setTimeout(type, typingSpeed / 2);
                } else {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, typingSpeed);
                }
            } else {
                callback();
            }
        }

        type();
    }
});
