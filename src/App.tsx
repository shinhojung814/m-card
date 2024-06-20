import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from './components/shared/Input'
import TextField from './components/shared/TextField'
import Alert from './components/shared/Alert'

import { useAlertContext } from '@contexts/AlertContext'

function App() {
  const { open } = useAlertContext()

  return (
    <div>
      <Text typography="t1">t1</Text>
      <Text typography="t2">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>
      <Text typography="t6">t6</Text>
      <div style={{ height: 10, width: '100%', background: '#efefef' }} />
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
      <div style={{ height: 10, width: '100%', background: '#efefef' }} />
      <Input placeholder="로그인" aria-invalid={false}></Input>
      <Input placeholder="패스워드" aria-invalid={true}></Input>
      <div style={{ height: 10, width: '100%', background: '#efefef' }} />
      <TextField label="아이디" />
      <TextField label="패스워드" hasError={true} />
      <div style={{ height: 10, width: '100%', background: '#efefef' }} />
      <Button
        onClick={() => {
          open({
            title: '카드 신청 완료',
            description: '내역 페이지에서 확인해주세요.',
            onButtonClick: () => {
              //
            },
          })
        }}
      >
        Alert 오픈
      </Button>
    </div>
  )
}

export default App
