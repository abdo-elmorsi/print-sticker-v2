import { useState } from 'react';
import { OldWay, NewWay, Switcher } from '@/components';
const zplCodeOne = `^XA
^LH0,0
^CI28
^FO260,25^A@N,20,20,E:TT0003M_.FNT^FPR^FDعربي : ra^FS
^FO260,54^PA0,1,1,1^A@N,20,20,E:TT0003M_.FNT^FDعربي : ar^FS
^XZ`;

const zplCodeTwo = `^XA
^LH0,0
^CI28
^FO260,25^A@N,20,20,E:SIMTT0003M_.FNT^FDعربي : ra^FS
^FO260,54^A@N,20,20,E:SIMTT0003M_.FNT^FDعربي : ar^FS
^XZ`;

const zplCodeThree = `^XA
^CI28
^CWZ,E:TT0003M_.TTF

^FT260,25^PA0,1,1,1^AZN,40^FDعربي : ar^FS
^FT260,54^PA0,1,1,1^AZN,40^FDعربي : ar^FS
^XZ`;


const zplCodeFour = `^XA
^CI28
^CWZ,E:TT0003M_.FNT
^FT260,25^PA0,1,1,1^AZN,40^FDعربي : ar^FS
^FT260,54^PA0,1,1,1^AZN,40^FDعربي : ar^FS
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
            />
          ) : (
            <NewWay
              zplCodeOne={zplCodeOne}
              zplCodeTwo={zplCodeTwo}
              zplCodeThree={zplCodeThree}
              zplCodeFour={zplCodeFour}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;




/* 

    const zplCodeOne = `^XA
    ^LH0,0
    ^CI28
    ^FO260,25^A@N,20,20,E:TT0003M_.FNT^FDالاسم^FS
    ^FO260,54^APN,20^FDG: 1000^FS
    ^FO466,81^A@N,20,20,E:TT0003M_.FNT^FDI-Nالاسم^FS
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

*/