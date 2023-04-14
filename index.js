
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.get('/dog', (req, res) => { 
    res.send({'sound':'멍멍'})
})

app.get('/cat', (req, res) => { 
    res.send({'sound':'야옹'})
})
  


app.get('/user/:id', (req, res) => { 
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q)
    console.log(q.q)
    console.log(q.name)
    console.log(q.age)

    res.send({'userid':q.name})
})



// app.get => HTTP 메소드, '/'는 라우팅, () => {}는 콜백 함수

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)  // listen이 말 그대로 듣고 있습니다! 이런 뜻 ( 예를 들어 localhost 3000에서 듣고 있습니다)
})

// port => 우리가 흔히 랩탑에서 사용하는 USB 포트와 같은 말, 입구 같은 말


// api 예제 (동물소리 출력)

app.get('/sound/:name', (req, res) => { 
    const { name } = req.params
    
    if(name == 'dog'){
        res.send({'sound':'멍멍'})
    } else if(name == 'cat'){
        res.send({'sound':'야옹'})
    } else if(name == 'pig') {
        res.send({'sound':'꿀꿀'})
    } else {
        res.send({'sound':'알수없음'})
    }

    
    
})


