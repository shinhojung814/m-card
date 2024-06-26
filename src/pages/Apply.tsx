import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Apply from '@components/apply'
import { APPLY_STATUS } from '@models/apply'
import { updateApplyCard } from '@remote/apply'
import useUser from '@hooks/auth/useUser'
import usePollApplyStatus from '@components/apply/hooks/usePollApplyStatus'
import useApplyCardMutation from '@components/apply/hooks/useApplyCardMutation'
import useAppliedCard from '@components/apply/hooks/useAppliedCard'
import { useAlertContext } from '@contexts/AlertContext'
import FullPageLoader from '@shared/FullPageLoader'

const STATUS_MESSAGE = {
  [APPLY_STATUS.READY]: '잠시만 기다려주세요.',
  [APPLY_STATUS.IN_PROGRESS]: '카드 심사가 진행중입니다.',
  [APPLY_STATUS.COMPLETE]: '카드 신청이 완료되었습니다.',
}

function ApplyPage() {
  const [readyToPoll, setReadyToPoll] = useState(false)

  const user = useUser()

  const { id } = useParams() as { id: string }

  const navigate = useNavigate()

  const { open } = useAlertContext()

  const { data } = useAppliedCard({
    userId: user?.uid as string,
    cardId: id,
    options: {
      onSuccess: (applied) => {
        if (applied == null) {
          return
        }

        if (applied.status === APPLY_STATUS.COMPLETE) {
          open({
            title: '이미 발급이 완료된 카드입니다.',
            onButtonClick: () => {
              window.history.back()
            },
          })

          return
        }

        setReadyToPoll(true)
      },
      onError: () => {},
      suspense: true,
    },
  })

  const { data: status } = usePollApplyStatus({
    onSuccess: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.COMPLETE,
        },
      })

      navigate('/apply/done?success=true', {
        replace: true,
      })
    },
    onError: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.REJECTED,
        },
      })

      navigate('/apply/done?success=false', {
        replace: true,
      })
    },
    enabled: readyToPoll,
  })

  const { mutate, isLoading } = useApplyCardMutation({
    onSuccess: () => {
      setReadyToPoll(true)
    },
    onError: () => {
      window.history.back()
    },
  })

  if (data != null && data.status === APPLY_STATUS.COMPLETE) {
    return null
  }

  if (readyToPoll || isLoading) {
    return <FullPageLoader message={STATUS_MESSAGE[status ?? 'READY']} />
  }

  return <Apply onSubmit={mutate} />
}

export default ApplyPage
