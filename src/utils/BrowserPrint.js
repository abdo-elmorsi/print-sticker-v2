import ZebraBrowserPrintWrapper from 'zebra-browser-print-wrapper-global';

class BrowserPrint {
    static type = null;
    static browserPrint = null;
    static printerStatus = null;

    static async setup(type = 'zebra') {
        this.type = type;

        try {
            // Create a new instance of the object
            const browserPrint = new ZebraBrowserPrintWrapper();

            // Select default printer
            const defaultPrinter = await browserPrint.getDefaultPrinter();

            // Set the printer
            browserPrint.setPrinter(defaultPrinter);

            // Check printer status
            const printerStatus = await browserPrint.checkPrinterStatus();

            this.browserPrint = browserPrint;
            this.printerStatus = printerStatus;
        } catch (error) {
            console.log(this.printerStatus?.errors);
            throw new Error(error);
        }
    }

    static async cleanup() {
        try {
            if (this.browserPrint) {
                this.browserPrint = null;
                this.printerStatus = null;

                console.log('Clean-up completed.');
            } else {
                console.log('BrowserPrint is not initialized.');
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    static async printBarcode(zplCode) {
        try {
            if (!this.browserPrint) {
                throw new Error(
                    'Printer is not set up. Please set up the printer and reload the page.'
                );
            }

            if (!this.printerStatus.isReadyToPrint) {
                throw new Error(
                    'Printer is not ready to print. Please connect the printer and reload the page.'
                );
            }

            this.browserPrint.print(zplCode);
        } catch (error) {
            console.error('Error during printing:', error);
            alert('Printing error: ' + error.message);
        }
    }

}

export default BrowserPrint;
