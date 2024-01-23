import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components';
import { browserPrint } from '@/utils';

function OldWay({ zplCodeOne, zplCodeTwo }) {
    const _printByTheOldWay = async (zplCode) => {
        browserPrint.printBarcode(zplCode);
    };

    // setUp and cleanUp for the old way
    useEffect(() => {
        browserPrint.setup();
        return () => {
            browserPrint.cleanup();
        };
    }, []);

    return (
        <div className='flex justify-start items-center gap-4'>
            <Button onClick={() => _printByTheOldWay(zplCodeOne)} className="bg-blue-500 text-white hover:bg-blue-600">
                Print 1
            </Button>
            <Button onClick={() => _printByTheOldWay(zplCodeTwo)} className="bg-blue-500 text-white hover:bg-blue-600">
                Print 2
            </Button>
        </div>
    );
}

OldWay.propTypes = {
    zplCodeOne: PropTypes.string.isRequired,
    zplCodeTwo: PropTypes.string.isRequired,
};

export default OldWay;
