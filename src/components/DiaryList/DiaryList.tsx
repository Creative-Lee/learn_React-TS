import React from 'react'
import DiaryItem from './DiaryItem/DiaryItem'
import { DiaryListData } from '../../types'

type DiaryListProps = {
	data: DiaryListData[]
}

const DiaryList = ({ data }: DiaryListProps) => {
	return (
		<div className='DiaryList'>
			<h2>일기 리스트</h2>
			<h4>{data.length}개의 일기가 있습니다.</h4>

			{data.map((list) => (
				<DiaryItem key={list.id} {...list} />
			))}
		</div>
	)
}

DiaryList.defaultProps = {
	data: [],
}

export default DiaryList
