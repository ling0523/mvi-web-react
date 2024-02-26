import { useState } from 'react'
import { Button, Icon } from '../packages'
import './App.css'

function App() {
	const [loading, setLoading] = useState(false)

	const handleClick = () => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}

	const LoadSlot = () => {
		return (
			<>
				<Icon type='load-e' spin size='0.32rem'></Icon>
				<span style={{ marginLeft: '.2rem' }}>加载中...</span>
			</>
		)
	}

	return (
		<div style={{ padding: '30px' }}>
			<Button className='mvi-mr-4' square>
				按钮
			</Button>
			<Button active={false} className='mvi-mr-4' loading={loading} type='success' onClick={handleClick} loadSlot={<LoadSlot />}>
				按钮
			</Button>
			<Button active={false} tag='div' className='mvi-mr-4' type='warn'>
				按钮
			</Button>
			<Button nativeType='submit' className='mvi-mr-4' type='error'>
				按钮
			</Button>
			<Button className='mvi-mr-4' type='primary'>
				按钮
			</Button>
			<Button type='info'>按钮</Button>
		</div>
	)
}

export default App
