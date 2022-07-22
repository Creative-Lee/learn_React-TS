export type OnCreate = (author: string, content: string, emotion: number) => void

export type OnChangeHTMLElement = (
	e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
) => void

export interface DiaryItemData {
	author: string
	content: string
	emotion: number
	createdDate: number
}

export interface DiaryListData extends DiaryItemData {
	id: number
}
