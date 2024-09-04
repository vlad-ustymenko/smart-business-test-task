import { InputProps } from './Input.props'
import { IoClose, IoSearchSharp } from 'react-icons/io5'

import styles from './Input.module.css'

const Input = ({
  name,
  onChange,
  value,
  placeholder,
  resetFilter,
}: InputProps): JSX.Element => {
  return (
    <div className={styles.input__wrapper}>
      <input
        name={name}
        className={styles.input}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
      />
      {value ? (
        <IoClose className={styles.resetTitileBtn} onClick={resetFilter} />
      ) : (
        <IoSearchSharp className={styles.searchBtn} />
      )}
    </div>
  )
}

export default Input
