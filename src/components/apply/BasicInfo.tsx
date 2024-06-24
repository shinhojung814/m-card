import { ChangeEvent, useCallback, useState } from 'react'
import { css } from '@emotion/react'

import Flex from '@shared/Flex'
import Select from '@shared/Select'
import FixedBottomButton from '@shared/FixedBottomButton'
import { SALARIES, CREDIT_SCORES, PAY_DATES } from '@constants/apply'
import { ApplyValues } from '@models/apply'

type InfoValues = Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>

function BasicInfo({ onNext }: { onNext: (infoValues: InfoValues) => void }) {
  const [basicInfoValues, setBasicInfoValues] = useState<InfoValues>({
    salary: '',
    creditScore: '',
    payDate: '',
  })

  const handleInfoChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setBasicInfoValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const allInfoSelected = Object.values(basicInfoValues).every((value) => value)

  return (
    <Flex direction="column" css={basicInfoContainerStyles}>
      <Select
        name="salary"
        label="연소득"
        options={SALARIES}
        placeholder={SALARIES[0].label}
        value={basicInfoValues.salary}
        onChange={handleInfoChange}
      />
      <Select
        name="creditScore"
        label="신용점수"
        options={CREDIT_SCORES}
        placeholder={CREDIT_SCORES[0].label}
        value={basicInfoValues.creditScore}
        onChange={handleInfoChange}
      />
      <Select
        name="payDate"
        label="결제일"
        options={PAY_DATES}
        placeholder={PAY_DATES[0].label}
        value={basicInfoValues.payDate}
        onChange={handleInfoChange}
      />
      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(basicInfoValues)
        }}
        disabled={allInfoSelected === false}
      />
    </Flex>
  )
}

const basicInfoContainerStyles = css`
  padding: 24px;
  gap: 36px;
`

export default BasicInfo
