import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RemoteComponent } from '../loaderMfe';

const dynamicRoutes = [
  {
    id: 1,
    path: '/',
    component: 'http://localhost:9001/remoteEntry.js',
    url: 'http://localhost:9001/remoteEntry.js',
    moduleFederationName: 'reactMfe',
    module: './products'
  },
]

export const Router = () => {
  return (
    <Routes>
        {dynamicRoutes.map(route => (
          <Route
            key={route.id}
            path={route.path}
            element={
              <RemoteComponent
                remoteComponent={{
                  url: route.url,
                  component: route.component,
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