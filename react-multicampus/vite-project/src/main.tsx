import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './routes'

// render를 통해서 어떤 custom element를 뿌려줄 것인지를 정의
// 최상위 component가 App
// ! 연산자 : 타입을 단언하는 연산자 (HTML요소 타입이 있음을 단언하는 것)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
