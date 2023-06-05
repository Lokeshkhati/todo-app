import express from 'express';
const router = express.Router()

import { getTodos, createTodo, updateTodo, deleteTodo, getTodoById, toggleTodo, changeBgColor } from '../controllers/todo.js'
import { isLoggedIn } from '../middlewares/user.js'

router.route('/').get(isLoggedIn, getTodos)
router.route('/create').post(isLoggedIn, createTodo)
router.route('/:id').get(isLoggedIn, getTodoById)
router.route('/:id').put(isLoggedIn, updateTodo)
router.route('/:id/completed').patch(toggleTodo)
router.route('/:id/changeBgColor').patch(changeBgColor)
router.route('/:id').delete(isLoggedIn, deleteTodo)

export default router


// [
//     {
//       id: '640472700590903b6260b7d3',
//       title: 'ok dear',
//       description: "t is a rarity to meet each other in a long distance relationship and when you finally do, the goodbyes can get pretty difficult. There's so much uncertainty and you do not know when you'll meet again. Alag Aasmaan talks about a similar story where the girl is leaving the guy's place and is traveling back to her house which is in a different city,",
//       completed: false,
//       tags: [],
//       createdAt: '2023-03-05T10:44:00.568Z',
//       updatedAt: '2023-03-05T11:06:52.943Z'
//     },
//     {
//       id: '640472830590903b6260b7d6',
//       title: 'bawa',
//       description: "t is a rarity to meet each other in a long distance relationship and when you finally do, the goodbyes can get pretty difficult. There's so much uncertainty and you do not know when you'll meet again. Alag Aasmaan talks about a similar story where the girl is leaving the guy's place and is traveling back to her house which is in a different city,",
//       completed: true,
//       tags: [],
//       createdAt: '2023-03-05T10:44:19.474Z',
//       updatedAt: '2023-03-05T11:09:10.073Z'
//     },
//     {
//       id: '6404728d0590903b6260b7d9',
//       title: 'maa tujhe salam',
//       description: "t is a rarity to meet each other in a long distance relationship and when you finally do, the goodbyes can get pretty difficult. There's so much uncertainty and you do not know when you'll meet again. Alag Aasmaan talks about a similar story where the girl is leaving the guy's place and is traveling back to her house which is in a different city,",
//       completed: true,
//       tags: [],
//       createdAt: '2023-03-05T10:44:29.543Z',
//       updatedAt: '2023-03-05T11:09:14.896Z'
//     },
//     {
//       id: '64047a984492859481b5ff7e',
//       title: 'completed',
//       description: 'completed\ncompleted\ncompleted',
//       completed: false,
//       tags: [],
//       createdAt: '2023-03-05T11:18:48.320Z',
//       updatedAt: '2023-03-05T12:21:07.555Z'
//     },
//     {
//       id: '6404893bda2e82239a903ac4',
//       title: 'a',
//       description: 'storeVideos',
//       completed: false,
//       tags: [],
//       createdAt: '2023-03-05T12:21:15.521Z',
//       updatedAt: '2023-03-05T12:21:15.521Z'
//     }
//   ]