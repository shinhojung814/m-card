import Text from '@shared/Text'
import Button from '@shared/Button'

function App() {
  return (
    <div>
      <Text typography="t1">t1</Text>
      <Text typography="t2">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>
      <Text typography="t6">t6</Text>
      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>
      <Button color="primary">버튼</Button>
      <Button color="success">버튼</Button>
      <Button color="error">버튼</Button>
      <Button color="primary" weak={true}>
        버튼
      </Button>
      <Button color="success" weak={true}>
        버튼
      </Button>
      <Button color="error" weak={true}>
        버튼
      </Button>
    </div>
  )
}

export default App
