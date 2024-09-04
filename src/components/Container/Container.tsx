import { ContainerProps } from './Container.Props'
import styles from './Container.module.css'

export const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className={styles.container}>{children}</div>
}
