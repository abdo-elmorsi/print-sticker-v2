import PropTypes from 'prop-types';
import { Button } from '@/components';
import { qzTray } from '@/utils';

function NewWay({ zplCodeOne, zplCodeTwo, zplCodeThree, zplCodeFour, zplCodeFive }) {
    const _printByTheNewWay = async (zplCode) => {
        await qzTray(zplCode);
    };

    return (
        <div className='flex items-center justify-start gap-4'>
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
            <Button onClick={() => _printByTheNewWay(zplCodeFive)} className="text-white bg-green-500 hover:bg-green-600">
                Print 4
            </Button>
        </div>
    );
}

NewWay.propTypes = {
    zplCodeOne: PropTypes.string.isRequired,
    zplCodeTwo: PropTypes.string.isRequired,
    zplCodeThree: PropTypes.string.isRequired,
    zplCodeFour: PropTypes.string.isRequired,
    zplCodeFive: PropTypes.string.isRequired,
};

export default NewWay;
