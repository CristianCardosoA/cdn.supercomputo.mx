const contactWA = () => {
    const phoneNumber = '+525559169575';
    const message = encodeURIComponent('¡Hola! Me gustaría obtener una cotización para un servicio. ¿Podrías proporcionarme más detalles? ¡Gracias!.'); // Mensaje predefinido

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Abrir la ventana de WhatsApp en una nueva pestaña
    window.open(whatsappLink, '_blank');
};

const contactWAService = (service) => {
    const phoneNumber = '+525559169575';
    const message = encodeURIComponent(`¡Hola! Me gustaría obtener una cotización para un servicio de ${service}. ¿Podrías proporcionarme más detalles? ¡Gracias!.`); // Mensaje predefinido

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Abrir la ventana de WhatsApp en una nueva pestaña
    window.open(whatsappLink, '_blank');
};

document.getElementById('currentYear').textContent = new Date().getFullYear();
