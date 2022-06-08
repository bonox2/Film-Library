// import { createContext} from "react";
// import { getTodos } from "../api/movies";

// const initialState = []
// export const TodosContext = createContext([])
// function reducer(state, action) {
//   switch (action.type) {
//     case "INIT": {
//       return action.payload
//     }
//     case "ADD": {
//       return [...state, action.payload]
//     }
//     case "UPDATE": {
//       const oldTodoIdx = state.findIndex(todo => todo.id === action.payload.id)
//       const newState = [...state]
//       newState.splice(oldTodoIdx, 1, action.payload)
//       return newState
//     }
//     default:
//       throw new Error(`Wrong action.type! Current action.type is ->> "${action.type}"`)
//   }
// }