import React, { useState } from 'react'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import './App.css'

const App = () => {
	const dummyList = [
		{
			id: 1,
			author: 'BOB',
			content: 'dummy',
			emotion: 1,
			createdDate: new Date().getTime(),
		},
		{
			id: 2,
			author: 'GOD',
			content: 'dummy',
			emotion: 2,
			createdDate: new Date().getTime(),
		},
		{
			id: 3,
			author: 'GANG',
			content: 'dummy',
			emotion: 3,
			createdDate: new Date().getTime(),
		},
	]
	return (
		<>
			<DiaryEditor />
			<DiaryList dummyList={dummyList} />
		</>
	)
}

export default App
