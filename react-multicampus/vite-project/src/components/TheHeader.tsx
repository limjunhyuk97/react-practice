import { NavLink } from 'react-router-dom'
import styles from './TheHeader.module.css'

//* NavLink, Link 차이점
// - Link : 이동하고자 하는 경로로 이동할 때. 브라우저의 주소만 바꾸고, 페이지를 새로 불러오지는 않는다
// - NavLink : Link와 마찬가지로 다른 위치로 이동할 때 사용하지만, 특정 링크에 스타일을 넣어줄 수 있음
// - NavLink 사용하면, 선택한 a 태그에 class명으로 'active'가 들어감 / Link는 그렇지 않음
// - NavLink 사용하면, className 속성에 함수를 전달할 수 있음 / Link는 그렇지 않음

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movie' }
]

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <h1>임준혁</h1>
      <nav className={styles.nav}>
        {navigations.map(navigation => (
          <NavLink
            key={navigation.to}
            to={navigation.to}
            className={({ isActive }) => (isActive ? styles.active : '')}>
            {navigation.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
