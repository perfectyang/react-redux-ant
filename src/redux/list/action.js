import fetch from 'isomorphic-fetch'
import { ADD_TODO, GET_DATA, VisibilityFilters, DELETE_DATA } from './constant'

/*
 * action 加东西函数
 */
const addTodos = (res): Action => ({
  type: ADD_TODO,
  res
})

export const addTodo = (params) => {
  return (dispatch, getState) => {
    return fetch('/docs/group/save',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then((response) => response.json())
    .then((json) => dispatch(addTodos(json)))
  }
}

const  deleteData = (backData,params): Action => ({
  type: DELETE_DATA,
  params,
  backData
})

export const deletsGroup = (params) => {
  return (dispatch, getState) => {
    return fetch('/docs/group/remove?groupId='+params.id)
           .then(response => response.json())
           .then(data => dispatch(deleteData(data,params)))
  }
}



//  获取初始函数
const storeInitData = (initData) : Action => ({
  type: GET_DATA,
  initData
})
export const getInitData = (params) => {
  return (dispatch, getState) => {
    const index = index || 10
    const defaults = {
      limit : 20,
      page: 1,
      tab: ''
    }
    const requestOption = Object.assign(defaults, params)
    return fetch('https://cnodejs.org/api/v1/topics?limit='+requestOption.limit+'&page='+requestOption.page+'&tab='+requestOption.tab)
           .then((response) => response.json())
           .then((json) => dispatch(storeInitData(json)))
  }
}
