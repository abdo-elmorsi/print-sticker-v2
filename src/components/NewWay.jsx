import PropTypes from 'prop-types';
import { Button } from '@/components';
import { useSavedState } from '@/hooks';

import QzTrayPrinter from '../utils/QzTray';

function NewWay({ forImage, zplCodeOne, zplCodeTwo, zplCodeThree, zplCodeFour }) {
    const [CERTIFICATE, setCERTIFICATE] = useSavedState(`-----BEGIN CERTIFICATE-----
MIIECzCCAvOgAwIBAgIGAZHcgX6mMA0GCSqGSIb3DQEBCwUAMIGiMQswCQYDVQQG
EwJVUzELMAkGA1UECAwCTlkxEjAQBgNVBAcMCUNhbmFzdG90YTEbMBkGA1UECgwS
UVogSW5kdXN0cmllcywgTExDMRswGQYDVQQLDBJRWiBJbmR1c3RyaWVzLCBMTEMx
HDAaBgkqhkiG9w0BCQEWDXN1cHBvcnRAcXouaW8xGjAYBgNVBAMMEVFaIFRyYXkg
RGVtbyBDZXJ0MB4XDTI0MDkwOTE1MTU1OVoXDTQ0MDkwOTE1MTU1OVowgaIxCzAJ
BgNVBAYTAlVTMQswCQYDVQQIDAJOWTESMBAGA1UEBwwJQ2FuYXN0b3RhMRswGQYD
VQQKDBJRWiBJbmR1c3RyaWVzLCBMTEMxGzAZBgNVBAsMElFaIEluZHVzdHJpZXMs
IExMQzEcMBoGCSqGSIb3DQEJARYNc3VwcG9ydEBxei5pbzEaMBgGA1UEAwwRUVog
VHJheSBEZW1vIENlcnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDP
kLIP912XajZ4Irq2YNX5m71nfP4q+toryTso4VPLHCDT8mb7yaMAe1tdBYmp8QX5
r7kEx+3XSThM7hLmA5UH5U8pSdfbtDiByLoVIJcLESrWY2nr3F3Ip5J/di43nIPU
ptSFfLbEv4DbrPK0aIv1D66I/IOI+pRF9Fu+U0+4eGQT41x5Vofb71b1gJVCUcuX
d4W/TNFnrEr0AL7yGHmhIWPgBZCtTcTFEed8ej7mOaS8h3/i147xrHMo2B5Z3XOw
HzerOp169vv4i83c7MKiNZPSWM8Z6OwNNFx/NQNcwphdTRMO1nWpdA0cssEQNqBg
oXe23JsNxOgToG4mg4v/AgMBAAGjRTBDMBIGA1UdEwEB/wQIMAYBAf8CAQEwDgYD
VR0PAQH/BAQDAgEGMB0GA1UdDgQWBBQgyr2FlT73NQL9CnYbH38EnHJzUzANBgkq
hkiG9w0BAQsFAAOCAQEAu//r4OZX5Z7WTnL7QGvdi1/KCzZ4zurK2SxEMRvVP+aG
UhCm0pntH/5IF255shIcb8ck4O3PY2aEhypDqb5XwBz4yQalki7A/Cx40L+/Jpkv
/buXt7FqHpZVxY/ZBjDu3PifAJyIpRWN9FT6LAnpNk9qvBkbRE7dsQDc0c9keWDI
51N6giexR3yDIa9wkDEVkqQHssw79rFjArq0xgoba1AJWGUOf2NSgodYAKYdVvBJ
bukyewA+H8ZKgIVAOEQd3SiusVgl8hu5TL05/kimSQRDJjwWoz72oShPfmfrLEo1
X6XYAzDGAPl7KkytRKhA22XUCuWslpc0NUDb3qgbsw==
-----END CERTIFICATE-----`, 'CERTIFICATE')
    const [PRIVATE, setPRIVATE] = useSavedState(`-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDPkLIP912XajZ4
Irq2YNX5m71nfP4q+toryTso4VPLHCDT8mb7yaMAe1tdBYmp8QX5r7kEx+3XSThM
7hLmA5UH5U8pSdfbtDiByLoVIJcLESrWY2nr3F3Ip5J/di43nIPUptSFfLbEv4Db
rPK0aIv1D66I/IOI+pRF9Fu+U0+4eGQT41x5Vofb71b1gJVCUcuXd4W/TNFnrEr0
AL7yGHmhIWPgBZCtTcTFEed8ej7mOaS8h3/i147xrHMo2B5Z3XOwHzerOp169vv4
i83c7MKiNZPSWM8Z6OwNNFx/NQNcwphdTRMO1nWpdA0cssEQNqBgoXe23JsNxOgT
oG4mg4v/AgMBAAECggEATCt7TKSoMdKGXpvQDPGIVGs0nG+gDkG0InFcRmo6B8Uw
vtaruCaMrLaYFpDbrgOG/9Pef8SmoWR7Rq/vO32BCT67SBmTH0sJmYcB0pL9GtCX
+cjNrAJYYDQubJv/5eSH9FeskbfsklL8hKD5B/99rNauZBLWakQaeXls2XFVRgou
3O7mZvAJ9ch6mr6ICf2rvxBKfD99e07JG0xANYixe0s4PfXIB/vlwwJtzARoHjri
H/sco2oOwrkmE8yYZC1JyOdlmb31EoIMKIo0BwCGMNUHXFeco1q+VOFyIBeF7wtx
tXebKwNVOxpFFjN7tq+B/SrjLnTSX5+FIwC2lrsXUQKBgQDtf6PqjFXvhvJJwoIX
EnUk9Fl22hGHMUR9N8GHn1+lKjeLRCCein8G0v0YT9Z7rw0C6wocMwgaLcAvt3Y5
kq7ZzEPaKM764vfF/Vx0lJ84Yl+0V+nayxjWdIKj9rJsqG/gAGMarBqTZ+8OHizg
v94FF0tva5r19inYX8f+FxT1tQKBgQDfvBpzrFfOc1ITXCeoT/KPYb0SBOjs+sWv
A7MY50nGmwMZjJDlpE8o6cFZDvB8kmiDpIOpvkIYbTwx7uqWk03gA5CdQgEz7bys
+vfdF0ovWi2fxFwU9HKbl+M6cYsE04SigsBzMfoQ+wl5sutyZaS1H8VI7y552XxP
3Kh064rLYwKBgA8x6GncOq9NgfjoIeyZ+La5j3PENfThWRFt3MrxjmwBzHXzkOaz
07a7DwhcK0vUgk+afBYbybvrC23CHiVG1jsHD5xImh2BIfsf36dxztILsTXXnhWq
gtdNswIMiZPcHvRE8hJFypl9v9S2Z4aln+3RdLkXOF3eNwUp86C1F1k1AoGBANJ7
bUs7bNPdq+5ouSpgJCr94VjNY7Bmb4mp6ljYZpDAjlb/5eUVAh/UYcB+DIK1XjvS
jscnJZlDUukLAoksBYxk7izzxpvq4aC+7maCHZmUte1jVtmj6xoz92KpJQciUtps
Nc9pyf8lnJFwYI6bzytSu1BVLB0YHRoo1hZA7a9PAoGBAK/niK9ASltxP3w/3UDC
VLbKv8XNZ0pahKiLTtyPt6qKyTpdSfnv94rmp3atakWi/YPwK71oRl4PSO6UQLJ+
x+Q2iefR7/H3oXgSkI+UkzmvoonU4UIiMmhq15dTlUvkquJPRe88N2y7Apwoq9zg
aKLaplEEAzBzwDxI3YBZ+dmM
-----END PRIVATE KEY-----`, 'PRIVATE')

    const printLabel = async (zplCode) => {
        try {
            const printer = new QzTrayPrinter(zplCode, CERTIFICATE, PRIVATE);
            await printer.print();
        } catch (error) {
            console.error("Print error:", error);
        }
    };




    return (
        <div className='pt-10'>
            <div className='mb-2'>
                <label>CERTIFICATE</label>
                <textarea value={CERTIFICATE} onChange={(e) => setCERTIFICATE(e.target.value)} className='w-full rounded-sm border-2 border-gray-300' />
            </div>
            <div className='mb-2'>
                <label>PRIVATE KEY</label>
                <textarea value={PRIVATE} onChange={(e) => setPRIVATE(e.target.value)} className='w-full rounded-sm border-2 border-gray-300' />
            </div>
            <div className='flex items-center justify-start gap-4 mt-8'>
                <Button onClick={() => printLabel(forImage)} className="text-white bg-green-500 hover:bg-green-600">
                    Image
                </Button>
                <Button onClick={() => printLabel(zplCodeOne)} className="text-white bg-green-500 hover:bg-green-600">
                    Print 1
                </Button>
                <Button onClick={() => printLabel(zplCodeTwo)} className="text-white bg-green-500 hover:bg-green-600">
                    Print 2
                </Button>
                <Button onClick={() => printLabel(zplCodeThree)} className="text-white bg-green-500 hover:bg-green-600">
                    Print 3
                </Button>
                <Button onClick={() => printLabel(zplCodeFour)} className="text-white bg-green-500 hover:bg-green-600">
                    Print 4
                </Button>

            </div>
        </div>
    );
}

NewWay.propTypes = {
    forImage: PropTypes.string.isRequired,
    zplCodeOne: PropTypes.string.isRequired,
    zplCodeTwo: PropTypes.string.isRequired,
    zplCodeThree: PropTypes.string.isRequired,
    zplCodeFour: PropTypes.string.isRequired,
};

export default NewWay;