import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import App      from './App';
import Home     from './pages/Home';
import About    from './pages/About';
import Logement from './pages/Logement';
import Error    from './pages/Error';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}>
      <Route index             element={<Home />}    /> 
      <Route path="apropos"    element={<About />}    />
      <Route path="logement/:id" element={<Logement />} />
      <Route path="*"          element={<Error />}    />
    </Route>

  )
);

export default router;