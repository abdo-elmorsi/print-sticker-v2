import { useState } from 'react';
import { OldWay, NewWay, Switcher } from '@/components';

const zplCodeOne = `^XA
^CI28
^FO250,20^A@N,30,30^FDمرحبا^FS
^FO250,80^A@N,30,30^FDHello^FS
^XZ`;
const zplCodeTwo = `^XA
^FO250,20^A@N,30,30,E:TT0003M_.FNT^FDمرحبا^FS
^FO250,80^A@N,30,30^FDHello^FS
^XZ`;

const zplCodeThree = `^XA
^CI28
^FO250,20^A@N,30,30,E:TT0003M_.FNT^FDمرحبا^FS
^FO250,80^A@N,30,30^FDHello^FS
^XZ`;

const zplCodeFour = `^XA
^CI28
^CWZ,E:TT0003M_.TTF
^FT250,20^PA0,1,1,1^AZN,40^FDFDمرحبا^FS
^XZ`;

const zplCodeFive = `^XA
^FO250,20^A@N,20,20,E:TT0003M_.TTF^FDHello - 1^FS
^FO250,70^A@N,20,20,E:TT0003M_.TTF^FDمرحبا^FS

^FO250,120^A@N,20,20,E:SIMSUN.FNT^FDHello - 1^FS
^FO250,170^A@N,20,20,E:SIMSUN.FNT^FDمرحبا^FS

^FO250,220^A@N,20,20,E:ARIAL.TTF^FDHello - 2^FS
^FO250,270^A@N,20,20,E:ARIAL.TTF^FDمرحبا^FS

^FO250,320^A@N,20,20,E:TNR.FNT^FDHello - 3^FS
^FO250,370^A@N,20,20,E:TNR.FNT^FDمرحبا^FS

^FO250,420^A@N,20,20,E:TAHOMA.TTF^FDHello - 4^FS
^FO250,470^A@N,20,20,E:TAHOMA.TTF^FDمرحبا^FS

^FO250,520^A@N,20,20,E:VERDANA.TTF^FDHello - 5^FS
^FO250,570^A@N,20,20,E:VERDANA.TTF^FDمرحبا^FS

^FO250,620^A@N,20,20,E:ARIALUNI.TTF^FDHello - 6^FS
^FO250,670^A@N,20,20,E:ARIALUNI.TTF^FDمرحبا^FS

^FO250,720^A@N,20,20,E:SIMPLIFIED_ARABIC.FNT^FDHello - 7^FS
^FO250,770^A@N,20,20,E:SIMPLIFIED_ARABIC.FNT^FDمرحبا^FS

^FO250,820^A@N,20,20,E:TRADITIONAL_ARABIC.FNT^FDHello - 8^FS
^FO250,870^A@N,20,20,E:TRADITIONAL_ARABIC.FNT^FDمرحبا^FS

^FO250,920^A@N,20,20,E:GEEZAPRO.TTF^FDHello - 9^FS
^FO250,970^A@N,20,20,E:GEEZAPRO.TTF^FDمرحبا^FS
^XZ`;

const App = () => {

  const [isOldWay, setIsOldWay] = useState(true);
  const handleSwitcher = () => setIsOldWay(!isOldWay);

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-xl mt-52">
      <h1 className='p-10 pt-4 font-bold text-center '>Infinity | print-sticker V2</h1>
      <div className="p-8">
        <Switcher label={isOldWay ? 'Old Way' : 'New Way'} checked={isOldWay} onChange={handleSwitcher} />

        <div className="mt-4">
          {isOldWay ? (
            <OldWay
              zplCodeOne={zplCodeOne}
              zplCodeTwo={zplCodeTwo}
              zplCodeThree={zplCodeThree}
              zplCodeFour={zplCodeFour}
              zplCodeFive={zplCodeFive} />
          ) : (
            <NewWay
              zplCodeOne={zplCodeOne}
              zplCodeTwo={zplCodeTwo}
              zplCodeThree={zplCodeThree}
              zplCodeFour={zplCodeFour}
              zplCodeFive={zplCodeFive} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
