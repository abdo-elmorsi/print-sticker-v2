import qz from 'qz-tray';

const QzTray = async (zplCode) => {
    console.log({ one: "one" });
    try {
        if (!qz.websocket.isActive()) {
            // Initialize qz-tray on-demand
            await qz.websocket.connect({ retries: 1, delay: 15 });
        }

        // Find default printer
        const printer = await qz.printers.getDefault();
        console.log({ printer });
        if (!printer) {
            throw new Error('No default printer found');
        }

        // Set up configuration with UTF-8 encoding
        const config = qz.configs.create(printer, { encoding: 'UTF-8' });

        // Print the ZPL code to the selected printer
        await qz.print(config, [{ type: 'raw', format: 'plain', data: zplCode }]);

        console.log('Label printed successfully');
    } catch (error) {
        console.error('Error printing label:', error);
    }
};

export default QzTray;
