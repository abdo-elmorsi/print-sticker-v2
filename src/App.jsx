import { useState } from 'react';
import { OldWay, NewWay, Switcher } from '@/components';

const zplCodeOne = `^XA
^CW2,E:ARI001.FNT
^CI28
^FO50,50^A@N,24,24,E:ARI001.FNT^FDمرحبا^FS
^FO50,100^A@N,24,24^FDHello^FS
^XZ`;

const zplCodeTwo = `^XA
^CW2,E:ARI001.FNT
^CI28
^FO50,50^A@N,24,24,E:ARI001.FNT^FDمرحبا^FS
^FO50,100^A@N,24,24^FDHello^FS
^XZ`;

const App = () => {

  const [isOldWay, setIsOldWay] = useState(true);
  const handleSwitcher = () => setIsOldWay(!isOldWay);

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-md shadow-md mt-52">
      <Switcher label={isOldWay ? 'Old Way' : 'New Way'} checked={isOldWay} onChange={handleSwitcher} />

      <div className="mt-4">
        {isOldWay ? (
          <OldWay zplCodeOne={zplCodeOne} zplCodeTwo={zplCodeTwo} />
        ) : (
          <NewWay zplCodeOne={zplCodeOne} zplCodeTwo={zplCodeTwo} />
        )}
      </div>
    </div>
  );
};

export default App;
