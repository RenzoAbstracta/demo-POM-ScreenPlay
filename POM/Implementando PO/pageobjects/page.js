class Page {
    // Web Elements:
    // Barra de busqueda, menues, etc

    // Funcionalidades
    async open (path) {
        return await browser.url(path);
    }
}