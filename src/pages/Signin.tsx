import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

import { auth } from '@remote/firebase'
import Form from '@components/signin/Form'
import { FormValues } from '@models/signin'
import { useAlertContext } from '@contexts/AlertContext'

function SigninPage() {
  const { open } = useAlertContext()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (formValues: FormValues) => {
      const { email, password } = formValues

      try {
        await signInWithEmailAndPassword(auth, email, password)

        navigate('/')
      } catch (e) {
        if (e instanceof FirebaseError) {
          if (e.code === 'auth/invalid-credential') {
            open({
              title: '패스워드를 확인해주세요.',
              onButtonClick: () => {},
            })

            return
          }
        }

        open({
          title: '잠시 후 다시 시도해주세요.',
          onButtonClick: () => {},
        })
      }
    },
    [open, navigate],
  )

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage
