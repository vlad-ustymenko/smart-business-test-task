import { JasonPlaceholderUsers, TableBody } from '../interfaces/user.interface'
import { setUsers } from '../store/slices/usersSlice'
import { AppDispatch } from '../store/store'

export async function getUsers(dispatch: AppDispatch): Promise<void> {
  try {
    const users: JasonPlaceholderUsers[] = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then((response) => response.json())

    const userList: TableBody[] = users.map((user) => {
      return {
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
      }
    })

    dispatch(setUsers(userList))
  } catch (error) {
    dispatch(setUsers([]))
  }
}
