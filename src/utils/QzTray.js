import qz from 'qz-tray';

let isQzTrayInitialized = false;

const initializeQzTray = async () => {
    if (!isQzTrayInitialized) {
        try {
            await qz.websocket.connect();
            console.log('qz-tray is initialized');
            isQzTrayInitialized = true;
        } catch (error) {
            console.error('Error initializing qz-tray:', error);
        }
    }
};

const QzTray = async (zplCode) => {
    try {
        // Initialize qz-tray on-demand
        await initializeQzTray();

        // Find available printers
        const printers = await qz.printers.find();

        if (printers.length === 0) {
            throw new Error('No printers found');
        }

        // Use the default printer (the first printer in the list)
        const selectedPrinter = printers[0];

        // Set the encoding to UTF-8 to support Arabic and English characters
        await qz.config.setPrinter(selectedPrinter, { encoding: 'UTF-8' });

        // Print the ZPL code to the selected printer
        await qz.printers.print(selectedPrinter, [
            // Use 'raw' format for ZPL code
            { type: 'raw', format: 'plain', data: zplCode },
        ]);

        console.log('Label printed successfully');
    } catch (error) {
        console.error('Error printing label:', error);
    }
};

export default QzTray;