document.addEventListener("DOMContentLoaded", () => {
    const loadMoreBtn = document.getElementById("load-more");
    const additionalContent = document.querySelector(".additional-content");

    const sections = [
        {
            text: "C'est d'ailleurs après ce premier regard à l'entrée d'un parking que nous avons cuisiné ensemble pour la première fois 🍳❤️ !",
            image: "images/premier_repas.jpeg"
        },
        {
            text: "Et puis il y a eu les premiers week-ends chez l'un, chez l'autre (mais surtout en Bretagne).",
            image: "images/premiers_we_bretagne1.jpeg"
        },
        {
            text: "À un moment, il fallait bien officialiser ça : je t'ai dit 'oui' (le premier et pas le dernier, je l'espère).",
            image: "images/premier_oui.jpeg"
        },
        {
            text: "On s'est découvert des passions communes comme les visites de château. Je suis sûr qu'on était vicomte et vicomtesse dans une autre vie 🏰✨.",
            image: "images/premier_chateau.jpeg"
        },
        {
            text: "Le commencement des expériences culinaires risquées... T'es tellement plus douée pour le gyoza artistique.",
            image: "images/premieres_experiences_culinaires.jpeg"
        },
        {
            text: "Le premier envol d'une longue liste, pour sûr ! T'as un beau billet cadeau pour le prochain voyage maintenant 🛫 ",
            image: "images/premier_envol.jpeg"
        },
        {
            text: "Plein d'autres vols à l'avenir, mais aussi plein d'autres aventures en camion 🚐...",
            image: "images/premier_camion.jpeg"
        },
        {
            text: "... pour découvrir encore d'autres plages magnifiques et rêver, le regard perdu dans l'horizon.",
            image: "images/premiere_plage.jpeg"
        },
        {
            text: "Mais avant tout ça, il faut que tu saches qu'il y a une petite fille qui serait très fière et rassurée de voir ce que la Margaux de 29 ans maintenant est devenue. Une femme forte, géniale et magnifique 💖 ! Encore bon anniversaire mon amour 💝.",
            image: "images/margaux_petite.jpg"
        }        
    ];

    let currentIndex = 0;

    loadMoreBtn.addEventListener("click", () => {
        if (currentIndex < sections.length) {
            loadMoreBtn.style.visibility = "hidden";

            const section = document.createElement("div");
            section.classList.add("new-section");

            const textContainer = document.createElement("div");
            textContainer.classList.add("text-content");
            section.appendChild(textContainer);

            const img = document.createElement("img");
            img.src = sections[currentIndex].image;
            img.alt = `Photo ${currentIndex + 1}`;
            img.style.opacity = 0;
            img.style.transition = "opacity 0.5s ease-in-out";

            additionalContent.appendChild(section);

            typeText(sections[currentIndex].text, textContainer, () => {
                textContainer.classList.add("writing-complete");
                section.appendChild(img);
                setTimeout(() => {
                    img.style.opacity = 1;
                    if (currentIndex < sections.length - 1) {
                        loadMoreBtn.style.visibility = "visible";
                    } else {
                        loadMoreBtn.style.display = "none";
                    }
                    currentIndex++;
                }, 200);
            });
        }
    });

    function typeText(text, container, callback) {
        let i = 0;
        const typingSpeed = 50;
        const errorProbability = 0.02;
        let isDeleting = false;

        function type() {
            if (i < text.length) {
                if (Math.random() < errorProbability && !isDeleting) {
                    const incorrectChar = String.fromCharCode(
                        Math.floor(Math.random() * 26) + 97
                    );
                    container.textContent += incorrectChar;
                    isDeleting = true;

                    setTimeout(() => {
                        container.textContent = container.textContent.slice(0, -1);
                        isDeleting = false;
                        type();
                    }, typingSpeed / 2);
                } else {
                    container.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, typingSpeed);
                }
            } else {
                setTimeout(callback, 1000);
            }
        }

        type();
    }
});
