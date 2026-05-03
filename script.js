// ===========================
// Intro + Envelope + Typewriter
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const introOverlay = document.getElementById('introOverlay');
    const envelopeStage = document.getElementById('envelopeStage');
    const openEnvelope = document.getElementById('openEnvelope');
    const siteContent = document.getElementById('siteContent');
    const parentsNames = document.getElementById('parentsNames');

    const revealContent = () => {
        if (!siteContent) return;
        siteContent.classList.remove('is-hidden');
        siteContent.classList.add('is-visible');
    };

    const startTypewriter = () => {
        if (!parentsNames || parentsNames.dataset.typed === 'true') return;
        const fullText = parentsNames.dataset.fullText || parentsNames.textContent.trim();
        parentsNames.textContent = '';
        let index = 0;

        const typeNext = () => {
            parentsNames.textContent += fullText.charAt(index);
            index += 1;
            if (index <= fullText.length) {
                setTimeout(typeNext, 70);
            } else {
                parentsNames.dataset.typed = 'true';
            }
        };

        setTimeout(typeNext, 250);
    };

    setTimeout(() => {
        if (introOverlay) {
            introOverlay.classList.add('is-hidden');
        }
        if (envelopeStage) {
            envelopeStage.classList.remove('is-hidden');
            envelopeStage.setAttribute('aria-hidden', 'false');
        } else {
            revealContent();
            startTypewriter();
        }
    }, 1800);

    if (openEnvelope && envelopeStage) {
        openEnvelope.addEventListener('click', () => {
            openEnvelope.classList.add('is-open');
            setTimeout(() => {
                envelopeStage.classList.add('is-hidden');
                envelopeStage.setAttribute('aria-hidden', 'true');
                revealContent();
                startTypewriter();
            }, 1100);
        });
    }
});

// ===========================
// Countdown Timer
// ===========================
function updateCountdown() {
    const eventDate = new Date('2026-05-07T15:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<h3>कार्यक्रम सुरू झाला आहे! 🎉</h3>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
}

// ===========================
// Rotating Baby Quotes
// ===========================
const babyQuotes = [
    'इवले इवले माझे हात,\nइवले इवले माझे पाय,\nमी आलो आहे तुमच्या घरी,\nआनंद घेऊन नवीन जीवनाचा!',
    'लहानशा हास्यात मोठं सुख असतं,\nचिमुकल्या पावलांत उद्याचं स्वप्न असतं,\nया बाळाच्या आयुष्यात आनंद नांदो,\nप्रेम, आरोग्य, आणि भरभराट सदा असो.',
    'नाव हे ओळख असते,\nप्रेम हे ओलावा असतो,\nया कोवळ्या जीवाच्या आयुष्यात,\nआशीर्वादांचा वर्षाव असो.',
    'घरातल्या या नव्या फुलाला,\nसुख, शांती आणि समृद्धी लाभो,\nत्याच्या प्रत्येक पावलाला,\nयशाची सुंदर दिशा लाभो.'
];

let quoteIndex = 0;

function updateBabyQuote() {
    const quoteElement = document.getElementById('dynamicQuote');
    if (!quoteElement) return;

    quoteElement.classList.remove('fade-in');
    void quoteElement.offsetWidth;
    quoteElement.textContent = babyQuotes[quoteIndex];
    quoteElement.classList.add('fade-in');

    quoteIndex = (quoteIndex + 1) % babyQuotes.length;
}

updateBabyQuote();
setInterval(updateBabyQuote, 5000);

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ===========================
// Music Toggle
// ===========================
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🔇';
        isPlaying = false;
    } else {
        bgMusic.play().catch(err => {
            console.log('Audio playback failed:', err);
            alert('कृपया ऑडिओ प्ले करण्यासाठी परवानगी द्या');
        });
        musicToggle.textContent = '🔊';
        isPlaying = true;
    }
});

// ===========================
// Blessings Function
// ===========================
function saveBlessings() {
    const blessingsInput = document.getElementById('blessingsInput');
    const blessing = blessingsInput.value.trim();
    
    if (blessing === '') {
        alert('कृपया आपले आशीर्वाद लिहा');
        return;
    }
    
    // Store in localStorage
    const blessings = JSON.parse(localStorage.getItem('blessings') || '[]');
    blessings.push({
        text: blessing,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('blessings', JSON.stringify(blessings));
    
    // Show success message
    alert('धन्यवाद! आपले आशीर्वाद प्राप्त झाले 🙏');
    blessingsInput.value = '';
    
    // Optional: Send to backend/WhatsApp
    // sendBlessingToWhatsApp(blessing);
}

// ===========================
// Open Map Function
// ===========================
function openMap() {
    // Replace with actual coordinates
    const location = '20.4350877, 75.9938985';
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(mapsUrl, '_blank');
}

// ===========================
// Get Directions Function
// ===========================
function getDirections() {
    // Open Google Maps with directions to the location
    const destination = '20.4350877,75.9938985';
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(directionsUrl, '_blank');
}

// ===========================
// Share Invitation Function
// ===========================
function shareInvitation() {
    const shareText = `🎉 नामकरण सोहळा 🎉\n\nआपल्याला आमच्या बाळाच्या नामकरण सोहळ्यास आमंत्रित करण्यात आम्हाला आनंद होत आहे!\n\n📅 दिनांक: गुरुवार, 07 मे 2026\n⏰ वेळ: दुपारी 03:00 वाजता\n📍 स्थळ: सोयगाव, महाराष्ट्र 443106\n\nकृपया आपल्या कुटुंबासह पधारा!\n\n${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'नामकरण सोहळा',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback to WhatsApp
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(whatsappUrl, '_blank');
    }
}


// ===========================
// Smooth Scroll Animation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// ===========================
// Image Error Handling
// ===========================


document.getElementById('qrCode').addEventListener('error', function() {
    this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23FFF" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="16" text-anchor="middle" dy=".3em" fill="%238B0000"%3EQR Code%3C/text%3E%3C/svg%3E';
});

// ===========================
// Performance Optimization
// ===========================
// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===========================
// Console Welcome Message
// ===========================
console.log('%c🎉 नामकरण सोहळा 🎉', 'font-size: 24px; color: #8B0000; font-weight: bold;');
console.log('%cWelcome to our Naming Ceremony Invitation!', 'font-size: 16px; color: #D4AF37;');
console.log('%cDeveloped with ❤️', 'font-size: 14px; color: #5C4033;');

// ===========================
// Optional: WhatsApp Integration
// ===========================
function sendBlessingToWhatsApp(blessing) {
    const phoneNumber = '917666812421'; // Replace with actual number
    const message = `नवीन आशीर्वाद प्राप्त झाले:\n\n${blessing}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Uncomment to enable
    // window.open(whatsappUrl, '_blank');
}


// ===========================
// Service Worker Registration (Optional PWA)
// ===========================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ===========================
// Three.js 3D Background Animation
// ===========================
function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    // Use the hero section for dimensions since we placed it there
    const heroSection = document.querySelector('.hero-section');
    const width = heroSection.clientWidth;
    const height = heroSection.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create particles (petals/confetti)
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    const rotations = [];
    const rotationSpeeds = [];

    for (let i = 0; i < particleCount; i++) {
        // Random positions
        positions[i * 3] = (Math.random() - 0.5) * 200; // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z

        // Falling velocity
        velocities.push({
            x: (Math.random() - 0.5) * 0.2,
            y: -(Math.random() * 0.5 + 0.2), // Falling down
            z: (Math.random() - 0.5) * 0.2
        });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom petal-like texture/material using Canvas
    const createPetalTexture = () => {
        const pCanvas = document.createElement('canvas');
        pCanvas.width = 32;
        pCanvas.height = 32;
        const ctx = pCanvas.getContext('2d');
        
        ctx.beginPath();
        ctx.arc(16, 16, 12, 0, Math.PI * 2);
        ctx.fillStyle = '#D4AF37'; // Secondary gold color
        ctx.fill();
        
        // Add some gradient or highlight
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 12);
        gradient.addColorStop(0, '#FFF8E7');
        gradient.addColorStop(1, '#D4AF37');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        const texture = new THREE.CanvasTexture(pCanvas);
        return texture;
    };

    const material = new THREE.PointsMaterial({
        size: 3,
        map: createPetalTexture(),
        transparent: true,
        opacity: 0.8,
        depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        const positions = particles.geometry.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
            // Update positions
            positions[i * 3] += velocities[i].x; // x
            positions[i * 3 + 1] += velocities[i].y; // y
            positions[i * 3 + 2] += velocities[i].z; // z

            // Reset particle to top if it falls below screen
            if (positions[i * 3 + 1] < -100) {
                positions[i * 3 + 1] = 100;
                positions[i * 3] = (Math.random() - 0.5) * 200;
            }
            
            // Slowly sway left and right
            velocities[i].x += (Math.random() - 0.5) * 0.01;
            // Cap horizontal velocity
            if(velocities[i].x > 0.5) velocities[i].x = 0.5;
            if(velocities[i].x < -0.5) velocities[i].x = -0.5;
        }

        particles.geometry.attributes.position.needsUpdate = true;
        
        // Slightly rotate the entire particle system
        particles.rotation.y += 0.001;

        renderer.render(scene, camera);
    }
    
    animate();

    // Handle Window Resize
    window.addEventListener('resize', () => {
        const newWidth = heroSection.clientWidth;
        const newHeight = heroSection.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });
}

// ===========================
// Photo Gallery Stack Animation
// ===========================
function initGalleryStack() {
    const cards = document.querySelectorAll('.gallery-card');
    if (cards.length === 0) return;
    
    let currentIndex = 0;
    
    function updateCards() {
        cards.forEach((card, index) => {
            card.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.6s ease, z-index 0s';
            
            // Calculate relative index (0 is top card, 1 is next, etc)
            let relativeIndex = index - currentIndex;
            if (relativeIndex < 0) {
                relativeIndex += cards.length;
            }
            
            // Top card
            if (relativeIndex === 0) {
                card.style.opacity = '1';
                card.style.transform = 'translateZ(0px) translateY(0px) scale(1)';
                card.style.zIndex = cards.length;
            } 
            // Second card
            else if (relativeIndex === 1) {
                card.style.opacity = '0.9';
                card.style.transform = 'translateZ(-50px) translateY(20px) scale(0.95)';
                card.style.zIndex = cards.length - 1;
            }
            // Third card
            else if (relativeIndex === 2) {
                card.style.opacity = '0.7';
                card.style.transform = 'translateZ(-100px) translateY(40px) scale(0.9)';
                card.style.zIndex = cards.length - 2;
            }
            // Hidden cards (moved to the back)
            else {
                card.style.opacity = '0';
                card.style.transform = 'translateZ(-150px) translateY(60px) scale(0.8)';
                card.style.zIndex = 0;
                
                // If it's the one that just animated out, do a quick flip-out
                if (relativeIndex === cards.length - 1) {
                    card.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.4s ease, z-index 0s 0.6s';
                    card.style.transform = 'translateZ(100px) translateY(-50px) translateX(100px) scale(1.1) rotate(15deg)';
                    card.style.opacity = '0';
                }
            }
        });
    }

    updateCards();

    // Auto-advance
    setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    }, 2500);
    
    // Click to advance
    document.getElementById('galleryStack').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    });
}

// Ensure scripts initialize after DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initThreeJS();
        initGalleryStack();
    });
} else {
    initThreeJS();
    initGalleryStack();
}
