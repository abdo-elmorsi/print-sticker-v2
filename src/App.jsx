import { useState } from 'react';
import { OldWay, NewWay, Switcher } from '@/components';

const zplCodeOne = `^XA
^CW2,E:ARI001.FNT
^CI28
^FO50,50^A@N,24,24,E:ARI001.FNT^FDمرحبا^FS
^FO50,100^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeTwo = `^XA
^CI28
^CW1,E:ARI001.FNT
^FO50,50^A@N,24,24,E:ARI001.FNT^FDمرحبا^FS
^FO50,100^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeThree = `^XA
^CI28
^FO50,50^A@N,24,24,E:TT0003M_.FNT^FDمرحبا^FS
^FO50,100^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeFour = `^XA
^CI28
^FO50,50^A@N,24,24,E:TT0003M.TTF^FDمرحبا^FS
^FO50,100^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeFive = `^XA
^FO50,50^A@N,30,30,E:SIMSUN.FNT^FDHello - 1^FS
^FO50,100^A@N,30,30,E:SIMSUN.FNT^FDمرحبا^FS

^FO50,150^A@N,30,30,E:ARIAL.TTF^FDHello - 2^FS
^FO50,200^A@N,30,30,E:ARIAL.TTF^FDمرحبا^FS

^FO50,250^A@N,30,30,E:TNR.FNT^FDHello - 3^FS
^FO50,300^A@N,30,30,E:TNR.FNT^FDمرحبا^FS

^FO50,350^A@N,30,30,E:TAHOMA.TTF^FDHello - 4^FS
^FO50,400^A@N,30,30,E:TAHOMA.TTF^FDمرحبا^FS

^FO50,450^A@N,30,30,E:VERDANA.TTF^FDHello - 5^FS
^FO50,500^A@N,30,30,E:VERDANA.TTF^FDمرحبا^FS

^FO50,550^A@N,30,30,E:ARIALUNI.TTF^FDHello - 6^FS
^FO50,600^A@N,30,30,E:ARIALUNI.TTF^FDمرحبا^FS

^FO50,650^A@N,30,30,E:SIMPLIFIED_ARABIC.FNT^FDHello - 7^FS
^FO50,700^A@N,30,30,E:SIMPLIFIED_ARABIC.FNT^FDمرحبا^FS

^FO50,750^A@N,30,30,E:TRADITIONAL_ARABIC.FNT^FDHello - 8^FS
^FO50,800^A@N,30,30,E:TRADITIONAL_ARABIC.FNT^FDمرحبا^FS

^FO50,850^A@N,30,30,E:GEEZAPRO.TTF^FDHello - 9^FS
^FO50,900^A@N,30,30,E:GEEZAPRO.TTF^FDمرحبا^FS
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
              zplCodeFive={zplCodeFour} />
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
