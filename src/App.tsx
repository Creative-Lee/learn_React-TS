import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import DiaryEditor from './components/DiaryEditor/DiaryEditor'
import DiaryList from './components/DiaryList/DiaryList'
import { getData } from './apis/get'
import { OnCreate, OnRemove, OnEdit, DiaryItemData, DispatchContext } from './types'
import { dataReducer } from './reducer'
import './App.css'

export const DiaryStateContext = React.createContext<DiaryItemData[]>([])
export const DiaryDispatchContext = React.createContext({} as DispatchContext)

const App = () => {
	const [data, dispatch] = useReducer(dataReducer, [])
	const dataIdRef = useRef<number>(0)

	const onCreate: OnCreate = useCallback((author, content, emotion) => {
		dataIdRef.current += 1
		dispatch({
			type: 'CREATE',
			data: { id: dataIdRef.current, author, content, emotion },
		})
	}, [])

	const onRemove: OnRemove = useCallback((id) => {
		dispatch({ type: 'REMOVE', data: { id } })
		dataIdRef.current -= 1
	}, [])

	const onEdit: OnEdit = useCallback((id, newContent) => {
		dispatch({ type: 'EDIT', data: { id, newContent } })
	}, [])

	const memoizedDispatches = useMemo(() => {
		return { onCreate, onRemove, onEdit }
	}, [onCreate, onRemove, onEdit])

	const getDiaryAnalysis = useMemo(() => {
		const goodEmotionCount = data.filter((data) => data.emotion >= 3).length
		const badEmotionCount = data.length - goodEmotionCount
		const goodEmotionRatio = Math.round((goodEmotionCount / data.length) * 100)

		return { goodEmotionCount, badEmotionCount, goodEmotionRatio }
		// eslint-disable-next-line
	}, [data.length])

	const { goodEmotionCount, badEmotionCount, goodEmotionRatio } = getDiaryAnalysis

	useEffect(() => {
		getData(dataIdRef.current).then((response) => {
			dispatch({ type: 'INIT', data: response })
			dataIdRef.current = response.length
		})
	}, [])

	return (
		<DiaryStateContext.Provider value={data}>
			<DiaryDispatchContext.Provider value={memoizedDispatches}>
				<div className='App'>
					<DiaryEditor />
					<div>전체 일기 수: {data.length}</div>
					<div>굿 : {goodEmotionCount}</div>
					<div>배드 : {badEmotionCount}</div>
					<div>굿 퍼센또 : {goodEmotionRatio}%</div>
					<DiaryList />
				</div>
			</DiaryDispatchContext.Provider>
		</DiaryStateContext.Provider>
	)
}

export default App
