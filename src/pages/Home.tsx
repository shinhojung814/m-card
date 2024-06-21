import { useEffect } from 'react'

import Top from '@/components/shared/Top'
import { getCards } from '@remote/card'
import { getAdBanners } from '@remote/adBanner'

function HomePage() {
  useEffect(() => {
    getCards().then((response) => {
      console.log('response', response)
    })

    getAdBanners().then((response) => {
      console.log('response', response)
    })
  }, [])

  return (
    <div>
      <Top title="혜택 좋은 카드" subtitle="혜택이 좋은 카드들" />
    </div>
  )
}

export default HomePage
