import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { AppDispatch } from '../store/store'

export const filtered = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: AppDispatch,
  action: ActionCreatorWithPayload<string>
): void => {
  dispatch(action(e.target.value.replace(/[^а-яА-ЯёЁa-zA-Z0-9@.-\s]+$/g, '')))
}
