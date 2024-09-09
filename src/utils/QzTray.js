import qz from "qz-tray";

const QzTrayTwo = async (zplCode) => {
    try {
        // Connect to QZ Tray
        if (!qz.websocket.isActive()) {
            await qz.websocket.connect({ retries: 1, delay: 15 });
        }

        const printer = await qz.printers.getDefault();
        console.log("Default Printer:", printer);
        if (!printer) {
            throw new Error("No default printer found");
        }

        const config = qz.configs.create(printer, { encoding: "UTF-8" });

        // Validate printer availability
        const printerList = await qz.printers.find();
        console.log("Available Printers:", printerList);
        if (
            !printerList ||
            printerList.length === 0 ||
            !printerList.find((p) => p.name === printer.name)
        ) {
            throw new Error("Selected printer not found");
        }

        // Validate ZPL code
        if (!zplCode || typeof zplCode !== "string") {
            throw new Error("Invalid ZPL code provided");
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
