import qz from 'qz-tray';

const QzTrayTwo = async (zplCode) => {
    console.log({ Two: "Two" });
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

        // Get the list of installed printers
        const printerList = await qz.printers.find();
        console.log({ printerList });

        // If the printer is not found in the list, throw an error
        if (!printerList.find((p) => p.name === printer.name)) {
            throw new Error('Selected printer not found');
        }

        // Print the ZPL code to the selected printer
        await qz.print(config, [{ type: 'raw', format: 'plain', data: zplCode }]);

        console.log('Label printed successfully');
    } catch (error) {
        console.error('Error printing label:', error);
    } finally {
        // Disconnect the qz-tray WebSocket after printing
        if (qz.websocket.isActive()) {
            await qz.websocket.disconnect();
        }
    }
};

export default QzTrayTwo;
