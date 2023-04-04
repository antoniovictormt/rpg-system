import { HTMLAttributes, InputHTMLAttributes } from 'react'

export type RootProps = {
  children: React.ReactNode
  className?: string
}

export type IconProps = {
  children: React.ReactNode
  className?: string
}

export type ErrorMessageProps = {
  children: React.ReactNode
  className?: string
}

export type LabelProps = {
  label: string
  className?: string
  htmlFor?: string
}

export type InputProps = {
  isDisabled?: boolean
  isReadOnly?: boolean
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export type ContainerProps = {
  children: React.ReactNode
  className?: string
}
