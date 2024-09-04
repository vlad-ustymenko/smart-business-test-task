import { FilterProps } from './FilterBlock.props'
import styles from './FilterBlock.module.css'
import Input from '../Input/Input'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks'
import { filtered } from '../../utils/onChangeInput'
import {
  resetEmailFilter,
  resetNameFilter,
  resetPhoneFilter,
  resetUserNameFilter,
  selectFilter,
  setEmailFilter,
  setNameFilter,
  setPhoneFilter,
  setUserNameFilter,
} from '../../store/slices/filterSlices'
import { resetFilter } from '../../utils/resetInputFilter'

const FilterBlock = ({ ...props }: FilterProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const { name, username, email, phone } = useAppSelector(selectFilter)

  return (
    <div className={styles.filters} {...props}>
      <>
        <Input
          name="name"
          onChange={(e) => filtered(e, dispatch, setNameFilter)}
          value={name}
          placeholder="Enter name"
          resetFilter={() => resetFilter(dispatch, resetNameFilter)}
        />
        <Input
          name="username"
          onChange={(e) => filtered(e, dispatch, setUserNameFilter)}
          value={username}
          placeholder="Enter username"
          resetFilter={() => resetFilter(dispatch, resetUserNameFilter)}
        />
        <Input
          name="email"
          onChange={(e) => filtered(e, dispatch, setEmailFilter)}
          value={email}
          placeholder="Enter email"
          resetFilter={() => resetFilter(dispatch, resetEmailFilter)}
        />
        <Input
          name="phone"
          onChange={(e) => filtered(e, dispatch, setPhoneFilter)}
          value={phone}
          placeholder="Enter phone"
          resetFilter={() => resetFilter(dispatch, resetPhoneFilter)}
        />
      </>
    </div>
  )
}

export default FilterBlock
