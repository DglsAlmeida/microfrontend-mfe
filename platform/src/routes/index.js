import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RemoteComponent } from '../LoaderMfe';

const dynamicRoutes = [
  {
    id: 1,
    path: '/',
    url: 'http://localhost:3001/remoteEntry.js',
    moduleFederationName: 'reactMfe',
    module: './products',
    exact: true
  },
]

export const Router = () => {
  return (
    <Routes>
        {dynamicRoutes.map(route => (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            element={
              <RemoteComponent
                remoteComponent={{
                  url: route.url,
                  scope: route.moduleFederationName,
                  module: route.module,
                }}
              />
            }
          />
        ))}
    </Routes>
  )
}