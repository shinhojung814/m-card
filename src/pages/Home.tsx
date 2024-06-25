import { Suspense } from 'react'

import Top from '@shared/Top'
import ListRow from '@shared/ListRow'
import AdBanners from '@components/home/AdBanners'
import CardList from '@components/home/CardList'

function HomePage() {
  return (
    <div>
      <Top
        title="고객님을 위한 추천 카드"
        subtitle="고객님께 딱맞는 혜택을 제공하는 카드들입니다."
      />
      <AdBanners />
      <Suspense
        fallback={[...new Array(10)].map((_, index) => (
          <ListRow.Skeleton key={index} />
        ))}
      >
        <CardList />
      </Suspense>
    </div>
  )
}

export default HomePage
