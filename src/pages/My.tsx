import { useCallback } from 'react'
import { signOut } from 'firebase/auth'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'
import MyImage from '@components/my/MyImage'
import { auth } from '@remote/firebase'
import useUser from '@hooks/auth/useUser'

function MyPage({}) {
  const user = useUser()

  const handleSignout = useCallback(() => {
    signOut(auth)
  }, [])

  return (
    <Flex direction="column" align="center">
      <Spacing direction="vertical" size={40} />
      <MyImage size={80} mode="upload" />
      <Spacing direction="vertical" size={20} />
      <Text bold={true}>{user?.displayName}</Text>
      <Spacing direction="vertical" size={20} />
      <Button onClick={handleSignout}>로그아웃</Button>
    </Flex>
  )
}

export default MyPage
