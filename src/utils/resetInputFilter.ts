import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { AppDispatch } from '../store/store'

export const resetFilter = (
  dispatch: AppDispatch,
  action: ActionCreatorWithoutPayload
): void => {
  dispatch(action())
}
