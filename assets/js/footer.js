// footer.js
// Clase para cargar y renderizar el footer original de Financity en cualquier vista
export default class Footer {
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

    // Inserta el HTML del footer en el elemento destino
    render() {
        // Obtenemos el año actual dinámicamente
        const currentYear = new Date().getFullYear();

        const html = `
    <footer class="footer-wrapper footer-layout1">
        <div class="shape-mockup" data-top="0" data-left="0"><img src="assets/img/shape/footer_shape_1.png" alt="shape">
        </div>
        <div class="shape-mockup" data-bottom="0" data-right="0"><img src="assets/img/shape/footer_shape_2.png"
                alt="shape"></div>
        <div class="widget-area">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget footer-widget">
                            <div class="th-widget-about">
                                <div class="about-logo">
                                    <a href="index.html"><img src="assets/img/logo.png" style="width: 128px; object-fit: cover;" alt="Arroz Doña Maria"></a>
                                </div>
                                <p class="about-text">Doña María no solo está en tu cocina… está en tu historia.
                                    Ha aprendido de tus recetas, tus sabores y tus momentos más especiales.
                                    Por eso sabe cómo darte rendimiento, calidad y ese sabor auténtico que tanto te
                                    gusta.</p>
                                <div class="th-social">
                                    <a href="https://www.facebook.com/AgricorpComercial/"><i
                                            class="fab fa-facebook-f"></i></a>

                                    <a href="https://www.instagram.com/agricorpcomercial_"><i
                                            class="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/@agricorpcanaldeprensa4280"><i
                                            class="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title"><img src="assets/img/theme-img/title_icon.svg" alt="Icon">
                                Enlaces</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">
                                    <li><a href="index.html#service">Servicios</a></li>
                                    <li><a href="index.html#beneficio">Beneficios</a></li>
                                    <li><a href="cooking_recipes.html">Testimonios</a></li>
                                    <li><a href="index.html#recipes">Recetas</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget footer-widget">
                            <h3 class="widget_title"><img src="assets/img/theme-img/title_icon.svg" alt="Icon">Contáctanos
                                </h3>
                            <div class="th-widget-contact">
                                <div class="info-box">
                                    <div class="info-box_icon">
                                        <i class="fas fa-location-dot"></i>
                                    </div>
                                    <p class="info-box_text">8502 Preston Rd. Inglewood, Maine 98380</p>
                                </div>
                                <div class="info-box">
                                    <div class="info-box_icon">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <p class="info-box_text">
                                        <a href="tel:+16326543564" class="info-box_link">+(163)-2654-3564</a>
                                        <a href="tel:+16326545432" class="info-box_link">+(163)-2654-5432</a>
                                    </p>
                                </div>
                                <div class="info-box">
                                    <div class="info-box_icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <p class="info-box_text">
                                        <a href="mailto:help24/7@Arroz Doña Maria.com"
                                            class="info-box_link">help24/7@Arroz Doña Maria.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget footer-widget">
                            <h3 class="widget_title"><img src="assets/img/theme-img/title_icon.svg" alt="Icon">Instagram
                            </h3>
                            <div class="sidebar-gallery">
                                <div class="gallery-thumb">
                                    <img src="assets/img/widget/gallery_1_1.webp" alt="Gallery Image">
                                    <a href="assets/img/widget/gallery_1_1.webp" class="gallery-btn popup-image"><i
                                            class="fab fa-instagram"></i></a>
                                </div>
                                <div class="gallery-thumb">
                                    <img src="assets/img/widget/gallery_1_2.webp" alt="Gallery Image">
                                    <a href="assets/img/widget/gallery_1_2.webp" class="gallery-btn popup-image"><i
                                            class="fab fa-instagram"></i></a>
                                </div>
                                <div class="gallery-thumb">
                                    <img src="assets/img/widget/gallery_1_3.webp" alt="Gallery Image">
                                    <a href="assets/img/widget/gallery_1_3.webp" class="gallery-btn popup-image"><i
                                            class="fab fa-instagram"></i></a>
                                </div>
                                <div class="gallery-thumb">
                                    <img src="assets/img/widget/gallery_1_4.webp" alt="Gallery Image">
                                    <a href="assets/img/widget/gallery_1_4.webp" class="gallery-btn popup-image"><i
                                            class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-wrap">
            <div class="container">
                <div class="row gy-2 align-items-center">
                    <div class="col-md-6">
                        <p class="copyright-text">Copyright <i class="fal fa-copyright"></i> ${currentYear} <a
                                href="index.html">Arroz Doña Maria</a>. Reservados todos los derechos.</p>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="payment-img">
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;

        const container = document.getElementById(this.targetElementId);
        if (container) {
            container.innerHTML = html;
        } else {
            console.error(`Footer: elemento con ID '${this.targetElementId}' no encontrado.`);
        }
    }
}

// Inicialización automática al cargar el DOM

document.addEventListener('DOMContentLoaded', () => {
    new Footer('footer-container', 1).render();
});


document.addEventListener('DOMContentLoaded', function() {
  // 1. Seleccionamos todos los links de navegación que tengan href a un ID
  const menuLinks = document.querySelectorAll('.main-menu ul li a[href^="#"]');
  // 2. Creamos un arreglo con las secciones asociadas
  const secciones = Array.from(menuLinks).map(link => {
    const targetID = link.getAttribute('href').substring(1);
    return document.getElementById(targetID);
  });

  // Función para saber qué sección está en pantalla
  function onScroll() {
    const scrollPos = window.scrollY || window.pageYOffset;
    // Recorremos secciones; la activa es la primera cuyo top esté por encima del scroll
    secciones.forEach((seccion, index) => {
      if (!seccion) return; // por si falta alguna sección
      const topSeccion = seccion.getBoundingClientRect().top + window.scrollY;
      const offset = 200; // margen para activar un poco antes o después; ajusta según tu header fijo
      if (scrollPos >= topSeccion - offset) {
        // Removemos .active de todos y luego lo ponemos en el link correspondiente
        menuLinks.forEach(link => link.classList.remove('active'));
        menuLinks[index].classList.add('active');
      }
    });
  }

  // Llamamos a onScroll en el evento scroll
  window.addEventListener('scroll', onScroll);

  // También invocarlo una vez al cargar para marcar la sección inicial
  onScroll();
});

