import React, { useState } from 'react'
import Greetings from './Greetings'

const App = () => {
	const [whatever, setWhatever] = useState('무엇이든지 다 가능해요!')
	const everyNumber = 12345
	const greetingsChildren = {
		whatever: (
			<h5>
				{whatever} --{'>'} 이건 children으로 전달한 state
			</h5>
		),
		number: (
			<h5>
				{everyNumber} --{'>'} children으로 전달한 const 변수
			</h5>
		),
		string: <h5>그냥 inner html 전달</h5>,
	}

	// const greetingsProps = {
	// 	setWhatever: setWhatever,
	// 	name: '도현',
	// 	mark: '병장',
	// }

	return (
		<div>
			<Greetings>{greetingsChildren}</Greetings>
		</div>
	)
}

export default App
