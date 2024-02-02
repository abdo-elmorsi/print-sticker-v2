import qz from 'qz-tray';


const QzTray = async (zplCode) => {
    try {
        if (!qz.websocket.isActive()) {
            // Initialize qz-tray on-demand
            await qz.websocket.connect({ retries: 1, delay: 15 });
        }

        // Find default printer
        const printer = await qz.printers.getDefault();

        if (!printer) {
            throw new Error('No default printer found');
        }

        const config = await qz.configs.create(printer, { encoding: 'UTF-8' });

        // Print the ZPL code to the selected printer
        await qz.print(config, [zplCode]);

        console.log('Label printed successfully');
    } catch (error) {
        console.error('Error printing label:', error);
    }
};

export default QzTray;