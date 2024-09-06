import PropTypes from 'prop-types';
import { Button } from '@/components';
import { QzTray } from '@/utils';

function NewWay({ forImage, zplCodeOne, zplCodeTwo, zplCodeThree, zplCodeFour }) {


    const _printByTheNewWay = async (zplCode) => {

        await QzTray(zplCode);

    };



    return (
        <div className='pt-10'>


            <div className='flex items-center justify-start gap-4 mt-8'>
                <Button onClick={() => _printByTheNewWay(forImage)} className="text-white bg-green-500 hover:bg-green-600">
                    image
                </Button>
                <Button onClick={() => _printByTheNewWay(zplCodeOne)} className="text-white bg-green-500 hover:bg-green-600">
                    Print 1
                </Button>
                <Button onClick={() => _printByTheNewWay(zplCodeTwo)} className="text-white bg-green-500 hover:bg-green-600">
                    Print 2
                </Button>
                <Button onClick={() => _printByTheNewWay(zplCodeThree)} className="text-white bg-green-500 hover:bg-green-600">
                    Print 3
                </Button>
                <Button onClick={() => _printByTheNewWay(zplCodeFour)} className="text-white bg-green-500 hover:bg-green-600">
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
