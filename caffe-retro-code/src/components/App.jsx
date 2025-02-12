import { links } from '../data/links';
import { rawData } from '../data/rawData';
import { Navbar } from './Navbar';
import { Section } from './Section';

function App() {
  return (
    <>
      <Navbar links={links} />
      {rawData.map((data) => (
        <Section data={data} key={data.header} />
      ))}
    </>
  );
}

export default App;
