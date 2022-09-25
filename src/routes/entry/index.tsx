import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from '@constants/route';
import Layout from '@routes/entry/layout';
import SuspenseWrap from '@components/suspense-wrap';

const Home = lazy(() => import('@routes/home'));
const Product = lazy(() => import('@routes/product'));
const ReactApp = lazy(() => import('@routes/react-app'));
const VueApp = lazy(() => import('@routes/vue-app'));

const App = () => {
  return (
    <Routes>
      <Route path={`${ROUTES.Index}*`} element={<SuspenseWrap render={<Layout />}></SuspenseWrap>}>
        <Route path={`${ROUTES.Home}`} element={<SuspenseWrap render={<Home />} />}></Route>
        <Route path={`${ROUTES.Product}`} element={<SuspenseWrap render={<Product />} />}></Route>
        <Route path={`${ROUTES.ReactApp}/*`} element={<SuspenseWrap render={<ReactApp />} />}></Route>
        <Route path={`${ROUTES.VueApp}`} element={<SuspenseWrap render={<VueApp />} />}></Route>
        <Route index element={<Navigate to={ROUTES.Home} replace />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
