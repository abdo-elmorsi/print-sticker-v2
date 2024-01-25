import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components';
import { browserPrint } from '@/utils';

function OldWay({ zplCodeOne, zplCodeTwo, zplCodeThree, zplCodeFour }) {
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
        <div className='flex items-center justify-start gap-4'>
            <Button onClick={() => _printByTheOldWay(zplCodeOne)} className="text-white bg-blue-500 hover:bg-blue-600">
                Print 1
            </Button>
            <Button onClick={() => _printByTheOldWay(zplCodeTwo)} className="text-white bg-blue-500 hover:bg-blue-600">
                Print 2
            </Button>
            <Button onClick={() => _printByTheOldWay(zplCodeThree)} className="text-white bg-blue-500 hover:bg-blue-600">
                Print 3
            </Button>
            <Button onClick={() => _printByTheOldWay(zplCodeFour)} className="text-white bg-blue-500 hover:bg-blue-600">
                Print 4
            </Button>
        </div>
    );
}

OldWay.propTypes = {
    zplCodeOne: PropTypes.string.isRequired,
    zplCodeTwo: PropTypes.string.isRequired,
    zplCodeThree: PropTypes.string.isRequired,
    zplCodeFour: PropTypes.string.isRequired,
};

export default OldWay;
