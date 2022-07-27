import React, { useContext } from 'react'
import DiaryItem from './DiaryItem/DiaryItem'
import { DiaryDispatchContext, DiaryStateContext } from '../../App'

const DiaryList = () => {
	const diaryList = useContext(DiaryStateContext)
	const { onRemove, onEdit } = useContext(DiaryDispatchContext)

	return (
		<div className='DiaryList'>
			<h2>일기 리스트</h2>
			<h4>{diaryList.length}개의 일기가 있습니다.</h4>

			{diaryList.map((diaryItem) => (
				<DiaryItem
					key={diaryItem.id}
					onRemove={onRemove}
					onEdit={onEdit}
					{...diaryItem}
				/>
			))}
		</div>
	)
}

export default DiaryList
