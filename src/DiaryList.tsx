import React from 'react'

interface DiaryListProps {
	dummyList: {
		id: number
		author: string
		content: string
		emotion: number
		createdDate: number
	}[]
}

const DiaryList = ({ dummyList }: DiaryListProps) => {
	return (
		<div className='DiaryList'>
			{dummyList.map((list) => (
				<div key={list.id}>
					<div>author: {list.author}</div>
					<div>content: {list.content}</div>
					<div>emotion: {list.emotion}</div>
					<div>createdDate: {list.createdDate}</div>
				</div>
			))}
		</div>
	)
}

export default DiaryList
