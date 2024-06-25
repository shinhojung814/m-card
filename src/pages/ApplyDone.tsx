import { parse } from 'qs'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import FixedBottomButton from '@shared/FixedBottomButton'

function ApplyDonePage() {
  const { success } = parse(window.location.search, {
    ignoreQueryPrefix: true,
  }) as { success: string }

  return (
    <Flex
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      justify="center"
      align="center"
    >
      <Flex direction="column" align="center">
        <img src="https://i.gifer.com/7efs.gif" alt="applydone" width={300} />
        <Text bold={true}>
          {success === 'true'
            ? '카드 발급이 완료되었습니다.'
            : '카드 발급에 실패했습니다.'}
        </Text>
        <FixedBottomButton
          label="확인"
          onClick={() => {
            window.history.back()
          }}
        />
      </Flex>
    </Flex>
  )
}

export default ApplyDonePage
