import { ReactNode } from 'react'
import styles from './MainLayout.module.scss'
import Header from '@/components/Header/Header'
import useAuth from '@/hooks/useAuth'

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()

  if (user) {
    return (
      <div className={styles.MainLayoutWrapper}>
        <Header user={user} />
        <main>{children}</main>
      </div>
    )
  } else return <>{'loading'}</>
}

export default MainLayout
