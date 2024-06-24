import { useCallback, useState, MouseEvent } from 'react'

import { TERMS } from '@constants/apply'
import { ApplyValues } from '@/models/apply'
import Agreement from '@shared/Agreement'
import FixedBottomButton from '@shared/FixedBottomButton'

function Terms({ onNext }: { onNext: (terms: ApplyValues['terms']) => void }) {
  const [termsAgreed, setTermsAgreed] = useState(() => {
    return TERMS.reduce<Record<string, boolean>>(
      (prev, terms) => ({
        ...prev,
        [terms.id]: false,
      }),
      {},
    )
  })

  const allTermsAgreed = Object.values(termsAgreed).every((agreed) => agreed)

  const handleAllAgreed = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      setTermsAgreed((prevTerms) => {
        return Object.keys(prevTerms).reduce(
          (prev, key) => ({
            ...prev,
            [key]: checked,
          }),
          {},
        )
      })
    },
    [],
  )

  return (
    <div>
      <Agreement>
        <Agreement.Title checked={allTermsAgreed} onChange={handleAllAgreed}>
          약관에 모두 동의
        </Agreement.Title>
        {TERMS.map(({ id, title, link }) => {
          return (
            <Agreement.Description
              key={id}
              link={link}
              checked={termsAgreed[id]}
              onChange={(_, checked) => {
                setTermsAgreed((prevTerms) => ({
                  ...prevTerms,
                  [id]: checked,
                }))
              }}
            >
              {title}
            </Agreement.Description>
          )
        })}
      </Agreement>
      <FixedBottomButton
        label="약관 동의"
        onClick={() => {
          onNext(Object.keys(termsAgreed))
        }}
        disabled={allTermsAgreed === false}
      />
    </div>
  )
}

export default Terms
