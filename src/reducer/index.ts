import { Reducer } from 'react'
import { DiaryItemData } from '../types'
import { DataReducerActions } from '../types/reducer'

export const dataReducer: Reducer<DiaryItemData[], DataReducerActions> = (
	state,
	action,
) => {
	switch (action.type) {
		case 'INIT': {
			return action.data
		}
		case 'CREATE': {
			const data = action.data
			const createdDate = new Date().getTime()
			const newItem = {
				...data,
				createdDate,
			}
			return [newItem, ...state]
		}
		case 'REMOVE': {
			const { id } = action.data

			const removedData = state.filter((data) => data.id !== id)

			return removedData
		}
		case 'EDIT': {
			const { id, newContent } = action.data

			const editedData = state.map((itemData) =>
				itemData.id === id ? { ...itemData, content: newContent } : itemData,
			)

			return editedData
		}

		default:
			return state
	}
}
