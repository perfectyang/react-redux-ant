import { ADD_TODO, GET_DATA, VisibilityFilters, DELETE_DATA } from './constant'

const ACTION_HANDLERS = {
  [ADD_TODO]: (state, action): Object => {
    const allList = state.allList
    console.log('action', action.res)
    const backResult = action.res
    if(backResult.success == 1) {
      allList.push(backResult.data)
      return Object.assign({}, state, {
        allList
      })
    }else {
      alert(backResult.msg)
      return state
    }
  },
  [GET_DATA]: (state, action): Object => {
    const allList = state.allList
    const backResult = action.initData
    console.log('原来allList', allList)
    console.log('里看到initData', action.initData)
    const concatArr = backResult.data
    return Object.assign({}, state, {
      allList : concatArr
    })
  }, 
  [DELETE_DATA]: (state, action): Object => {
    const allList = state.allList
    const index = action.params.index
    const backResult = action.backData
    if(backResult.success == 1) {
        allList.splice(index,1)
      return Object.assign({}, state, {
        allList
      })
    }else {
      alert(backResult.msg)
      return state
    }
  }
}


const initialState = {
    allList: []
}
export default function demoReducer (state: Object = initialState, action: Action): Object {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
