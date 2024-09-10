import qz from "qz-tray";
import { KEYUTIL, KJUR, stob64, hextorstr } from "jsrsasign";

// Move certificates and keys to environment variables or a secure config
// export const CERTIFICATE = import.meta.env.VITE_QZ_CERTIFICATE;
// export const PRIVATE_KEY = import.meta.env.VITE_QZ_PRIVATE_KEY;
const CERTIFICATE = `-----BEGIN CERTIFICATE-----
MIIECzCCAvOgAwIBAgIGAZHcaQUeMA0GCSqGSIb3DQEBCwUAMIGiMQswCQYDVQQG
EwJVUzELMAkGA1UECAwCTlkxEjAQBgNVBAcMCUNhbmFzdG90YTEbMBkGA1UECgwS
UVogSW5kdXN0cmllcywgTExDMRswGQYDVQQLDBJRWiBJbmR1c3RyaWVzLCBMTEMx
HDAaBgkqhkiG9w0BCQEWDXN1cHBvcnRAcXouaW8xGjAYBgNVBAMMEVFaIFRyYXkg
RGVtbyBDZXJ0MB4XDTI0MDkwOTE0NDkxNVoXDTQ0MDkwOTE0NDkxNVowgaIxCzAJ
BgNVBAYTAlVTMQswCQYDVQQIDAJOWTESMBAGA1UEBwwJQ2FuYXN0b3RhMRswGQYD
VQQKDBJRWiBJbmR1c3RyaWVzLCBMTEMxGzAZBgNVBAsMElFaIEluZHVzdHJpZXMs
IExMQzEcMBoGCSqGSIb3DQEJARYNc3VwcG9ydEBxei5pbzEaMBgGA1UEAwwRUVog
VHJheSBEZW1vIENlcnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDH
DWyzfQ8sKh+5T8x2I3wuFaYxrQIyrz3gbelw4r6rNq2ceoQlzdr05ThL0gPM7VRZ
c0sVBdDyaVIk/df5gOhay/dvXOAlJstWw95vISNwxNkHPOwHQ4lzW8u9DXuuuIqr
CUvxBU7JhCuMboGOlDUPSAaqNMXdvlYybQ9JfNvGzZiqL2UUq7DTf+HE/ktUIu2p
GUa6FgZrovbhElGnhRaax1MiqNNWLzUpdni3JZSshqgACNHduHKSzuhMXt0yRrks
Qh4RR4jKLkg1ehrnZslZWu1GETkSYtDnSAtVRuuahAtE5dkko0VXPY38bu6n2YMU
KLeLVD6bQUmlHpjmxwj5AgMBAAGjRTBDMBIGA1UdEwEB/wQIMAYBAf8CAQEwDgYD
VR0PAQH/BAQDAgEGMB0GA1UdDgQWBBRVUEbD1GwAakRmnvE6kcBgbJ9b5TANBgkq
hkiG9w0BAQsFAAOCAQEAqUjccM3hxjQxUiPVGZ/NNe3s+XYaMX5IjTIZ6UQt3TW4
LJ7xTnUXcrW1bMAFphROI4PsKZqjUCCc6MXUwTzyj0+CnyQHWC+wcAjSTwWVrsZP
Tii332Sa34QFUXI/N1tGuPYvKjMjhsViY/Mks+AuCgFcVeqrnj6qhy73hl7JoJlQ
b55Ee+I6QSHjXvs+s4y4BT0/kFfOIWqjA6A22xHIOrekgmjvFEleYaF3O39WRs34
w8/MJvZNfy4ChZcxF/1+vzDplyh7xMuNiMxtm96kIZjIl/48TGiQ/ZuBcu3Gaekp
RzTb+tEnv8yEGWoHhByCIY8/BTkjXv2yKl2qtcMmfw==
-----END CERTIFICATE-----`;

const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDHDWyzfQ8sKh+5
T8x2I3wuFaYxrQIyrz3gbelw4r6rNq2ceoQlzdr05ThL0gPM7VRZc0sVBdDyaVIk
/df5gOhay/dvXOAlJstWw95vISNwxNkHPOwHQ4lzW8u9DXuuuIqrCUvxBU7JhCuM
boGOlDUPSAaqNMXdvlYybQ9JfNvGzZiqL2UUq7DTf+HE/ktUIu2pGUa6FgZrovbh
ElGnhRaax1MiqNNWLzUpdni3JZSshqgACNHduHKSzuhMXt0yRrksQh4RR4jKLkg1
ehrnZslZWu1GETkSYtDnSAtVRuuahAtE5dkko0VXPY38bu6n2YMUKLeLVD6bQUml
Hpjmxwj5AgMBAAECggEAAS+gyq7/lKVJnBqQHtIWTtX9MAWWYkPuC/TLs8r+FNoW
Db0jJXCFEfl9rOH6+NEfNAs+Usk+lfsvrJ3AmDF+8O+PMWAty7rf8kvneuUJJ4Zc
vrDLvT1XR9Mvsxgt+PwLg3piM/Tyo7vAYK1V40oZyNYGiCQZW7ljHRjOQwNV8ejM
AxwWA5XTUeC0YQv8XfnEl+TuvA3w2QzgqDaUq9yxnAn7wefg9VmiHoY0nUx30R6C
ESbmKQLQ94u/cHn+XHB/iprdYStTbv1iXTomCvKTjQWmkweoQIn0zOOnCNd3ERss
kcPmWKAajmsrSTe7Z6erBuXFCX5Jx0Eto6zgQnViCwKBgQDs0cTy5281zTHGPKK3
y6rEds3L8lnEr7/VRkPQVfwcnuX6m4uElxIVDDINHtIesZyEVyf/L2/i1jQpyJbs
v/SvE75pE5lVbv3+OTdHDn7c8UQ9tcq1TvbjZCv3OcEc9y+6y81vmmHgSjWbCHXv
mC2J7bgnXw4QDrzwx6jvpUS9iwKBgQDXLJeZZgxbwHiNG/MRwWpZRkXSopSoqgoA
cF3SpYlSqTevyoyEBoLCQ7ukoHdxAZXGyqmM6+wj/GG4I8izhcCD9tBrN5BOBxE+
xId8RAN1WyxBoyKZ7JX9WNs6ImgJ65yjxSliT/FLy/tb6xxRFN5VNvZXnx0H15uw
eslJ+p0sCwKBgQCuqchonukW9VBQtUgN5tj8LeN7GDO9LSJ/WmOJtOFM+qUEQNSV
5hYgD+6aXrD6kmSt9to5C/OpifLPHnKyCqGcvyMgvKPKryIF7o0mizpmGkwKd5oa
PzM4YxlKLf6QLn+1dbr/JQ4rLpB617KkE8kCgaHg5+qnTTdtHtUqaupYIQKBgB8n
nLegN+/c+VdtEY+jkpNkgl2SHrYhEJupqVwDjdODHsX8LMY87xfTmMqoVULueNI0
q8H0stcvBrMTs06S8iHpTZoIjINPsKaG7BsI+fs2/Txvs2XYBIuPHwbWznuJOr/X
nztV2dkgqr9PVmVDAUITWC2toxVsmWU/Ef/9Il6rAoGBAK8ozIhPR8X9r468XJ7b
CN1ORXdZPrL2u9BxhqmYyPBZYeiWjyGIIkJ9rPpewo0ip7PVB5j5fgiWbBnMMpPo
h3K64FMMsLPEOYxxXRsdyr2q9iKgLmyKDThfSzaEsfMzrkZu72kLmDBvV7gzN/cp
fP2DPiEhgUs/nrfhyan8mSe3
-----END PRIVATE KEY-----
`;

class QzTrayPrinter {
    constructor(zplCode) {
        this.zplCode = zplCode;
    }

    async print() {
        try {
            await this.connectToPrinter();
        } catch (error) {
            this.logError("Error in QzTrayPrinter:", error);
        }
    }

    async connectToPrinter() {
        try {
            await this.setupSecurity();

            if (!qz.websocket.isActive()) {
                await qz.websocket.connect();
                console.log("Connected to QZ Tray");
            }

            const printer = await this.findPrinter("zebra");
            if (!printer) {
                this.logError("No printers found.");
                return;
            }

            const config = this.createConfig(printer);
            await this.getVersion();
            await this.printLabel(config);
        } catch (error) {
            this.logError("Connection error:", error);
        }
    }

    async setupSecurity() {
        // Set certificate and signing function
        qz.security.setCertificatePromise((resolve) => resolve(CERTIFICATE));

        qz.security.setSignatureAlgorithm("SHA512"); // Since 2.1
        qz.security.setSignaturePromise(function (toSign) {
            return function (resolve, reject) {
                try {
                    var pk = KEYUTIL.getKey(PRIVATE_KEY);
                    var sig = new KJUR.crypto.Signature({
                        alg: "SHA512withRSA",
                    }); // Use "SHA1withRSA" for QZ Tray 2.0 and older
                    sig.init(pk);
                    sig.updateString(toSign);
                    var hex = sig.sign();
                    console.log("DEBUG: \n\n" + stob64(hextorstr(hex)));
                    resolve(stob64(hextorstr(hex)));
                } catch (err) {
                    console.error(err);
                    reject(err);
                }
            };
        });
    }

    async findPrinter(printerName) {
        const printers = await qz.printers.find(printerName);
        return printers.length > 0 ? printers[0] : null;
    }

    async getVersion() {
        try {
            const version = await qz.api.getVersion();
            console.log("QZ Tray Version:", version);
        } catch (error) {
            this.logError("Error retrieving version:", error);
        }
    }

    createConfig(printer) {
        return qz.configs.create(printer);
    }

    async printLabel(config) {
        try {
            await qz.print(config, [this.zplCode]);
            console.log("Printed successfully!");
        } catch (error) {
            this.logError("Error printing label:", error);
        }
    }

    logError(message, error) {
        console.error(message, error);
    }
}

export default QzTrayPrinter;
