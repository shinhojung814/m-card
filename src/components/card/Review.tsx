import { useQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'

import Spacing from '@shared/Spacing'
import Skeleton from '@shared/Skeleton'

function Review() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const { data = [], isLoading } = useQuery(
    ['review'],
    () => {
      return new Promise<string[]>((resolve) => {
        setTimeout(() => {
          resolve(['리뷰1', '리뷰2', '리뷰3'])
        }, 2_000)
      })
    },
    {
      enabled: inView,
    },
  )

  return (
    <div ref={ref}>
      {isLoading ? (
        <>
          <Skeleton width={30} height={10} />
          <Spacing direction="vertical" size={4} />
          <Skeleton width={30} height={10} />
        </>
      ) : (
        data.map((review) => <>{review}</>)
      )}
    </div>
  )
}

export default Review
