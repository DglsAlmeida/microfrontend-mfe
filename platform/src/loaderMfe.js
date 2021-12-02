import React, { useEffect } from 'react'
import { Loader } from './components/Loader'

const loadComponent = (scope, module) => {
  return async () => {
    await __webpack_init_sharing__('default')
    const container = window[scope]
    await container.init(__webpack_share_scopes__.default)
    const factory = await window[scope].get(module)
    const Module = factory()
    return Module
  }
}

const useDynamicScript = (url) => {
  const [ready, setReady] = React.useState(false)
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    if (!url) {
      return
    }

    const element = document.createElement('script')

    element.src = url
    element.type = 'text/javascript'
    element.async = true

    setReady(false)
    setFailed(false)

    element.onload = () => {
      setReady(true)
    }

    element.onerror = () => {
      setReady(false)
      setFailed(true)
    }

    document.head.appendChild(element)

    return () => {
      document.head.removeChild(element)
    }
  }, [url])

  return {
    ready,
    failed
  }
}

export const RemoteComponent = ({
  remoteComponent,
  setLoading
}) => {
  const { ready, failed } = useDynamicScript(
    remoteComponent && remoteComponent.url
  )

  useEffect(() => {
    if (setLoading) {
      setLoading(!ready)
    }
  }, [ready])

  if (!remoteComponent) {
    return <h2>Not remote component specified</h2>
  }

  if (!ready && !failed) {
    return (
      <div 
        style={{ 
          width: '100%', 
          marginTop: '100px',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
        }}
      >
        <Loader  />
      </div>
    )
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {remoteComponent.url}</h2>
  }

  const Component = React.lazy(
    loadComponent(remoteComponent.scope, remoteComponent.module)
  )

  return (
    <React.Suspense fallback="">
      <Component />
    </React.Suspense>
  )
}
