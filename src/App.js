import logo from './images/logo.png';
import Expression from './Expression';

function App() {
  return (
    <main>
      <section>
        <img className='logo' src={logo} alt='logo' />
        <Expression />
      </section>
    </main>
  );
}

export default App;
