import { Button } from '../packages'
import './App.css'

function App() {
	return (
		<div style={{ padding: '30px' }}>
			<Button className='mvi-mr-4' square>
				按钮
			</Button>
			<Button plain className='mvi-mr-4' type='success'>
				按钮
			</Button>
			<Button plain className='mvi-mr-4' type='warn'>
				按钮
			</Button>
			<Button plain className='mvi-mr-4' type='error'>
				按钮
			</Button>
			<Button plain className='mvi-mr-4' type='primary'>
				按钮
			</Button>
			<Button plain type='info'>
				按钮
			</Button>
		</div>
	)
}

export default App
