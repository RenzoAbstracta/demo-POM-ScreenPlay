export default class Page {
    // Web Elements:
    // Barra de busqueda, menues, etc

    // Funcionalidades
    async open (path) {
        return await browser.url(path);
    }

    async clearAndSendKeys(element, text) {
        await element.waitForClickable();
        await element.clearValue();
        await element.keys(text);
    }

}