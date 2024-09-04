import { TableProps } from '../Table/Table.props'
import styles from './TableMobile.module.css'

const TableNew = ({ table, ...props }: TableProps): JSX.Element => {
  return (
    <>
      {!table.body.length ? (
        <h2 className={styles.emptyTable}>No users</h2>
      ) : (
        <div className={styles.table}>
          {table.body.map((user) => (
            <div key={user.email} className={styles.card}>
              <div className={styles.wrapper}>
                <div className={styles.title}>Name</div>
                <div>{user.name}</div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.title}>UserName</div>
                <div>{user.username}</div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.title}>Email</div>
                <div>{user.email}</div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.title}>Phone</div>
                <div>{user.phone}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default TableNew
