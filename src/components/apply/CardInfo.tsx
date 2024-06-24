import { MouseEvent, useCallback, useState } from 'react'
import { css } from '@emotion/react'

import Flex from '@shared/Flex'
import Button from '@shared/Button'
import { ApplyValues } from '@models/apply'
import FixedBottomButton from '@shared/FixedBottomButton'

type CardInfoValues = Pick<ApplyValues, 'isMaster' | 'isRf' | 'isHipass'>

function CardInfo({
  onNext,
}: {
  onNext: (cardInfoValues: CardInfoValues) => void
}) {
  const [cardInfoValues, setCardInfoValues] = useState<CardInfoValues>({
    isMaster: false,
    isRf: false,
    isHipass: false,
  })

  const { isMaster, isRf, isHipass } = cardInfoValues

  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const $button = e.target as HTMLButtonElement

    setCardInfoValues((prevValues) => ({
      ...prevValues,
      [$button.name]: JSON.parse($button.dataset.value as string),
    }))
  }, [])

  return (
    <Flex direction="column" css={cardInfoContainerStyles}>
      <Button.Group title="해외 결제">
        <Button
          name="isMaster"
          weak={isMaster === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClick}
        >
          Master
        </Button>
        <Button
          name="isMaster"
          weak={isMaster === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClick}
        >
          국내 전용
        </Button>
      </Button.Group>
      <Button.Group title="후불 교통 기능">
        <Button
          name="isRf"
          weak={isRf === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClick}
        >
          신청
        </Button>
        <Button
          name="isRf"
          weak={isRf === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClick}
        >
          신청 안함
        </Button>
      </Button.Group>
      <Button.Group title="하이패스 카드">
        <Button
          name="isHipass"
          weak={isHipass === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClick}
        >
          신청
        </Button>
        <Button
          name="isHipass"
          weak={isHipass === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClick}
        >
          신청 안함
        </Button>
      </Button.Group>
      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(cardInfoValues)
        }}
      />
    </Flex>
  )
}

const cardInfoContainerStyles = css`
  padding: 24px;
  gap: 36px;
`

export default CardInfo
