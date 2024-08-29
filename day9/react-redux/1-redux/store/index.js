import { createStore } from "redux";

const initState = {
  title: "我是store的标题",
  list: [1, 2, 3]

}

 const reducer = (state, action) => {
  switch (action.type) {
    case "changeTitle":
      return {
        ...state,
        title: action.payload
      }
    case "addList":
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
 }
// const reducer = (state, action ) => {
//   if (action.type === "changeTitle") {
//     return {
//      ...state,
//       title: action.payload
//     }
//   }
//   if (action.type === "addList") {
//     return {
//   ...state,
//       list: [...state.list, action.payload]
//     }
//   } else {
//     return state
//   }
// }
 const store = createStore(reducer, initState)

 export default store