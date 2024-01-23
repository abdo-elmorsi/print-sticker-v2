import PropTypes from 'prop-types';
import { Button } from '@/components';
import { qzTray } from '@/utils';

function NewWay({ zplCodeOne, zplCodeTwo }) {
    const _printByTheNewWay = async (zplCode) => {
        await qzTray(zplCode);
    };

    return (
        <div className='flex justify-start items-center gap-4'>
            <Button onClick={() => _printByTheNewWay(zplCodeOne)} className="bg-green-500 text-white hover:bg-green-600">
                Print 1
            </Button>
            <Button onClick={() => _printByTheNewWay(zplCodeTwo)} className="bg-green-500 text-white hover:bg-green-600">
                Print 2
            </Button>
        </div>
    );
}

NewWay.propTypes = {
    zplCodeOne: PropTypes.string.isRequired,
    zplCodeTwo: PropTypes.string.isRequired,
};

export default NewWay;
