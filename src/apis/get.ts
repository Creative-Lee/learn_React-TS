import axios from 'axios'
import { DiaryItemData } from '../types'

interface Data {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

export const getData = async (dataIdRef: number) => {
	try {
		const response = await axios.get<Data[]>(
			'https://jsonplaceholder.typicode.com/comments',
		)

		const initData = response.data.slice(0, 20).map((data) => {
			return {
				id: dataIdRef++,
				author: data.email,
				content: data.body,
				emotion: Math.floor(Math.random() * 5) + 1,
				createdDate: new Date().getTime(),
			}
		})

		return initData.reverse()
	} catch (e) {
		console.log(e)
		return []
	}
}
