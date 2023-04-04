import styles from './input.module.css'
import {
  ContainerProps,
  ErrorMessageProps,
  IconProps,
  InputProps,
  LabelProps,
  RootProps
} from './input.types'

export const Root = ({ children, className }: RootProps) => {
  return <div className={className}>{children}</div>
}

export const Icon = ({ children, className }: IconProps) => {
  return <div className={className}>{children}</div>
}

export const ErrorMessage = ({ children, className }: ErrorMessageProps) => {
  return <div className={className}>{children}</div>
}

export const Label = ({ className, label, htmlFor }: LabelProps) => {
  return <label className={className} htmlFor={htmlFor}>{label}</label>
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={className}>{children}</div>
}

export const FormField = ({
  className,
	...rest
}: InputProps) => {
  return (
    <input
        placeholder=" " 
        className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent rounded-lg" 
				{...rest}
		/>

  )
}
