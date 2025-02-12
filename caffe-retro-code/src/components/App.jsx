import { links } from '../data/links';
import { Navbar } from './Navbar';

function App() {
  return (
    <>
      <Navbar links={links} />
    </>
  );
}

export default App;
