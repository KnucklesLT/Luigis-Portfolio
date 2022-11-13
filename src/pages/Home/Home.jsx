import styles from './Home.module.css'
import { useRef, useEffect } from 'react'

const Home = () => {
  const ref = useRef(null)
  let left
  useEffect(()=> {
    left = ref.current
  },[])
  
  const handleOnMove = evt => {

    const p = evt.clientX / window.innerWidth * 100

    left.style.width = `${p}%`
  }

  return (  
    <>
      <div ref={ref} id={styles.left_side} className={styles.side} onMouseMove={document.onmousemove = evt => handleOnMove(evt)}>
        <h2 className={styles.title}>
          Let's build something <span className={styles.fancy}>awesome</span>
        </h2>
      </div>
      <div id={styles.right_side} className={styles.side}>
        <h2 className={styles.title}>
          Let's build something <span className={styles.fancy}>together</span>
        </h2>
      </div>
    </>
  );
}

export default Home;