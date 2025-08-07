    function goBack() {
            window.history.back();
        }

        function showRegistrationInfo() {
            alert('📋 INFORMACIÓN PARA INSCRIPCIONES\n\n' +
                  '📍 Dirígete a: Pilares Mártires del 10 de Junio\n' +
                  '⏰ Horario: Lunes a Viernes de 9:00 a 18:00\n' +
                  '📋 Trae: Identificación oficial y comprobante de domicilio\n' +
                  '💡 Los cupos son limitados - ¡No esperes más!\n\n' +
                  '¿Necesitas más información? Pregunta en recepción por los cursos de computación.');
        }

        // Animaciones adicionales al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            // Animación de entrada para las tarjetas
            const cards = document.querySelectorAll('.course-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.animation = 'slideInUp 0.6s ease forwards';
                }, index * 100);
            });
        });

        // Efecto de parallax sutil en el scroll
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('.main-header');
            if (header) {
                header.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });