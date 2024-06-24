import { useEffect } from 'react'

import { getCards } from '@remote/card'
import { getAdBanners } from '@remote/adBanner'
import Top from '@shared/Top'
import AdBanners from '@components/home/AdBanners'
import CardList from '@components/home/CardList'

function HomePage() {
  useEffect(() => {
    getCards().then((response) => {
      // console.log('response', response)
    })

    getAdBanners().then((response) => {
      // console.log('response', response)
    })
  }, [])

  return (
    <div>
      <Top title="혜택 좋은 카드" subtitle="혜택이 좋은 카드들" />
      <AdBanners />
      <CardList />
    </div>
  )
}

export default HomePage
