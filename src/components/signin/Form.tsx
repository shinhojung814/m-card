import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import validator from 'validator'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'
import TextField from '@shared/TextField'
import Spacing from '@shared/Spacing'
import { colors } from '@styles/colorPalette'
import { FormValues } from '@models/signin'

function Form({ onSubmit }: { onSubmit: (formValues: FormValues) => void }) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const errors = useMemo(() => validateFormValues(formValues), [formValues])

  const isValidForm = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        name="email"
        label="이메일"
        placeholder="tomoong@gmail.com"
        onChange={handleFormValues}
      />
      <Spacing direction="vertical" size={16} />
      <TextField
        name="password"
        label="패스워드"
        type="password"
        placeholder="********"
        onChange={handleFormValues}
      />
      <Spacing direction="vertical" size={32} />
      <Button
        size="medium"
        disabled={isValidForm === false}
        onClick={() => {
          onSubmit(formValues)
        }}
      >
        로그인
      </Button>
      <Spacing direction="vertical" size={12} />
      <Link to="/signup" css={linkStyles}>
        <Text typography="t7">아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  )
}

function validateFormValues(formValues: FormValues) {
  let errors: Partial<FormValues> = {}

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식을 확인해주세요.'
  }

  if (formValues.password.length < 8) {
    errors.password = '패스워드를 8자 이상 입력해주세요.'
  }

  return errors
}

const formContainerStyles = css`
  padding: 24px;
`

const linkStyles = css`
  text-align: center;

  & > span:hover {
    color: ${colors.blue};
  }
`

export default Form
