import React from 'react'
import DiaryItem from './DiaryItem/DiaryItem'
import { DiaryItemData, OnRemove, OnEdit } from '../../types'

type DiaryListProps = {
	data: DiaryItemData[]
	onRemove: OnRemove
	onEdit: OnEdit
}

const DiaryList = ({ data, onRemove, onEdit }: DiaryListProps) => {
	return (
		<div className='DiaryList'>
			<h2>일기 리스트</h2>
			<h4>{data.length}개의 일기가 있습니다.</h4>

			{data.map((diaryItem, idx) => (
				<DiaryItem key={idx} onRemove={onRemove} onEdit={onEdit} {...diaryItem} />
			))}
		</div>
	)
}

export default DiaryList
