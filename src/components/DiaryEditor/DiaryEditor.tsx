import React, { useEffect, useRef, useState } from 'react'
import { OnCreate, OnChangeHTMLElement } from '../../types'

type InputRef = {
	author: HTMLInputElement | null
	content: HTMLTextAreaElement | null
}
type DiaryEditorProps = {
	onCreate: OnCreate
}

const DiaryEditor = ({ onCreate }: DiaryEditorProps) => {
	const inputRef = useRef<InputRef>({
		author: null,
		content: null,
	})

	const [state, setState] = useState({
		author: '',
		content: '',
		emotion: 1,
	})

	const onChangeState: OnChangeHTMLElement = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const handleSubmit = () => {
		if (state.author.length < 1) {
			inputRef.current.author?.focus()
			setState((prev) => {
				prev.author = '내가 입력할게요.'
				return { ...prev }
			})
			return
		}

		if (state.content.length < 1) {
			inputRef.current.content?.focus()
			setState((prev) => {
				prev.content = '내가 입력할게요.'
				return { ...prev }
			})
			return
		}
		alert('저장성공')
		onCreate(state.author, state.content, state.emotion)
		setState((prev) => {
			prev.content = ''
			prev.author = ''
			return { ...prev }
		})
	}

	return (
		<div className='DiaryEditor'>
			<h2>오늘의 일기</h2>
			<div>
				<input
					ref={(ref) => {
						inputRef.current.author = ref
					}}
					name='author'
					spellCheck={false}
					value={state.author}
					onChange={onChangeState}
				/>
			</div>
			<textarea
				ref={(ref) => {
					inputRef.current.content = ref
				}}
				name='content'
				value={state.content}
				spellCheck={false}
				onChange={onChangeState}
			/>
			<div>
				<span>오늘의 감정점수 : </span>
				<select name='emotion' value={state.emotion} onChange={onChangeState}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
			</div>
			<div>
				<button onClick={handleSubmit}>결과 저장</button>
			</div>
		</div>
	)
}

export default React.memo(DiaryEditor)
