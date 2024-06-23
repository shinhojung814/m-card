import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@remote/firebase'

function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialized, setInitialized] = useState(false)

  onAuthStateChanged(auth, (user) => {
    setInitialized(true)
  })

  if (initialized === false) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
