        function goToSummerPage() {
            window.location.href = 'verano.html';
        }

        function goToCoursesPage() {
            window.location.href = 'computacion.html';
        }

        // Datos de ejemplo - aquí puedes agregar las actividades reales
        let activities = {
            'Lunes': [
                { time: '08:00 - 09:00', name: 'Baile Fitness', teacher: 'Israel García' },
                { time: '10:00 - 11:00', name: 'Activación Física', teacher: 'Vicente Muñoz' },
                { time: '10:00 - 11:00', name: 'Computación Elemental Adultos', teacher: 'Isabel' },
                { time: '11:00 - 13:00', name: 'Uso de Celular', teacher: 'Isabel' },
                { time: '11:00 - 13:00', name: 'Teatro', teacher: 'Carlos ' },
                { time: '11:00 - 15:00', name: 'Joyería', teacher: 'Aracelí Sanchez' },
                { time: '13:00 - 15:00', name: 'Asesorías Ciencias Sociales', teacher: 'Isabel' },
                { time: '14:00 - 15:30', name: 'Ritmos Latinos', teacher: 'Eduardo' },
                { time: '15:00 - 16:00', name: 'Asesorías a Plataformas Educativas (Prepas)', teacher: 'Miriam Olvera' },
                { time: '15:30 - 16:30', name: 'Danzón', teacher: 'Eduardo' },
                { time: '15:00 - 20:00', name: 'Matemáticas', teacher: 'Kasandra' },
                { time: '16:00 - 17:00', name: 'Preescolares', teacher: 'Miriam Olvera' },
                { time: '16:00 - 17:30', name: 'Computación para niños', teacher: 'Lalo' },
                { time: '16:00 - 18:00', name: 'Hojas de Cálculo', teacher: 'Otto' },
                { time: '16:00 - 18:00', name: 'Box y Defensa Personal', teacher: 'Javier Solis' },
                { time: '16:00 - 18:00', name: 'Guitarra Básica', teacher: 'Eduardo Victoria' },
                { time: '17:00 - 18:00', name: 'Uso de Celular', teacher: 'Miriam Olvera' },
                { time: '17:00 - 20:00', name: 'Bicicleta', teacher: 'Oscar' },
                { time: '17:30 - 20:00', name: 'Arte Urbano', teacher: 'Adriana Dominguez' },
                { time: '18:00 - 19:00', name: 'Computación', teacher: 'Miriam Olvera' },
                { time: '18:00 - 20:00', name: 'Guitarra Intermedia', teacher: 'Eduardo Victoria' },
                { time: '18:00 - 20:00', name: 'Escuela de Código', teacher: 'Otto' },
                { time: '18:00 - 20:00', name: 'INEA', teacher: 'Lalo' },
                { time: '19:00 - 20:00', name: 'Asesorías Español y Civismo (Primaria y Secu)', teacher: 'Miriam Olvera' },
            ],
            'Martes': [
                { time: '10:00 - 11:00', name: 'Baile Fitness', teacher: 'Israel García' },
                { time: '10:00 - 11:00', name: 'Computación Elemental Adultos', teacher: 'Isabel' },
                { time: '10:00 - 11:00', name: 'Asesorías Plataformas Educativas (Prepas)', teacher: 'Miriam Olvera' },
                { time: '10:00 - 14:00', name: 'Bordado Tenango', teacher: 'Claudia Loyola' },
                { time: '11:00 - 13:00', name: 'Uso y Manejo de Internet', teacher: 'Miriam Olvera' },
                { time: '11:00 - 13:00', name: 'Uso de Celular', teacher: 'Isabel' },
                { time: '13:00 - 15:00', name: 'Asesorías INEA', teacher: 'Miriam Olvera' },
                { time: '13:00 - 15:00', name: 'Asesorías Ciencias Sociales', teacher: 'Isabel' },
                { time: '13:00 - 18:00', name: 'Joyería', teacher: 'Aracelí Sanchez' },
                { time: '15:00 - 16:00', name: 'Lengua de Señas Mexicana para niños', teacher: 'Itzel' },
                { time: '15:00 - 20:00', name: 'Matemáticas', teacher: 'Kasandra' },
                { time: '16:00 - 18:00', name: 'Hojas de Cálculo', teacher: 'Otto' },
                { time: '16:00 - 18:00', name: 'Regularización Secundaria (Biología, Química)', teacher: 'Lalo' },               
                { time: '16:00 - 17:00', name: 'Lengua de Señas Mexicana para usuarios sordos', teacher: 'Itzel' },
                { time: '16:00 - 18:30', name: 'Teatro', teacher: 'Carlos ' },
                { time: '16:00 - 20:00', name: 'Ajedrez', teacher: 'Enrique Santos' },
                { time: '17:00 - 19:00', name: 'Lengua de Señas Mexicana Modulo 2', teacher: 'Itzel' },
                { time: '18:00 - 20:00', name: 'Escuela de Código', teacher: 'Otto' },
                { time: '18:00 - 20:00', name: 'Exámen Único (Biología, Química)', teacher: 'Lalo' }        
            ],
            'Miércoles': [
                { time: '08:30 - 10:00', name: 'Zumba', teacher: 'Miriam' },
                { time: '10:00 - 11:00', name: 'Computación Elemental Adultos', teacher: 'Isabel' },
                { time: '10:00 - 11:00', name: 'Activación Física', teacher: 'Vicente Muñoz' },
                { time: '10:30 - 12:30', name: 'Guitarra Básica', teacher: 'Eduardo Victoria' },
                { time: '11:00 - 13:00', name: 'Uso de Celular', teacher: 'Isabel' },
                { time: '11:00 - 16:00', name: 'Matemáticas', teacher: 'Kasandra' },
                { time: '12:00 - 14:00', name: 'Teatro', teacher: 'Carlos ' },
                { time: '13:00 - 15:00', name: 'Asesorías Ciencias Sociales', teacher: 'Isabel' },
                { time: '14:00 - 16:00', name: 'Danzón', teacher: 'Eduardo' },
                { time: '15:00 - 16:00', name: 'Asesorías a Plataformas Educativas (Prepas)', teacher: 'Miriam Olvera' },
                { time: '15:00 - 18:00', name: 'Bordado Tenango', teacher: 'Claudia Loyola' },
                { time: '16:00 - 17:00', name: 'Preescolares', teacher: 'Miriam Olvera' },
                { time: '16:00 - 18:00', name: 'Computación Básica', teacher: 'Otto' },
                { time: '16:00 - 18:00', name: 'Regularización Secundaria (Biología, Química)', teacher: 'Lalo' },         
                { time: '16:00 - 18:00', name: 'Box y Defensa Personal', teacher: 'Javier Solis' },
                { time: '17:00 - 19:00', name: 'Computación', teacher: 'Miriam Olvera' },
                { time: '18:00 - 20:00', name: 'INEA', teacher: 'Lalo' },
                { time: '18:00 - 20:00', name: 'Escuela de Código', teacher: 'Otto' },
                { time: '18:30 - 20:00', name: 'Patinaje', teacher: 'Angel' },
                { time: '19:00 - 20:00', name: 'Asesorías Español y Civismo (Primaria y Secu)', teacher: 'Miriam Olvera' }
            ],
            'Jueves': [
                { time: '10:00 - 11:00', name: 'Baile Fitness', teacher: 'Israel García' },
                { time: '10:00 - 11:00', name: 'Asesorías Uso de Celular y Computadora', teacher: 'Miriam Olvera' },
                { time: '10:00 - 15:00', name: 'Matemáticas', teacher: 'Kasandra' },
                { time: '11:00 - 13:00', name: 'Uso y Manejo de Internet', teacher: 'Miriam Olvera' },
                { time: '11:00 - 13:00', name: 'Arte Urbano', teacher: 'Adriana Dominguez' },
                { time: '13:00 - 15:00', name: 'Asesorías INEA', teacher: 'Miriam Olvera' },
                { time: '15:00 - 17:00', name: 'Asesorías Matemáticas niños de 9 a 11 años', teacher: 'Isabel' },
                { time: '16:00 - 18:00', name: 'Computación para niños', teacher: 'Lalo' },
                { time: '16:00 - 18:00', name: 'Computación Básica', teacher: 'Otto' },
                { time: '16:00 - 18:30', name: 'Teatro', teacher: 'Carlos ' },
                { time: '17:00 - 19:00', name: 'Exámen Único Ciencias Sociales', teacher: 'Isabel' },
                { time: '17:30 - 20:00', name: 'Arte Urbano', teacher: 'Adriana Dominguez' },
                { time: '17:00 - 20:00', name: 'Ajedrez', teacher: 'Enrique Santos' },
                { time: '18:00 - 20:00', name: 'INEA', teacher: 'Lalo' },
                { time: '18:00 - 20:00', name: 'Escuela de Código', teacher: 'Otto' }     
            ],
            'Viernes': [
                { time: '08:30 - 10:00', name: 'Zumba', teacher: 'Miriam' },
                { time: '10:00 - 11:00', name: 'Activación Física', teacher: 'Vicente Muñoz' },
                { time: '10:00 - 11:00', name: 'Asesorías Plataformas Educativas (Prepas)', teacher: 'Miriam Olvera' },
                { time: '10:00 - 15:00', name: 'Matemáticas', teacher: 'Kasandra' },
                { time: '11:00 - 12:00', name: 'Uso de Celular', teacher: 'Miriam Olvera' },
                { time: '11:00 - 14:00', name: 'Teatro', teacher: 'Carlos ' },
                { time: '12:00 - 14:00', name: 'Asesorías INEA', teacher: 'Miriam Olvera' },
                { time: '15:00 - 17:00', name: 'Asesorías Matemáticas niños de 9 a 11 años', teacher: 'Isabel' },
                { time: '15:00 - 19:00', name: 'Joyería', teacher: 'Aracelí Sanchez' },
                { time: '15:00 - 16:00', name: 'Lengua de Señas Mexicana para niños', teacher: 'Itzel' },
                { time: '16:00 - 18:00', name: 'Exámen Único (Biología, Química)', teacher: 'Lalo' },
                { time: '16:00 - 18:00', name: 'Lengua de Señas Mexicana Módulo 2', teacher: 'Itzel' },
                { time: '18:30 - 20:00', name: 'Exámen Único Ciencias Sociales', teacher: 'Isabel' },
                { time: '18:00 - 19:00', name: 'Braille', teacher: 'Itzel' },
                { time: '18:00 - 20:00', name: 'Asesorías Química', teacher: 'Lalo'},
                { time: '18:30 - 20:00', name: 'Patinaje', teacher: 'Angel' }
            ],
            'Sábado': [
                { time: '09:30 - 10:30', name: 'Exámen Único Español', teacher: 'Miriam Olvera' },
                { time: '10:00 - 12:00', name: 'Box y Defensa Personal', teacher: 'Javier Solis' },
                { time: '10:30 - 12:00', name: 'Exámen Único Ciencias Sociales', teacher: 'Isabel' },
                { time: '10:00 - 13:00', name: 'Bordado Tenango', teacher: 'Claudia Loyola' },
                { time: '10:00 - 12:00', name: 'Guitarra Intermedia', teacher: 'Eduardo Victoria' },
                { time: '10:00 - 14:00', name: 'Escuela de Código', teacher: 'Otto' },
                { time: '11:00 - 12:00', name: 'Uso de Celular', teacher: 'Miriam Olvera' },
                { time: '12:00 - 13:00', name: 'Club de Tareas Primaria', teacher: 'Miriam Olvera' },
                { time: '12:00 - 14:00', name: 'Exámen Único (Biología, Química)', teacher: 'Lalo' },
                { time: '12:00 - 14:00', name: 'Guitarra Básica', teacher: 'Eduardo Victoria' },
                { time: '13:00 - 18:00', name: 'Matemáticas', teacher: 'Kasandra' },
                { time: '16:00 - 19:00', name: 'Arte Urbano', teacher: 'Adriana Dominguez' },
                { time: '16:00 - 19:00', name: 'Computación básica para Adultos', teacher: 'Lalo' }
            ],
           
        };

        const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        function getAllTeachers() {
            const teachers = new Set();
            Object.values(activities).forEach(dayActivities => {
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

            days.forEach(day => {
                const dayColumn = document.createElement('div');
                dayColumn.className = 'day-column';

                const dayHeader = document.createElement('div');
                dayHeader.className = 'day-header';
                dayHeader.textContent = day;

                dayColumn.appendChild(dayHeader);

                let dayActivities = activities[day] || [];

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
            if (!activities[day]) {
                activities[day] = [];
            }
            activities[day].push({ time, name, teacher });
            
            // Ordenar por tiempo
            activities[day].sort((a, b) => a.time.localeCompare(b.time));
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

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', function() {
            populateTeacherFilter();
            renderSchedule();
            changeBannerImage();
        });