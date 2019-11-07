import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
let initState = {
  list: [],
  number: "0",
  arr: [
    {
      text: "封面一",
      col: "skyblue"
    },
    {
      text: "封面二",
      col: "yellow"
    },
    {
      text: "封面三",
      col: "pink"
    }
  ],
  curIndex: null ||0
}

// function add(newState){
//     newState.list.reduce((p,n)=>{
//      return   p+n.num*n.price
//     },0)
// }


let reducer = function (state = initState, action) {
  //拷贝数据
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === "ADD") {
    newState.list = action.value

  } else if (action.type === "ADD_P") {

    let arr = newState.list.filter(v => v.id === action.id)
    arr[0].num = arr[0].num + 1
    newState.number = newState.list.reduce((p, n) => {
      return p + n.num * n.price
    }, 0)

  } else if (action.type === "REMOVE") {

    let arr = newState.list.filter(v => v.id === action.id)
    arr[0].num = arr[0].num - 1
    newState.number = newState.list.reduce((p, n) => {
      return p + n.num * n.price
    }, 0)

  } else if (action.type === "SET") {
    newState.curIndex = action.i
  }

  return { ...newState }
}



let store = createStore(reducer, applyMiddleware(logger, thunk))


export default store