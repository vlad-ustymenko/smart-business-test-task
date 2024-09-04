import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
  name: string
  resetFilter: (event: React.MouseEvent<SVGElement, MouseEvent>) => void
}
