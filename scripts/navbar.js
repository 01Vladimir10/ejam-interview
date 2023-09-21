
function initNavbar() {
    const menu = document.querySelector('.nav-menu ul')
    const nextButton = document.querySelector('.nav-menu .nav-menu-btn--next')
    const prevButton = document.querySelector('.nav-menu .nav-menu-btn--prev')
    const checkButtonsVisibility = () => {
        const threshold = menu.scrollWidth
        const display = window.innerWidth <= threshold ? 'inline-grid': 'none'
        nextButton.style.display = display
        prevButton.style.display = display
    }
    const scrollMenu = (direction) => {
        const scrollAmount = direction === 'next' ? 200 : -200
        menu.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    nextButton.addEventListener('click', () => scrollMenu('next'))
    prevButton.addEventListener('click', () => scrollMenu('prev'))
    window.addEventListener('resize', () => checkButtonsVisibility())
    checkButtonsVisibility()
}

document.addEventListener('DOMContentLoaded', initNavbar, false)
