document.addEventListener('DOMContentLoaded', () => {
    const bootScreen = document.getElementById('boot-screen');
    const bootText = document.getElementById('boot-text-container');
    const mainContent = document.getElementById('main-content');
    
    // Custom Boot Message
    const introStr = "FARHAN | FULL-STACK DEVELOPER,\nENGINEERING SLEEK, SCALABLE WEB SOLUTIONS THAT ALIGN PERFECTLY WITH YOUR VISION.";
    let charIdx = 0;

    function typeBoot() {
        if (charIdx < introStr.length) {
            // Handle line breaks specifically for HTML
            if (introStr[charIdx] === "\n") {
                bootText.innerHTML += "<br>";
            } else {
                bootText.innerHTML += introStr[charIdx];
            }
            charIdx++;
            setTimeout(typeBoot, 40); 
        } else {
            setTimeout(revealSite, 1500); 
        }
    }

    function revealSite() {
        bootScreen.style.transition = 'opacity 0.8s ease-in-out';
        bootScreen.style.opacity = '0';
        setTimeout(() => {
            bootScreen.style.display = 'none';
            mainContent.style.display = 'flex';
            setTimeout(() => {
                mainContent.style.opacity = '1';
                initTypewriters();
            }, 50);
        }, 800);
    }

    function initTypewriters() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting && !e.target.classList.contains('done')) {
                    animateText(e.target);
                    e.target.classList.add('done');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.type-me').forEach(el => observer.observe(el));
    }

    function animateText(el) {
        const fullText = el.textContent;
        el.textContent = '';
        el.style.visibility = 'visible';
        el.classList.add('typing-cursor');
        let i = 0;
        function step() {
            if (i < fullText.length) {
                el.textContent += fullText[i++];
                setTimeout(step, 25); 
            } else { 
                el.classList.remove('typing-cursor'); 
            }
        }
        step();
    }

    // Start the process
    typeBoot();
});
