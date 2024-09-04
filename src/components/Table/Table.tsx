import { TableProps } from './Table.props'
import styles from './Table.module.css'

const Table = ({ table, ...props }: TableProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table} cellSpacing={0}>
        <thead className={styles.thead}>
          <tr className={styles.row}>
            {table.head.map((cell) => (
              <th key={cell} className={styles.cell}>
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!table.body.length ? (
            <tr className={styles.rowBody}>
              <td
                className={`${styles.cell} ${styles.emptyTable}`}
                colSpan={4}
                align="center"
              >
                No users
              </td>
            </tr>
          ) : (
            <>
              {table.body.map((user) => (
                <tr key={user.email} className={styles.rowBody}>
                  {Object.values(user).map((cell) => (
                    <td key={cell} className={styles.cell}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
