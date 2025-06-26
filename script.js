document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links (giữ lại tính năng này)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Theme Switcher ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeIcon = themeSwitcher.querySelector('i');

    // Hàm để đặt theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', theme);
    };

    // Lấy theme đã lưu hoặc theme mặc định của hệ thống
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');

    // Đặt theme ban đầu khi tải trang
    setTheme(currentTheme);

    // Bắt sự kiện click để chuyển theme
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // --- Collapse/Expand Logic for Tool Sections ---
    // Function to apply collapse/expand logic to a given section
    function applyCollapseExpand(sectionSelector) {
        const toolItems = document.querySelectorAll(sectionSelector + ' .tool-item');

        toolItems.forEach(item => {
            const header = item.querySelector('.tool-header');
            const toggleButton = item.querySelector('.toggle-details');
            const toolDetails = item.querySelector('.tool-details');

            // Ensure all necessary elements exist before adding event listeners
            if (header && toggleButton && toolDetails) {
                header.addEventListener('click', (event) => {
                    // Prevent toggling if the click originated from the link inside the header
                    if (event.target.closest('a')) {
                        return;
                    }

                    // Đóng tất cả các mục khác trong cùng một phần
                    toolItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('expanded');
                            const otherToggleButton = otherItem.querySelector('.toggle-details');
                            if (otherToggleButton) otherToggleButton.setAttribute('aria-expanded', 'false');
                        }
                    });

                    // Chuyển đổi (toggle) trạng thái của mục được nhấp
                    // Nếu nó đang mở, nó sẽ đóng lại. Nếu nó đang đóng, nó sẽ mở ra.
                    const isExpanded = item.classList.toggle('expanded');
                    toggleButton.setAttribute('aria-expanded', isExpanded);
                });
            };
        });
    }   

    // Apply collapse/expand logic to relevant sections
    // Check if the element exists before applying to avoid errors on pages where it's not present
    if (document.querySelector('#jailbreak-tools')) {
        applyCollapseExpand('#jailbreak-tools');
    }
    if (document.querySelector('#ipa-sign-tools')) {
        applyCollapseExpand('#ipa-sign-tools');
    }
    if (document.querySelector('#trollstore-compatible-ipas')) {
        applyCollapseExpand('#trollstore-compatible-ipas');
    }
    if (document.querySelector('#general-ipas')) {
        applyCollapseExpand('#general-ipas');
    }



    // --- Scroll to Top Button ---
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const mainContentArea = document.querySelector('.main-content-area');

    if (scrollToTopButton && mainContentArea) {
        // Show/hide button on scroll
        mainContentArea.addEventListener('scroll', () => {
            // Show button after scrolling 300px
            if (mainContentArea.scrollTop > 300) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });

        // Scroll to top on click
        scrollToTopButton.addEventListener('click', () => {
            mainContentArea.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
