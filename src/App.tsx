import React, { useRef, useState } from 'react'
import DiaryEditor from './components/DiaryEditor/DiaryEditor'
import DiaryList from './components/DiaryList/DiaryList'
import './App.css'

import { OnCreate, DiaryListData } from './types'

const App = () => {
	const [data, setData] = useState<DiaryListData[]>([])
	const dataIdRef = useRef<number>(0)

	const onCreate: OnCreate = (author, content, emotion) => {
		const createdDate = new Date().getTime()
		const newDiaryItem = {
			id: dataIdRef.current,
			author,
			content,
			emotion,
			createdDate,
		}

		dataIdRef.current += 1
		setData([newDiaryItem, ...data])
	}

	return (
		<>
			<DiaryEditor onCreate={onCreate} />
			<DiaryList data={data} />
		</>
	)
}

export default App
