import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { css } from '@emotion/react'

import Flex from '@shared/Flex'
import Button from '@shared/Button'
import { colors } from '@styles/colorPalette'
import useUser from '@hooks/auth/useUser'
import { auth } from '@remote/firebase'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signin', '/signup'].includes(location.pathname) === false

  const user = useUser()

  const handleSignout = useCallback(() => {
    signOut(auth)
  }, [])

  const renderButton = useCallback(() => {
    if (user != null) {
      return <Button onClick={handleSignout}>로그아웃</Button>
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인 / 회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton, handleSignout])

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {renderButton()}
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
