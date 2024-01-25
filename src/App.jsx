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

const App = () => {

  const [isOldWay, setIsOldWay] = useState(true);
  const handleSwitcher = () => setIsOldWay(!isOldWay);

  return (
    <div className="max-w-md p-8 mx-auto bg-white rounded-md shadow-md mt-52">
      <Switcher label={isOldWay ? 'Old Way' : 'New Way'} checked={isOldWay} onChange={handleSwitcher} />

      <div className="mt-4">
        {isOldWay ? (
          <OldWay
            zplCodeOne={zplCodeOne}
            zplCodeTwo={zplCodeTwo}
            zplCodeThree={zplCodeThree}
            zplCodeFour={zplCodeFour} />
        ) : (
          <NewWay
            zplCodeOne={zplCodeOne}
            zplCodeTwo={zplCodeTwo}
            zplCodeThree={zplCodeThree}
            zplCodeFour={zplCodeFour} />
        )}
      </div>
    </div>
  );
};

export default App;
