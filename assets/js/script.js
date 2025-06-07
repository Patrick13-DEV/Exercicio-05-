document.addEventListener("DOMContentLoaded", () => {
    const toggleBall = document.querySelector(".toggle-ball");
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    let currentTheme = 1;

    body.classList.add('theme-1');

    themeToggle.addEventListener("click", () => {
        currentTheme++;
        if (currentTheme > 3) currentTheme = 1;

        // Anda a bola
        toggleBall.className = "toggle-ball"; // reseta classe
        toggleBall.classList.add(`pos${currentTheme}`);

        // Atualiza o tema
        body.className = `theme-${currentTheme}`;
    });
}); /*transição da Bola e mudança de tema*/




