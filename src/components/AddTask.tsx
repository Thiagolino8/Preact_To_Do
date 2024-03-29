import { FormEvent, useState } from 'react'

import { useStore } from '../store'
import Button from './Button'
import Input from './Input'

const AddTask = () => {
	const [inputData, setInputData] = useState('')
	const { addTask } = useStore()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addTask(inputData)
		setInputData('')
	}

	return (
		<>
			<h2>Add Task</h2>
			<form onSubmit={(e) => handleSubmit(e)} className='flex w-full my-4'>
				<div className='flex-1 add-task-input'>
					<Input setValue={setInputData} value={inputData} type='text' />
				</div>
				<div className='ml-3'>
					<Button type='submit'>Add</Button>
				</div>
			</form>
		</>
	)
}

export default AddTask
