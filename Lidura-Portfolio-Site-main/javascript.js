window.addEventListener('scroll', () => {
    const studentElement = document.getElementById('student');
    const rect = studentElement.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        studentElement.classList.add('visible');
    }
});

