// css를 모듈화 시켜서 특정 컴포넌트에 집어넣을 수 있다
import styles from "./Button.module.css";

// 컴포넌트를 사용하는 것은 divide and conquer 을 위해서이다.
// React는 이를 지원한다.
export default function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
