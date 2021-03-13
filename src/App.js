import { CssBaseline } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pages from './pages'
function App() {
  return (
    <>
    <CssBaseline/>
    <Pages/>
      <ToastContainer/>
    </>
  );
}

export default App;
