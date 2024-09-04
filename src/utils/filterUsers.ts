import { TableBody } from '../interfaces/user.interface'

export function filterUsers(
  usersList: TableBody[],
  name: string,
  username: string,
  email: string,
  phone: string
): TableBody[] {
  return usersList.filter((user) => {
    const nameFilter = user.name.toLowerCase().includes(name.toLowerCase())
    const userNameFilter = user.username
      .toLowerCase()
      .includes(username.toLowerCase())
    const emailFilter = user.email.toLowerCase().includes(email.toLowerCase())
    const phoneFilter = user.phone.toLowerCase().includes(phone.toLowerCase())
    return nameFilter && userNameFilter && emailFilter && phoneFilter
  })
}
