import { useState } from 'react';
import { OldWay, NewWay, Switcher } from '@/components';

const zplCodeOne = `^XA
^CW2,E:ARI001.FNT
^CI28
^FO0,50^A@N,24,24,E:ARI001.FNT^FDمرحبا^FS
^FO20,70^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeTwo = `^XA
^CI28
^CW1,E:ARI001.FNT
^FO0,50^A@N,24,24,E:ARI001.FNT^FDمرحبا^FS
^FO20,70^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeThree = `^XA
^CI28
^FO0,50^A@N,24,24,E:TT0003M_.FNT^FDمرحبا^FS
^FO20,70^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeFour = `^XA
^CI28
^CWZ,E:TT0003M_.TTF
^FT0,50^PA0,1,1,1^AZN,40^FDFDمرحبا^FS
^XZ`;

const zplCodeFive = `^XA
^FO5,50^A@N,30,30,E:TT0003M_.TTF^FDHello - 1^FS
^FO5,100^A@N,30,30,E:TT0003M_.TTF^FDمرحبا^FS

^FO5,50^A@N,30,30,E:SIMSUN.FNT^FDHello - 1^FS
^FO5,100^A@N,30,30,E:SIMSUN.FNT^FDمرحبا^FS

^FO5,150^A@N,30,30,E:ARIAL.TTF^FDHello - 2^FS
^FO5,200^A@N,30,30,E:ARIAL.TTF^FDمرحبا^FS

^FO5,250^A@N,30,30,E:TNR.FNT^FDHello - 3^FS
^FO5,300^A@N,30,30,E:TNR.FNT^FDمرحبا^FS

^FO5,350^A@N,30,30,E:TAHOMA.TTF^FDHello - 4^FS
^FO5,400^A@N,30,30,E:TAHOMA.TTF^FDمرحبا^FS

^FO5,450^A@N,30,30,E:VERDANA.TTF^FDHello - 5^FS
^FO5,500^A@N,30,30,E:VERDANA.TTF^FDمرحبا^FS

^FO5,550^A@N,30,30,E:ARIALUNI.TTF^FDHello - 6^FS
^FO5,600^A@N,30,30,E:ARIALUNI.TTF^FDمرحبا^FS

^FO5,650^A@N,30,30,E:SIMPLIFIED_ARABIC.FNT^FDHello - 7^FS
^FO5,700^A@N,30,30,E:SIMPLIFIED_ARABIC.FNT^FDمرحبا^FS

^FO5,750^A@N,30,30,E:TRADITIONAL_ARABIC.FNT^FDHello - 8^FS
^FO5,800^A@N,30,30,E:TRADITIONAL_ARABIC.FNT^FDمرحبا^FS

^FO5,850^A@N,30,30,E:GEEZAPRO.TTF^FDHello - 9^FS
^FO5,900^A@N,30,30,E:GEEZAPRO.TTF^FDمرحبا^FS
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
