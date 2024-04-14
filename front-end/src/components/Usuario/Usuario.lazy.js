import React, { lazy, Suspense } from 'react';

const LazyUsuario = lazy(() => import('./Usuario'));

const Usuario = props => (
  <Suspense fallback={null}>
    <LazyUsuario {...props} />
  </Suspense>
);

export default Usuario;
