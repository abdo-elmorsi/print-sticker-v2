import PropTypes from 'prop-types';
import { Button, Switcher } from '@/components';
import { qzTray, qzTrayTwo } from '@/utils';
import { useState } from 'react';

function NewWay({ zplCodeOne, zplCodeTwo, zplCodeThree, zplCodeFour }) {
    const [isOldWay, setIsOldWay] = useState(true);
    const handleSwitcher = () => setIsOldWay(!isOldWay);


    const _printByTheNewWay = async (zplCode) => {
        if (isOldWay) {
            await qzTray(zplCode);
        } else {
            await qzTrayTwo(zplCode);
        }
    };



    return (
        <div className='pt-10'>
            <Switcher label={isOldWay ? 'Version one' : 'Version two'} checked={isOldWay} onChange={handleSwitcher} />


            <div className='flex items-center justify-start gap-4 mt-8'>
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
    zplCodeOne: PropTypes.string.isRequired,
    zplCodeTwo: PropTypes.string.isRequired,
    zplCodeThree: PropTypes.string.isRequired,
    zplCodeFour: PropTypes.string.isRequired,
};

export default NewWay;
