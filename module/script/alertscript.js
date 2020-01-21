const ischorme = /msie\s|trident\/|chrome\//i.test(window.navigator.userAgent);

if (!ischorme) {
    alert('La aplicacion esta optimisada para el navegador Chrome');
}

if (!window.navigator.cookieEnabled) {
    alert('Las cookies estan inavilitadas');
}