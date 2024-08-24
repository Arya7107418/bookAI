function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default link behavior

            const targetId = this.getAttribute('href').substring(1); // Get the ID from the href attribute
            const targetElement = document.getElementById(targetId); // Get the target element

            if (targetElement) {
                // Scroll to the target element smoothly
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust the offset if there's a fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // API Key generation
    const generateApiButton = document.querySelector('.generate-api');
    generateApiButton.addEventListener('click', function () {
        const apiKey = generateApiKey();
        document.getElementById('gen-api').innerText = `Your API Key: ${apiKey}`;
        document.getElementById('gen-api').style.marginTop = "10px";
        document.getElementById('gen-api').style.fontWeight = "600";

        // Add active class for click effect
        generateApiButton.classList.add('active');
        
        // Remove active class after a short delay
        setTimeout(() => {
            generateApiButton.classList.remove('active');
        }, 150); // Adjust the delay as needed
    });

    function generateApiKey() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let apiKey = '';
        for (let i = 0; i < 32; i++) {
            apiKey += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return apiKey;
    }
});
