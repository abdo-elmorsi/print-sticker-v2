import qz from "qz-tray";
import { KEYUTIL, KJUR, stob64, hextorstr } from "jsrsasign";

// Move certificates and keys to environment variables or a secure config
// export const CERTIFICATE = import.meta.env.VITE_QZ_CERTIFICATE;
// export const PRIVATE_KEY = import.meta.env.VITE_QZ_PRIVATE_KEY;
const CERTIFICATE = `-----BEGIN CERTIFICATE-----
MIIECzCCAvOgAwIBAgIGAZHcRJHUMA0GCSqGSIb3DQEBCwUAMIGiMQswCQYDVQQG
EwJVUzELMAkGA1UECAwCTlkxEjAQBgNVBAcMCUNhbmFzdG90YTEbMBkGA1UECgwS
UVogSW5kdXN0cmllcywgTExDMRswGQYDVQQLDBJRWiBJbmR1c3RyaWVzLCBMTEMx
HDAaBgkqhkiG9w0BCQEWDXN1cHBvcnRAcXouaW8xGjAYBgNVBAMMEVFaIFRyYXkg
RGVtbyBDZXJ0MB4XDTI0MDkwOTE0MDkyNloXDTQ0MDkwOTE0MDkyNlowgaIxCzAJ
BgNVBAYTAlVTMQswCQYDVQQIDAJOWTESMBAGA1UEBwwJQ2FuYXN0b3RhMRswGQYD
VQQKDBJRWiBJbmR1c3RyaWVzLCBMTEMxGzAZBgNVBAsMElFaIEluZHVzdHJpZXMs
IExMQzEcMBoGCSqGSIb3DQEJARYNc3VwcG9ydEBxei5pbzEaMBgGA1UEAwwRUVog
VHJheSBEZW1vIENlcnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC0
6SUDapFye49sBs0tiQXm48G4EJwtfn5fRh/xWnc7WWvwyGNaWkCg8GbE4fj9eRoh
PlCKwFlyTLB49AXktTLVk63vod0z7I6QHex2N4zjp6X3VnFiSjaRFvGfVkh+J2v9
Ojsq8gvTN53hb8Yt2ChmcJigGYH6xE+QvjMZnKU2Fk0yH9fWhEmKiC6ZyfaIdEqE
hHl6WHsJ+9uBgmo0aCV2RhnkZqUpICC3nGCJOWuJnwV1EGc4fOcbeEaTKB3NG7bT
dgyeNdTuDPWtXitLuP2ZshtQoCh+ZCvEX60WAIMBnbwRgF0lhkXaKR5Q3odUGI/4
ZW0HmuJ/kmywfQ+Wltc7AgMBAAGjRTBDMBIGA1UdEwEB/wQIMAYBAf8CAQEwDgYD
VR0PAQH/BAQDAgEGMB0GA1UdDgQWBBQGrWPPUxQcLzq2qRFM6UDCMVlQ/DANBgkq
hkiG9w0BAQsFAAOCAQEAUC3q9nvcAfeGEEyXmiFQpsSDbnYMIxMExdus9LY97fO4
TVSHVLsTz7bcv5GxlI/OWpaObWNK1i9MlVXl8rkrw0RnEt2F941tpsYdKiV8kp2e
pE6YqJjocadA4Rt+KgDzAxgw3H6swSaKwLFv+UeSRZMbhxa5FXk347FBuDPLPL8Y
4059my6zOIRKbMXZrL/xCe0YkbpqeOSSNPSGg14H/lMqNnzQWYKb63LFRReVOEG8
6cA2vxq1Z6bzqTr4Mm3lmqw3elY8UTJB5qUguMmPFBFPuS2B/aH+mwRt9vVuFMtC
2ENGzEE7VbAO/s/cWTXKybJPm1OdDkSwkchfAbRJnQ==
-----END CERTIFICATE-----
`;

const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC06SUDapFye49s
Bs0tiQXm48G4EJwtfn5fRh/xWnc7WWvwyGNaWkCg8GbE4fj9eRohPlCKwFlyTLB4
9AXktTLVk63vod0z7I6QHex2N4zjp6X3VnFiSjaRFvGfVkh+J2v9Ojsq8gvTN53h
b8Yt2ChmcJigGYH6xE+QvjMZnKU2Fk0yH9fWhEmKiC6ZyfaIdEqEhHl6WHsJ+9uB
gmo0aCV2RhnkZqUpICC3nGCJOWuJnwV1EGc4fOcbeEaTKB3NG7bTdgyeNdTuDPWt
XitLuP2ZshtQoCh+ZCvEX60WAIMBnbwRgF0lhkXaKR5Q3odUGI/4ZW0HmuJ/kmyw
fQ+Wltc7AgMBAAECggEAUyABatVvqVvO5cMmSbL5LEMggtPW/yxtIpfVG5AG0xVe
fI+G30AzDAAKKJLwVn9rmzTHy0lgkB1exOTTRGhhyDMIK+CDBFXAl8W4HgWeTgh9
QO3OQWx6MCaLtTvvKVAx1XQJNc1r04xtleVG+U+mGJPJ/V5bE/9Z09chIbaRTw0g
NfIDok31F0Ft/RcqcbEJDX9HS7ccDE16LqMd4x0aHg1txP97OrtvNmR4MntTJRWX
9I+fVxzdhqVgZTcgJxqz1x+RNOXnU2P6RtoNSW8nzXBrj8u0ahVKHoXpaGt9D7yw
CawQV3brT+buCKdGQwEaYiPmlbzOyTmNd3vyIhZNEQKBgQDi4xj2utEUfdi97duH
ycFSNeyQWnHdOGHKDl7xuyQtYcy7pTCxt4YPHwNucXOFwRvaqEjY6oScpABXCh3r
1bfx3JHwDonyKN+DNMOHNLdD6rrQbe5YjIwGnESDKJK1iOJFezXkR61hQnKXDnaU
XCwH+WXiuLKta5HKslMvhPsnIwKBgQDMH8qrCYK85hFj4ZcgygKhIUl/DcXJUzD8
4lVK1jGE7atiBJM3h2kaBbkViQXoOmgbb83j47f/oBJT4TgxUXzkKD8HwSpF3hVz
ZjIonwYir8WPUbpatHV3/I26YQFQM+7scA0XsS3bYPQ5EWBZgkeaPOKlin93e0pg
M2u4n1adCQKBgQDPYBzIHxbNMP1zE73MzgaJ2sm/YzuhpFAVO69iKNe3NyXG+QSZ
2xGILqOXRdD+FvQblicHRMsy1N+OrquMjAoV4bHuBYvmL5+jsA1rPi6nwBtCOMha
XRP7Usd4ThRSIqwWL7ihTzZUqEROdyTBE8IXA8gxQvnlcmWOLBHGZDiemwKBgQCd
mc440FcI0fmLTJoKzu3IypKcbl3PW1PvbDC+XzJMl9RDEZU4wmv7k3+biPfunWnU
BTbKRP/DdiuwZ6ujKG9tGUXRDus8loOpXbZMdrud/Ghkh42CiuJHic9Dn7IL4o0O
MFVrfXkScIEfrrLdaSEvjOLRPWW9MovySsFZAm01QQKBgQC+y2BHohPPVaa0WE8B
TUm5u4e8kiM13Z88+inkXRfOakot7ueE5RckxHsnm79iw5WwWcBYPV1WCac+W9Qk
yCI6racz+DP4nPC3c4DSzUqGSaL5fg3GBofsV3M6aWHDh9SQmuuKktRAJYXXJlHB
eloww9aCS8Z9oMPSGY3sBqAIig==
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
