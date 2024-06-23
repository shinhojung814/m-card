import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { css } from '@emotion/react'
import validator from 'validator'

import Flex from '@shared/Flex'
import TextField from '@shared/TextField'
import FixedBottomButton from '@shared/FixedBottomButton'
import Spacing from '@shared/Spacing'

import { FormValues } from '@models/signup'

function Form({ onSubmit }: { onSubmit: (formValues: FormValues) => void }) {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  })

  const [isDirty, setIsDirty] = useState<Partial<FormValues>>({})

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const handleFormBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIsDirty((prev) => ({
      ...prev,
      [e.target.name]: 'true',
    }))
  }, [])

  const formErrors = useMemo(() => validateFormValues(formValues), [formValues])

  const isValidForm = Object.keys(formErrors).length === 0

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        name="email"
        label="이메일"
        placeholder="tomoong@gmail.com"
        value={formValues.email}
        onChange={handleFormValues}
        hasError={Boolean(isDirty.email) && Boolean(formErrors.email)}
        helpMessage={Boolean(isDirty.email) ? formErrors.email : ''}
        onBlur={handleFormBlur}
      />
      <Spacing direction="vertical" size={16} />
      <TextField
        name="password"
        label="패스워드"
        type="password"
        placeholder="********"
        value={formValues.password}
        onChange={handleFormValues}
        hasError={Boolean(isDirty.password) && Boolean(formErrors.password)}
        helpMessage={Boolean(isDirty.password) ? formErrors.password : ''}
        onBlur={handleFormBlur}
      />
      <Spacing direction="vertical" size={16} />
      <TextField
        name="rePassword"
        label="패스워드 확인"
        type="password"
        placeholder="********"
        value={formValues.rePassword}
        onChange={handleFormValues}
        hasError={Boolean(isDirty.rePassword) && Boolean(formErrors.rePassword)}
        helpMessage={Boolean(isDirty.rePassword) ? formErrors.rePassword : ''}
        onBlur={handleFormBlur}
      />
      <Spacing direction="vertical" size={16} />
      <TextField
        name="name"
        label="이름"
        placeholder="토뭉"
        value={formValues.name}
        onChange={handleFormValues}
        hasError={Boolean(isDirty.name) && Boolean(formErrors.name)}
        helpMessage={Boolean(isDirty.name) ? formErrors.name : ''}
        onBlur={handleFormBlur}
      />
      <FixedBottomButton
        label="확인"
        onClick={() => {
          onSubmit(formValues)
        }}
        disabled={isValidForm === false}
      />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`

function validateFormValues(formValues: FormValues) {
  let errors: Partial<FormValues> = {}

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식을 확인해주세요.'
  }

  if (formValues.password.length < 8) {
    errors.password = '패스워드를 8자 이상 입력해주세요.'
  }

  if (formValues.rePassword.length < 8) {
    errors.rePassword = '패스워드를 8자 이상 입력해주세요.'
  } else if (
    validator.equals(formValues.password, formValues.rePassword) === false
  ) {
    errors.rePassword = '패스워드를 확인해주세요.'
  }

  if (formValues.name.length < 2) {
    errors.name = '이름을 2자 이상 입력해주세요.'
  }

  return errors
}

export default Form
