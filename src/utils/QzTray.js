import qz from "qz-tray";

const QzTrayTwo = async (zplCode) => {
    try {
        if (!qz.websocket.isActive()) {
            await qz.websocket.connect({ retries: 1, delay: 15 });
        }

        const printer = await qz.printers.getDefault();
        if (!printer) {
            throw new Error("No default printer found");
        }

        const config = qz.configs.create(printer, { encoding: "UTF-8" });

        // Check if the printer is available
        const printerList = await qz.printers.find();
        if (!printerList.find((p) => p.name === printer.name)) {
            throw new Error("Selected printer not found");
        }

        // Prepare the print job
        const data = [{ type: "raw", format: "plain", data: zplCode }];

        // Print the ZPL code
        await qz.print(config, data);
        console.log("Label printed successfully");
    } catch (error) {
        console.error("Error printing label:", error);
    } finally {
        if (qz.websocket.isActive()) {
            await qz.websocket.disconnect();
        }
    }
};

export default QzTrayTwo;
