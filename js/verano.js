 // Datos de actividades de verano (28 julio - 16 agosto)
        let summerActivities = {
            'Lunes': [
                { time: '15:00 - 16:00', name: 'Regularización Español y Matemáticas', teacher: 'Miriam Olvera' },
                { time: '16:00 - 17:00', name: 'Pedagogía para Preescolares', teacher: 'Miriam Olvera' },
                { time: '16:00 - 17:30', name: 'Computación Infantil', teacher: 'Lalo' },
                { time: '17:00 - 18:00', name: 'Dibujo para peques', teacher: 'Adriana Dominguez' }
            ],
            'Martes': [
                { time: '15:00 - 16:00', name: 'Lengua de Señas Mexicana para niños', teacher: 'Itzel' },
                { time: '16:00 - 17:30', name: 'Regularización en Ciencias para secundaria (Biología y Química)', teacher: 'Lalo' }
        
            ],
            'Miércoles': [
                { time: '15:00 - 16:00', name: 'Regularización Español y Matemáticas', teacher: 'Miriam Olvera' },
                { time: '16:00 - 17:00', name: 'Pedagogía para Preescolares', teacher: 'Miriam Olvera' },
                { time: '16:00 - 17:30', name: 'Regularización en Ciencias para secundaria (Biología y Química) ', teacher: 'Lalo' }
            ],
            'Jueves': [
                { time: '15:00 - 16:00', name: 'Matemáticas Primaria (1ro a 3er año)', teacher: 'Isabel Miranda' },
                { time: '16:00 - 17:00', name: 'Matemáticas Primaria (4to a 6to año)', teacher: 'Isabel Miranda' },
                { time: '16:00 - 17:00', name: 'Titeres y Máscaras', teacher: 'x' },
                { time: '16:00 - 17:30', name: 'Computación Infantil', teacher: 'Lalo' },
                { time: '17:00 - 18:00', name: 'Dibujo para peques', teacher: 'Adriana Dominguez' },
                { time: '18:00 - 19:00', name: 'Juegos de mesa', teacher: 'Kasandra' }
            ],
            'Viernes': [
                { time: '15:00 - 16:00', name: 'Matemáticas Primaria (1ro a 3er año)', teacher: 'Isabel Miranda' },
                { time: '15:00 - 16:00', name: 'Braille', teacher: 'Itzel' },
                { time: '16:00 - 17:00', name: 'Matemáticas Primaria (4to a 6to año)', teacher: 'Isabel Miranda' },
                { time: '16:00 - 17:00', name: 'Expresión y Movimiento', teacher: 'x' },
                { time: '18:00 - 19:00', name: 'Juegos de Mesa', teacher: 'Kasandra' }
            ]
        };

        const summerDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

        function getAllTeachers() {
            const teachers = new Set();
            Object.values(summerActivities).forEach(dayActivities => {
                dayActivities.forEach(activity => {
                    teachers.add(activity.teacher);
                });
            });
            return Array.from(teachers).sort();
        }

        function populateTeacherFilter() {
            const select = document.getElementById('teacherFilter');
            const teachers = getAllTeachers();
            
            select.innerHTML = '<option value="">Todos los profesores</option>';
            teachers.forEach(teacher => {
                const option = document.createElement('option');
                option.value = teacher;
                option.textContent = teacher;
                select.appendChild(option);
            });
        }

        function renderSchedule() {
            const grid = document.getElementById('scheduleGrid');
            const teacherFilter = document.getElementById('teacherFilter').value;
            const activityFilter = document.getElementById('activityFilter').value.toLowerCase();
            
            grid.innerHTML = '';

            summerDays.forEach(day => {
                const dayColumn = document.createElement('div');
                dayColumn.className = 'day-column';

                const dayHeader = document.createElement('div');
                dayHeader.className = 'day-header';
                dayHeader.textContent = day;

                dayColumn.appendChild(dayHeader);

                let dayActivities = summerActivities[day] || [];

                // Aplicar filtros
                if (teacherFilter) {
                    dayActivities = dayActivities.filter(activity => activity.teacher === teacherFilter);
                }
                if (activityFilter) {
                    dayActivities = dayActivities.filter(activity => 
                        activity.name.toLowerCase().includes(activityFilter)
                    );
                }

                if (dayActivities.length === 0) {
                    const noActivities = document.createElement('div');
                    noActivities.className = 'no-activities';
                    noActivities.textContent = 'No hay actividades programadas';
                    dayColumn.appendChild(noActivities);
                } else {
                    dayActivities.forEach(activity => {
                        const activitySlot = document.createElement('div');
                        activitySlot.className = 'activity-slot';

                        activitySlot.innerHTML = `
                            <div class="activity-time">${activity.time}</div>
                            <div class="activity-name">${activity.name}</div>
                            <div class="activity-teacher">Prof. ${activity.teacher}</div>
                        `;

                        dayColumn.appendChild(activitySlot);
                    });
                }

                grid.appendChild(dayColumn);
            });
        }

        function openModal() {
            document.getElementById('modal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('activityForm').reset();
        }

        function addActivity(day, time, name, teacher) {
            if (!summerActivities[day]) {
                summerActivities[day] = [];
            }
            summerActivities[day].push({ time, name, teacher });
            
            // Ordenar por tiempo
            summerActivities[day].sort((a, b) => a.time.localeCompare(b.time));
        }

        // Función para cambiar la imagen del banner
        function changeBannerImage() {
            const input = document.getElementById('bannerUpload');
            
            input.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const banner = document.querySelector('.banner');
                        banner.style.backgroundImage = `url(${e.target.result})`;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        // Event listeners
        document.getElementById('teacherFilter').addEventListener('change', renderSchedule);
        document.getElementById('activityFilter').addEventListener('input', renderSchedule);

        document.getElementById('activityForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const day = document.getElementById('day').value;
            const time = document.getElementById('time').value;
            const name = document.getElementById('activity').value;
            const teacher = document.getElementById('teacher').value;

            addActivity(day, time, name, teacher);
            populateTeacherFilter();
            renderSchedule();
            closeModal();
        });

        // Cerrar modal al hacer clic fuera de él
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', function() {
            populateTeacherFilter();
            renderSchedule();
            changeBannerImage();
        });