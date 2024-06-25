import Top from '@shared/Top'
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
      <CardList />
    </div>
  )
}

export default HomePage
