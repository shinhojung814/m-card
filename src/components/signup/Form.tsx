import { css } from '@emotion/react'

import Flex from '@shared/Flex'
import TextField from '@shared/TextField'
import FixedBottomButton from '@shared/FixedBottomButton'
import Spacing from '@shared/Spacing'

function Form() {
  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField label="이메일" placeholder="tomoong@gmail.com" />
      <Spacing direction="vertical" size={16} />
      <TextField label="패스워드" type="password" placeholder="********" />
      <Spacing direction="vertical" size={16} />
      <TextField label="패스워드 확인" type="password" placeholder="********" />
      <Spacing direction="vertical" size={16} />
      <TextField label="이름" placeholder="토뭉" />
      <FixedBottomButton label="확인" onClick={() => {}} disabled={true} />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`

export default Form
