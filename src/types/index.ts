export type OnCreate = (author: string, content: string, emotion: number) => void
export type OnRemove = (id: number) => void
export type OnEdit = (id: number, newContent: string) => void

export type OnChangeHTMLElement = (
	e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
) => void

export interface DiaryItemData {
	id: number
	author: string
	content: string
	emotion: number
	createdDate: number
}
