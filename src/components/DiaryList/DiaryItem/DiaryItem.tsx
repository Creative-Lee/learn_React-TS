import React, { useEffect, useRef, useState } from 'react'
import { DiaryItemData, OnEdit, OnRemove } from '../../../types'

type DiaryItemProps = {
	content: string
	id: number
	author: string
	emotion: number
	createdDate: number
	onRemove: OnRemove
	onEdit: OnEdit
}

const DiaryItem = ({
	content,
	id,
	author,
	emotion,
	createdDate,
	onRemove,
	onEdit,
}: DiaryItemProps) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [localContent, setLocalContent] = useState(content)
	const localContentRef = useRef<HTMLTextAreaElement>(null)
	const toggleIsEdit = () => setIsEdit((prev) => !prev)
	const handleQuitEdit = () => {
		setLocalContent(content)
		setIsEdit(false)
	}
	const handleEdit = () => {
		if (localContent.length < 5) {
			localContentRef.current?.focus()
			return
		}
		onEdit(id, localContent)
		toggleIsEdit()
	}

	return (
		<div className='DiaryItem'>
			<div className='info'>
				<span>
					author: {author} | emotion: {emotion}
				</span>
				<span>
					createdDate:
					{new Date(createdDate).toLocaleString()}
				</span>
				<div className='content'>
					{isEdit ? (
						<>
							<textarea
								ref={localContentRef}
								value={localContent}
								onChange={(e) => {
									setLocalContent(e.target.value)
								}}
							/>
						</>
					) : (
						<>content: {content}</>
					)}
				</div>

				{isEdit ? (
					<>
						<button onClick={handleEdit}>수정완료</button>
						<button onClick={handleQuitEdit}>취소</button>
					</>
				) : (
					<>
						<button
							onClick={() => {
								onRemove(id)
							}}
						>
							삭제하기
						</button>
						<button onClick={toggleIsEdit}>수정하기</button>
					</>
				)}
			</div>
		</div>
	)
}

export default DiaryItem
