// ============================================
// INICJALIZACJA I KONFIGURACJA
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSidebar();
    initScrollEffects();
    initToggleInit();
    initVimModal();
    initScrollReveal();
    initCommandToggles();
    initCommandCardsAnimation();
});

// ============================================
// MOTYWY (localStorage + przełączanie)
// ============================================

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const colorPickerBtn = document.getElementById('colorPickerBtn');
    const colorPalette = document.getElementById('colorPalette');
    const colorOptions = document.querySelectorAll('.color-option');
    const body = document.body;
    
    // Pobierz ikony słońca i księżyca
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    // Pobierz zapisane ustawienia
    const savedTheme = localStorage.getItem('theme') || getPreferredTheme();
    const savedColor = localStorage.getItem('accentColor') || 'green';
    
    body.setAttribute('data-theme', savedTheme);
    body.setAttribute('data-color', savedColor);
    
    // Ustaw początkowe ikony
    updateThemeIcons(savedTheme, sunIcon, moonIcon);
    
    // Oznacz aktywny kolor
    updateActiveColor(savedColor);
    
    // Toggle jasny/ciemny
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme, sunIcon, moonIcon);
    });
    
    // Color picker toggle
    colorPickerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        colorPalette.classList.toggle('hidden');
    });
    
    // Zamknij palette przy kliknięciu poza nią
    document.addEventListener('click', (e) => {
        if (!colorPalette.contains(e.target) && e.target !== colorPickerBtn) {
            colorPalette.classList.add('hidden');
        }
    });
    
    // Wybór koloru
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const color = option.getAttribute('data-color');
            body.setAttribute('data-color', color);
            localStorage.setItem('accentColor', color);
            updateActiveColor(color);
            
            // Animacja zmiany
            option.style.transform = 'scale(1.3)';
            setTimeout(() => {
                option.style.transform = '';
            }, 200);
        });
    });
}

function updateThemeIcons(theme, sunIcon, moonIcon) {
    if (theme === 'light') {
        // Tryb jasny - pokaż słońce
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        // Tryb ciemny - pokaż księżyc
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

function updateActiveColor(color) {
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('active');
        if (opt.getAttribute('data-color') === color) {
            opt.classList.add('active');
        }
    });
}

function getPreferredTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// ============================================
// SIDEBAR & HAMBURGER MENU
// ============================================

function initSidebar() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle sidebar (mobile)
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        sidebar.classList.toggle('active');
        
        // Animacja morphingu SVG
        animateHamburger(!isExpanded);
    });
    
    // Zamknij sidebar po kliknięciu w link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Aktualizuj aktywny link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Zamknij sidebar na mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                animateHamburger(false);
            }
            
            // Smooth scroll z offsetem
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offset = 100;
                const targetPosition = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Zamknij sidebar przy kliknięciu poza nim (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
                sidebar.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                animateHamburger(false);
            }
        }
    });
    
    // Obsługa Intersection Observer dla automatycznej aktywacji linków
    initNavHighlight();
}

function animateHamburger(isOpen) {
    const topLine = document.querySelector('.hamburger-line-top');
    const middleLine = document.querySelector('.hamburger-line-middle');
    const bottomLine = document.querySelector('.hamburger-line-bottom');
    
    if (isOpen) {
        topLine.setAttribute('d', 'M6 6 L18 18');
        middleLine.style.opacity = '0';
        bottomLine.setAttribute('d', 'M6 18 L18 6');
    } else {
        topLine.setAttribute('d', 'M3 12h18');
        middleLine.style.opacity = '1';
        bottomLine.setAttribute('d', 'M3 18h18');
    }
}

// Automatyczne podświetlanie aktywnej sekcji
function initNavHighlight() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -66%',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// ============================================
// SCROLL EFFECTS (pasek postępu + przycisk do góry)
// ============================================

function initScrollEffects() {
    const progressBar = document.getElementById('progressBar');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    let ticking = false;
    
    // Throttled scroll handler
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateProgressBar();
                toggleScrollToTop();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Przycisk do góry
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    function updateProgressBar() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        
        progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
        progressBar.setAttribute('aria-valuenow', Math.round(scrollPercent));
    }
    
    function toggleScrollToTop() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 600) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
}

// ============================================
// TOGGLE INICJALIZACJI
// ============================================

function initToggleInit() {
    const toggleBtn = document.getElementById('toggleInit');
    const initCommands = document.getElementById('initCommands');
    
    if (!toggleBtn || !initCommands) return;
    
    toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        initCommands.classList.toggle('hidden');
        
        // Zmiana tekstu przycisku
        if (!isExpanded) {
            toggleBtn.innerHTML = `
                <svg class="toggle-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                Ukryj inicjalizację
            `;
        } else {
            toggleBtn.innerHTML = `
                <svg class="toggle-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                Pokaż inicjalizację
            `;
        }
    });
}

// ============================================
// AKORDEON KOMEND (Pokaż szczegóły)
// ============================================

function initCommandToggles() {
    const toggleButtons = document.querySelectorAll('.command-toggle');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.command-card');
            const details = card.querySelector('.command-details');
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            
            btn.setAttribute('aria-expanded', !isExpanded);
            details.classList.toggle('hidden');
            
            // Zmiana tekstu przycisku
            const span = btn.querySelector('span');
            if (!isExpanded) {
                span.textContent = 'Ukryj szczegóły';
            } else {
                span.textContent = 'Pokaż szczegóły';
            }
        });
    });
}

// ============================================
// VIM MODAL
// ============================================

function initVimModal() {
    const modal = document.getElementById('vimModal');
    const closeBtn = document.getElementById('modalClose');
    
    if (!modal || !closeBtn) return;
    
    // Zamknij modal
    closeBtn.addEventListener('click', closeVimModal);
    
    // Zamknij przy kliknięciu w overlay
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVimModal();
        }
    });
    
    // Zamknij przy ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeVimModal();
        }
    });
}

function openVimModal() {
    const modal = document.getElementById('vimModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus na przycisk zamknięcia
    setTimeout(() => {
        document.getElementById('modalClose').focus();
    }, 100);
}

function closeVimModal() {
    const modal = document.getElementById('vimModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.content-section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        revealObserver.observe(el);
    });
}

// ============================================
// KOPIOWANIE DO SCHOWKA
// ============================================

function copyToClipboard(text, buttonElement) {
    if (!navigator.clipboard) {
        // Fallback dla starszych przeglądarek
        copyToClipboardFallback(text);
        showCopySuccess(buttonElement);
        return;
    }
    
    navigator.clipboard.writeText(text)
        .then(() => {
            showCopySuccess(buttonElement);
        })
        .catch(err => {
            console.error('Błąd kopiowania:', err);
        });
}

function showCopySuccess(buttonElement) {
    // Dodaj klasę "copied"
    buttonElement.classList.add('copied');
    
    // Zmień ikonę na zielony checkmark
    const originalSVG = buttonElement.querySelector('svg');
    if (originalSVG) {
        originalSVG.classList.add('copy-icon');
        
        // Dodaj zielony checkmark SVG z grubszą linią
        const checkSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        checkSVG.setAttribute('width', '20');
        checkSVG.setAttribute('height', '20');
        checkSVG.setAttribute('viewBox', '0 0 24 24');
        checkSVG.setAttribute('fill', 'none');
        checkSVG.setAttribute('stroke', '#ffffff');
        checkSVG.setAttribute('stroke-width', '3');
        checkSVG.setAttribute('stroke-linecap', 'round');
        checkSVG.setAttribute('stroke-linejoin', 'round');
        checkSVG.classList.add('check-icon');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        path.setAttribute('points', '20 6 9 17 4 12');
        checkSVG.appendChild(path);
        
        buttonElement.appendChild(checkSVG);
    }
    
    // Pokaż tooltip
    showCopyTooltip(buttonElement);
    
    // Resetuj po 2 sekundach
    setTimeout(() => {
        buttonElement.classList.remove('copied');
        const checkIcon = buttonElement.querySelector('.check-icon');
        if (checkIcon) {
            checkIcon.remove();
        }
    }, 2000);
}

function copyToClipboardFallback(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Błąd kopiowania (fallback):', err);
    }
    
    document.body.removeChild(textarea);
}

function showCopyTooltip(buttonElement) {
    const tooltip = document.getElementById('copyTooltip');
    const rect = buttonElement.getBoundingClientRect();
    
    // Pozycjonowanie
    tooltip.style.left = `${rect.left + (rect.width / 2)}px`;
    tooltip.style.top = `${rect.top - 40}px`;
    tooltip.style.transform = 'translateX(-50%)';
    
    // Pokaż tooltip
    tooltip.classList.add('show');
    
    // Ukryj po 1200ms
    setTimeout(() => {
        tooltip.classList.remove('show');
    }, 1200);
}

// ============================================
// ANIMACJE KART KOMEND (stagger reveal)
// ============================================

function initCommandCardsAnimation() {
    const commandCards = document.querySelectorAll('.command-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Opóźnienie dla efektu stagger (kaskadowego)
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, delay);
                
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    commandCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'opacity 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        cardObserver.observe(card);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Throttle function dla wydajności
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Export funkcji do użycia w HTML
window.openVimModal = openVimModal;
window.copyToClipboard = copyToClipboard;
