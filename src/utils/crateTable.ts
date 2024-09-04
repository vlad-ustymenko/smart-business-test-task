import { TableBody } from '../interfaces/user.interface'

export function createTable(head: string[], body: TableBody[]) {
  return {
    head: head,
    body: body,
  }
}
