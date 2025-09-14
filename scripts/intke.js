      window.addEventListener('scroll', () => {
            const cards = document.querySelectorAll('.program-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.opacity = '1';
                }
            });
        });


        // Add parallax effect to floating elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-elements > div');
            
            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Add dynamic background color change on scroll
        window.addEventListener('scroll', () => {
            const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
            const hue = Math.floor(120 + (scrollPercent * 40)); // Green to yellow transition
            document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 50%, 95%) 0%, hsl(${hue + 20}, 60%, 90%) 100%)`;
        });