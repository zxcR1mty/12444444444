* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg: #060708;
    --panel: #0e1114;
    --panel-soft: #14181d;
    --line: #242a31;
    --line-strong: #343c45;
    --text: #eceff2;
    --muted: #a0a8b0;
    --quiet: #6f7780;
    --cyan: #72e4ff;
    --green: #86d36b;
    --red: #f0625d;
    --pink: #ff607a;
    --amber: #f0bd5a;
    --blue: #76a8ff;
    --shadow: rgba(0, 0, 0, 0.38);
    --font-ui: "Inter", Arial, sans-serif;
    --font-display: "Orbitron", Arial, sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    background:
        linear-gradient(180deg, rgba(114, 228, 255, 0.05), transparent 280px),
        var(--bg);
    color: var(--text);
    font-family: var(--font-ui);
    line-height: 1.5;
}

a {
    color: inherit;
}

.site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 76px;
    padding: 18px clamp(18px, 5vw, 64px);
    border-bottom: 1px solid var(--line);
    background: rgba(6, 7, 8, 0.84);
    backdrop-filter: blur(16px);
}

.brand,
.footer-logo {
    font-family: var(--font-display);
    font-weight: 800;
    letter-spacing: 5px;
    text-decoration: none;
}

.brand {
    font-size: 20px;
}

.nav {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav a {
    color: var(--muted);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 180ms ease;
}

.nav a:hover,
.nav a:focus-visible {
    color: var(--text);
}

.menu-button {
    display: none;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    border: 1px solid var(--line);
