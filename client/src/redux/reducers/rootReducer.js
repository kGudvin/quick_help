import {combineReducers} from 'redux'
import {usersReducer} from './usersReducer'
import { usersTasksReducer} from './usersTasksReducer'
import { rolesReducer } from './rolesReducer'


export const rootReducer = combineReducers({
  users: usersReducer,
  usersTasks: usersTasksReducer,
  roles: rolesReducer
})
