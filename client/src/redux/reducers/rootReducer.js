import {combineReducers} from 'redux'
import {usersReducer} from './usersReducer'
import {tasksReducer} from './tasksReducer'
import { rolesReducer } from './rolesReducer'


export const rootReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  roles: rolesReducer
})
