import { DiaryItemData } from './index'

type DataReducerInitAction = {
	type: 'INIT'
	data: DiaryItemData[]
}
type DataReducerCreateAction = {
	type: 'CREATE'
	data: {
		id: number
		author: string
		content: string
		emotion: number
	}
}
type DataReducerRemoveAction = {
	type: 'REMOVE'
	data: { id: number }
}
type DataReducerEditAction = {
	type: 'EDIT'
	data: { id: number; newContent: string }
}

export type DataReducerActions =
	| DataReducerInitAction
	| DataReducerCreateAction
	| DataReducerRemoveAction
	| DataReducerEditAction
