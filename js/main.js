(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
})(jQuery);


document.addEventListener('DOMContentLoaded', function() {
    // Event listener for search button
    document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value;
    const filterDropdown = document.querySelector('.input-group-prepend .dropdown-toggle'); // Corregido para seleccionar el botón dentro de .input-group-prepend
    const filterValue = filterDropdown.textContent.trim().toLowerCase();
    const responseContainer = document.getElementById('response-container');

    // Clean the response container
    responseContainer.innerHTML = '';

    // Determine response based on filter value
    let response;
    if (filterValue === 'técnica') {
        response = `Respuesta técnica para "${searchInput}" \n 
        ACCESO A LA INFORMACIÓN PÚBLICA DEL ESTADO

Artículo 7º.- Legitimación y requerimiento inmotivado
Toda persona tiene derecho a solicitar y recibir información de cualquier entidad de la Administración Pública. En ningún caso se exige expresión de causa para el ejercicio de este derecho.

Artículo 8º.- Entidades obligadas a informar
Las entidades obligadas a brindar información son las señaladas en el Artículo 2° de la presente Ley.

Dichas entidades identificarán, bajo responsabilidad de su máximo representante, al funcionario responsable de brindar información solicitada en virtud de la presente ley. En caso de que éste no hubiera sido designado las responsabilidades administrativas y penales recaerán en el secretario general de la institución o quien haga sus veces.

Artículo 9º.- Personas jurídicas sujetas al régimen privado que prestan servicios públicos
Las personas jurídicas sujetas al régimen privado descritas en el inciso 8 del Artículo I del Título Preliminar de la Ley N° 27444 que gestionen servicios públicos o ejerzan funciones administrativas del sector público bajo cualquier modalidad, sólo están obligadas a facilitar la información referida a la prestación de los mismos a sus respectivos organismos supervisores, a efectos que éstos puedan cumplir con las obligaciones establecidas en esta Ley.

Cuando las personas jurídicas de que trata el párrafo anterior no estén en condiciones de satisfacer determinados requerimientos y solicitudes para el aprovechamiento, goce o instalación de dichos servicios, deben informar por escrito a los solicitantes que hicieron el requerimiento también por escrito, acerca de los fundamentos de política, técnicos o económicos, así como de las limitaciones existentes y sus causas. Además están obligadas a suministrar la información y ofrecer las explicaciones escritas necesarias a los usuarios que así lo requieran, en relación a la tarifa del servicio que les sea aplicada.

Artículo 10º.- Información de acceso público
Las entidades de la Administración Pública tienen la obligación de proveer la información requerida si se refiere a la contenida en documentos escritos, fotografías, grabaciones, soporte magnético o digital, o en cualquier otro formato, siempre que haya sido creada u obtenida por ella o que se encuentre en su posesión o bajo su control.
Asimismo, para los efectos de esta Ley, se considera como información pública cualquier tipo de documentación financiada por el presupuesto público que sirva de base a una decisión de naturaleza administrativa, así como las actas de reuniones oficiales.

Artículo 11º.- Procedimiento
El acceso a la información pública se sujeta al siguiente procedimiento:
a) Toda solicitud de información debe ser dirigida al funcionario designado por la entidad de la Administración Pública para realizar esta labor. En caso de que éste no hubiera sido designado, la solicitud se dirige al funcionario que tiene en su poder la información requerida o al superior inmediato.
b) La entidad de la Administración Pública a la cual se haya presentado la solicitud de información deberá otorgarla en un plazo no mayor de 7 (siete) días útiles; plazo que se podrá prorrogar en forma excepcional por cinco (5) días útiles adicionales, de mediar circunstancias que hagan inusualmente difícil reunir la información solicitada. En este caso, la entidad deberá comunicar por escrito, antes del vencimiento del primer plazo, las razones por las que hará uso de tal prórroga.
        `;
    } else {
        response = `Respuesta general para "${searchInput}"`;
    }

    // Create a new div element for the response
    const responseDiv = document.createElement('div');
    responseDiv.className = 'response';
    responseDiv.textContent = response;

    // Append the response to the response container
    responseContainer.appendChild(responseDiv);
});

// Event listener for dropdown item click to change filter value
document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action (following the link)
        const filterValue = this.textContent.trim();
        document.querySelector('.input-group-prepend .dropdown-toggle').textContent = filterValue; // Corregido para seleccionar el botón dentro de .input-group-prepend
        });
    });
});

