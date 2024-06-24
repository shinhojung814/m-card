import { useQuery } from 'react-query'

import { APPLY_STATUS } from '@models/apply'

interface usePollApplyStatusProps {
  onSuccess: () => void
  onError: () => void
  enabled: boolean
}

function usePollApplyStatus({
  onSuccess,
  onError,
  enabled,
}: usePollApplyStatusProps) {
  return useQuery(['applyStatus'], () => getApplyStatus(), {
    enabled,
    refetchInterval: 2_000,
    staleTime: 0,
    onSuccess: (status) => {
      console.log('status', status)
      if (status === APPLY_STATUS.COMPLETE) {
        onSuccess()
      }
    },
    onError: () => {
      onError()
    },
  })
}

function getApplyStatus() {
  const values = [
    APPLY_STATUS.READY,
    APPLY_STATUS.IN_PROGRESS,
    APPLY_STATUS.COMPLETE,
    APPLY_STATUS.REJECTED,
  ]

  const status = values[Math.floor(Math.random() * values.length)]

  if (status === APPLY_STATUS.REJECTED) {
    throw new Error('카드 발급에 실패했습니다.')
  }

  return status
}

export default usePollApplyStatus
