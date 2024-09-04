import { DetailedHTMLProps, TableHTMLAttributes } from 'react'
import { TableBody } from '../../interfaces/user.interface'

export interface Table {
  head: string[]
  body: TableBody[]
}

export interface TableProps
  extends DetailedHTMLProps<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  table: Table
}
