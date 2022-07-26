import { ListPost } from '../components/ListPosts/ListPosts'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ListPost /> 
    </div>
  )
}
