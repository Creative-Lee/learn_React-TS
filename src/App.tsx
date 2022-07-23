import React, { useRef, useState } from 'react'
import DiaryEditor from './components/DiaryEditor/DiaryEditor'
import DiaryList from './components/DiaryList/DiaryList'
import './App.css'

import { OnCreate, DiaryItemData, OnRemove, OnEdit } from './types'
const App = () => {
	const [data, setData] = useState<DiaryItemData[]>([])
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

	const onRemove: OnRemove = (id) => {
		const deletedArr = data.filter((data) => data.id !== id)
		setData(deletedArr)
	}

	const onEdit: OnEdit = (id, newContent) => {
		setData(
			data.map((itemData) => {
				return itemData.id === id ? { ...itemData, content: newContent } : itemData
			}),
		)
	}

	return (
		<>
			<DiaryEditor onCreate={onCreate} />
			<DiaryList data={data} onRemove={onRemove} onEdit={onEdit} />
		</>
	)
}

export default App
