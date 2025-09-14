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

        // click handlers for register buttons
        document.addEventListener('DOMContentLoaded', () => {
            const registerButtons = document.querySelectorAll('button');
            registerButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Create ripple effect
                    const ripple = document.createElement('span');
                    const rect = button.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.width = ripple.style.height = size + 'px';
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    ripple.classList.add('ripple');
                    
                    button.appendChild(ripple);
                    
                    // Simulate registration process
                    button.innerHTML = '⏳ PROCESSING...';
                    button.disabled = true;
                    
                    setTimeout(() => {
                        button.innerHTML = '✅ REGISTRATION OPENED';
                        setTimeout(() => {
                            // Open registration link (replace with actual registration URL)
                            window.open('mailto:info.nelcentre@gmail.com', '_blank');
                            button.innerHTML = '🚀 REGISTER NOW';
                            button.disabled = false;
                        }, 1500);
                    }, 2000);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
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