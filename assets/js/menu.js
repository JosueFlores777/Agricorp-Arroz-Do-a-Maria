// menu.js
// Clase para cargar y renderizar el menu original de Financity en cualquier vista
export default class menu {
    constructor(targetElementId, basePathLevel = 1) {
        this.targetElementId = targetElementId;
        this.basePath = this.getBasePath(basePathLevel);
    }

    // Calcula el prefijo de ruta según la profundidad de carpetas
    getBasePath(level) {
        switch (level) {
            case 1:
                return './';
            case 2:
                return '../';
            case 3:
                return '../../';
            default:
                return './';
        }
    }

    // Inserta el HTML del menu en el elemento destino
    render() {
        // Obtenemos el año actual dinámicamente
   
        const html = `

      <div class="th-menu-wrapper">
        <div class="th-menu-area text-center">
            <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
            <div class="mobile-logo">
                <a href="index.html"><img src="assets/img/logo.svg" alt="Frutin"></a>
            </div>
            <div class="th-mobile-menu">
                <ul>

                    <li>
                        <a href="index.html">Inicio</a>

                    </li>
                    <li><a href="#service">Servicios</a></li>
                    <li><a href="#beneficio">Beneficios</a></li>
                    <li><a href="#testimonials">Testimonios</a></li>
                    <li><a href="#recipes">Recetas</a></li>
                </ul>
            </div>
        </div>
    </div>
    <header class="th-header header-layout1">
        <div class="header-top">
            <div class="container">
                <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">
                    <div class="col-auto d-none d-lg-block">
                        <p class="header-notice">Recetas que guarda el corazón.</p>
                    </div>
                    <div class="col-auto">
                        <div class="header-links">
                            <ul>
                                <li class="d-none d-sm-inline-block"><i class="fal fa-location-dot"></i><a
                                        href="https://www.google.com/maps">8502 Preston Rd. Inglewood, Maine 98380</a>
                                </li>
                                <li>
                                    <div class="social-links">
                                        <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                        <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-wrapper">
            <div class="container">
                <div class="z-index-common">

                    <div class="menu-area">
                        <div class="logo-bg"></div>
                        <div class="row align-items-center justify-content-between">
                            <div class="col-auto">
                                <div class="header-logo">
                                    <a href="index.html"><img src="assets/img/logo-white.svg" alt="Frutin"></a>
                                </div>
                            </div>
                            <div class="col-auto">
                                <nav class="main-menu d-none d-lg-inline-block">
                                    <ul>

                                        <li>
                                            <a href="index.html">Inicio</a>

                                        </li>
                                        <li><a href="#service">Servicios</a></li>
                                        <li><a href="#beneficio">Beneficios</a></li>
                                        <li><a href="#testimonials">Testimonios</a></li>
                                        <li><a href="#recipes">Recetas</a></li>

                                    </ul>
                                </nav>
                                <button type="button" class="th-menu-toggle d-block d-lg-none"><i
                                        class="far fa-bars"></i></button>
                            </div>
                            <div class="col-auto d-none d-xl-block ms-auto">
                                <div class="header-button">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    `;

        const container = document.getElementById(this.targetElementId);
        if (container) {
            container.innerHTML = html;
        } else {
            console.error(`menu: elemento con ID '${this.targetElementId}' no encontrado.`);
        }
    }
}

// Inicialización automática al cargar el DOM

document.addEventListener('DOMContentLoaded', () => {
    new menu('menu-container', 1).render();
});