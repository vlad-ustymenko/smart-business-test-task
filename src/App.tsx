import './App.css'
import { useEffect } from 'react'
import { selectUsersList } from './store/slices/usersSlice'
import { useAppDispatch, useAppSelector } from './hooks/redux.hooks'
import { getUsers } from './api/getUsers'
import { Container } from './components/Container/Container'
import { selectFilter } from './store/slices/filterSlices'
import FilterBlock from './components/FilterBlock/FilterBlock'
import Table from './components/Table/Table'
import { createTable } from './utils/crateTable'
import { filterUsers } from './utils/filterUsers'
import TableMobile from './components/TableMobile/TableMobile'

function App() {
  const dispatch = useAppDispatch()
  const { name, username, email, phone } = useAppSelector(selectFilter)

  useEffect(() => {
    getUsers(dispatch)
  }, [dispatch])

  const tableHead = ['Name', 'UserName', 'Email', 'Phone']
  const usersList = useAppSelector(selectUsersList)
  const filteredUsers = filterUsers(usersList, name, username, email, phone)

  return (
    <Container>
      <h1 className="title">Users information</h1>
      <FilterBlock />
      <Table table={createTable(tableHead, filteredUsers)} />
      <TableMobile table={createTable(tableHead, filteredUsers)} />
    </Container>
  )
}

export default App
