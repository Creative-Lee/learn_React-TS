import React from 'react'
import { DiaryListData } from '../../../types'

const DiaryItem = ({
	author,
	content,
	emotion,
	createdDate,
}: DiaryListData) => {
	return (
		<div className='DiaryItem'>
			<div className='info'>
				<span>
					author: {author} | emotion: {emotion}
				</span>
				<div>content: {content}</div>
				<span>
					createdDate:
					{new Date(createdDate).toLocaleString()}
				</span>
			</div>
		</div>
	)
}

export default DiaryItem
