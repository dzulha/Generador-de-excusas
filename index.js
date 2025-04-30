<script>
// Base de datos de excusas
const excuses = {
    work: [
        "Mi alarma no sonó y me quedé dormido.",
        "Hay un embotellamiento enorme en la carretera principal.",
        "Mi coche no arrancó esta mañana.",
        "Tuve que llevar a mi mascota al veterinario de urgencia.",
        "Mi computadora se actualizó automáticamente y perdí todo mi trabajo.",
        "Un familiar lejano vino a visitarme sin avisar.",
        "Estoy esperando a un técnico que debe reparar mi calefacción.",
        "Tuve una reunión de emergencia con el director de otro departamento.",
        "Mi internet en casa falló y no pude enviar los archivos.",
        "Me tocó jurado en un juicio de última hora."
    ],
    school: [
        "Mi impresora se quedó sin tinta justo cuando iba a imprimir el trabajo.",
        "Mi hermano menor rompió accidentalmente mi USB con todos los archivos.",
        "Me enfermé del estómago y no pude terminar la tarea.",
        "Olvidé mi mochila en el autobús con todo mi material dentro.",
        "Ayudé a un compañero con su proyecto y no me dio tiempo a terminar el mío.",
        "Mi computadora se bloqueó y perdí todo el documento sin guardar.",
        "Tuve que cuidar a mi hermano pequeño porque mis padres tuvieron una emergencia.",
        "Me confundí con la fecha de entrega, pensé que era para la próxima semana.",
        "Mi perro realmente se comió mi tarea, ¡tengo fotos para probarlo!",
        "Estuve en el hospital toda la noche por una reacción alérgica."
    ],
    social: [
        "Tengo que quedarme en casa porque espero una entrega importante.",
        "Me acabo de enterar que tengo que trabajar horas extra esta noche.",
        "Mi carro está en el mecánico y no tengo cómo transportarme.",
        "Acabo de rescatar un gatito abandonado y no puedo dejarlo solo.",
        "Mis padres vienen a cenar y no puedo cancelarles.",
        "Me duele mucho la cabeza y necesito descansar.",
        "Tuve un día muy estresante y necesito tiempo para relajarme.",
        "Estoy esperando una llamada importante que no puedo perder.",
        "Acabo de descubrir una fuga de agua en mi apartamento y estoy esperando al plomero.",
        "Prometí ayudar a mi vecino con un problema urgente."
    ],
    date: [
        "Mi ex acaba de llamarme con una emergencia y debo ayudarle.",
        "Tengo una videoconferencia de trabajo que programaron a último momento.",
        "Mi mejor amigo/a está pasando por una crisis y necesita mi apoyo.",
        "Acabo de recibir la noticia de que un familiar está en el hospital.",
        "Mi jefe me pidió terminar un proyecto urgente para mañana.",
        "Mi mascota está enferma y debo llevarla al veterinario.",
        "Olvidé que tenía una cena familiar planeada hace semanas.",
        "Me siento mal del estómago y prefiero quedarme en casa.",
        "Tuve un accidente menor en el coche y estoy esperando a la grúa.",
        "Acabo de enterarme que mi cuenta bancaria fue hackeada y debo resolverlo urgentemente."
    ]
};

// Combinar todas las categorías
excuses.all = [
    ...excuses.work,
    ...excuses.school,
    ...excuses.social,
    ...excuses.date
];

// Referencias a elementos del DOM
const excuseDisplay = document.getElementById('excuseDisplay');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const categoryBtns = document.querySelectorAll('.category-btn');

// Variable para almacenar la categoría actual
let currentCategory = 'all';

// Generar una excusa aleatoria
function generateExcuse() {
    const categoryExcuses = excuses[currentCategory];
    const randomIndex = Math.floor(Math.random() * categoryExcuses.length);
    const excuse = categoryExcuses[randomIndex];
    
    // Mostrar la excusa con una pequeña animación
    excuseDisplay.style.opacity = 0;
    
    setTimeout(() => {
        excuseDisplay.textContent = excuse;
        excuseDisplay.style.opacity = 1;
    }, 200);
}

// Copiar la excusa al portapapeles
function copyExcuse() {
    const excuse = excuseDisplay.textContent;
    navigator.clipboard.writeText(excuse)
        .then(() => {
            // Mostrar feedback visual
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '¡Copiado!';
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 1500);
        })
        .catch(err => {
            console.error('Error al copiar: ', err);
            alert('No se pudo copiar la excusa. Inténtalo de nuevo.');
        });
}

// Cambiar categoría
function changeCategory(e) {
    const selectedCategory = e.target.getAttribute('data-category');
    
    // Actualizar botones
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Actualizar categoría actual
    currentCategory = selectedCategory;
    
    // Generar nueva excusa
    generateExcuse();
}

// Event listeners
generateBtn.addEventListener('click', generateExcuse);
copyBtn.addEventListener('click', copyExcuse);

categoryBtns.forEach(btn => {
    btn.addEventListener('click', changeCategory);
});

// Generar una excusa inicial
window.addEventListener('load', generateExcuse);
</script>