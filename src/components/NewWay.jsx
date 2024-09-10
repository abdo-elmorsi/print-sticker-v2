import PropTypes from 'prop-types';
import { Button } from '@/components';

import QzTrayPrinter from '../utils/QzTray';

function NewWay({ forImage, zplCodeOne, zplCodeTwo, zplCodeThree, zplCodeFour }) {

    const printLabel = async (zplCode) => {
        try {
            const printer = new QzTrayPrinter(zplCode);
            await printer.print();
        } catch (error) {
            console.error("Print error:", error);
        }
    };



    return (
        <div className='pt-10'>
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