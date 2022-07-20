import React, { SetStateAction, Dispatch, ReactNode } from 'react'

// type GreetingsProps = {
// 	name: string
// 	mark?: string
// 	setWhatever: Dispatch<SetStateAction<string>>
// }

type GreetingsChildren = {
	whatever: ReactNode
	number: ReactNode
	string: ReactNode
}

const Greetings = ({ greetingsChildren }: GreetingsChildren) => {
	return (
		<>
			{/* <div>안녕하세요 {greetingsProps.name}님.</div>
			<div>당신의 계급은 {greetingsProps.mark}입니다.</div>
			<input
				type='text'
				onChange={(e) => greetingsProps.setWhatever(e.target.value)}
			></input> */}
			{greetingsChildren.whatever}
			{greetingsChildren.number}
			{greetingsChildren.string}
		</>
	)
}

Greetings.defaultProps = {
	mark: '이병(기본)',
}
export default Greetings
