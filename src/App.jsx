import { useState } from 'react';
import { OldWay, NewWay, Switcher } from '@/components';

const zplCodeOne = `^XA
^CW2,E:ARI001.FNT
^CI28
^FO377,44^A@N,24,24,E:ARI001.FNT^FDمرحبا^FS
^FO377,55^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeTwo = `^XA
^CI28
^CW1,E:ARI001.FNT
^FO377,44^A@N,24,24,E:ARI001.FNT^FDمرحبا^FS
^FO377,55^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeThree = `^XA
^CI28
^FO377,44^A@N,24,24,E:TT0003M_.FNT^FDمرحبا^FS
^FO377,55^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeFour = `^XA
^CI28
^CWZ,E:TT0003M_.TTF
^FT377,44^PA0,1,1,1^AZN,40^FDFDمرحبا^FS
^XZ`;

const zplCodeFive = `^XA
^FO377,44^A@N,30,30,E:TT0003M_.TTF^FDHello - 1^FS
^FO377,55^A@N,30,30,E:TT0003M_.TTF^FDمرحبا^FS

^FO377,66^A@N,30,30,E:SIMSUN.FNT^FDHello - 1^FS
^FO377,77^A@N,30,30,E:SIMSUN.FNT^FDمرحبا^FS

^FO377,88^A@N,30,30,E:ARIAL.TTF^FDHello - 2^FS
^FO377,99^A@N,30,30,E:ARIAL.TTF^FDمرحبا^FS

^FO377,110^A@N,30,30,E:TNR.FNT^FDHello - 3^FS
^FO377,120^A@N,30,30,E:TNR.FNT^FDمرحبا^FS

^FO377,130^A@N,30,30,E:TAHOMA.TTF^FDHello - 4^FS
^FO377,140^A@N,30,30,E:TAHOMA.TTF^FDمرحبا^FS

^FO377,150^A@N,30,30,E:VERDANA.TTF^FDHello - 5^FS
^FO377,160^A@N,30,30,E:VERDANA.TTF^FDمرحبا^FS

^FO377,170^A@N,30,30,E:ARIALUNI.TTF^FDHello - 6^FS
^FO377,180^A@N,30,30,E:ARIALUNI.TTF^FDمرحبا^FS

^FO377,190^A@N,30,30,E:SIMPLIFIED_ARABIC.FNT^FDHello - 7^FS
^FO377,200^A@N,30,30,E:SIMPLIFIED_ARABIC.FNT^FDمرحبا^FS

^FO377,210^A@N,30,30,E:TRADITIONAL_ARABIC.FNT^FDHello - 8^FS
^FO377,220^A@N,30,30,E:TRADITIONAL_ARABIC.FNT^FDمرحبا^FS

^FO377,230^A@N,30,30,E:GEEZAPRO.TTF^FDHello - 9^FS
^FO377,240^A@N,30,30,E:GEEZAPRO.TTF^FDمرحبا^FS
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
