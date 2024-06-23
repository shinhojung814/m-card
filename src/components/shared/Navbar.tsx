import { Link, useLocation } from 'react-router-dom'
import { css } from '@emotion/react'

import Flex from './Flex'
import Button from './Button'
import { colors } from '@/styles/colorPalette'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signin', '/signup'].includes(location.pathname) === false

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {showSignButton ? (
        <Link to="/signin">
          <Button>로그인 / 회원가입</Button>
        </Link>
      ) : null}
    </Flex>
  )
}

const navbarContainerStyles = css`
  position: sticky;
  top: 0;
  padding: 10px 24px;
  border-bottom: solid 1px ${colors.grey};
  background-color: ${colors.white};
  z-index: 10;
`

export default Navbar
