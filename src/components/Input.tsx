interface Props {
	children?: React.ReactNode
	type?: HTMLInputElement['type']
	value?: any
	setValue: React.Dispatch<React.SetStateAction<any>>
}

const Input = ({ children, type = 'text', value, setValue }: Props) => {
	return (
		<input
			className='w-full text-xl input focus:input-primary text-slafont-semibold bg-neutral-600 caret-lime-400'
			type={type}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		>
			{children}
		</input>
	)
}

export default Input
