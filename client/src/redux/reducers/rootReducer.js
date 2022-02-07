import {combineReducers} from 'redux'
import {usersReducer} from './usersReducer'
import { usersTasksReducer} from './usersTasksReducer'
import { rolesReducer } from './rolesReducer'
import { oneUserTaskReducer } from './oneUserTaskReducer'
import { allCategoriesReducer } from './allCategoriesReducer'


export const rootReducer = combineReducers({
  users: usersReducer,
  usersTasks: usersTasksReducer,
  roles: rolesReducer,
  oneUserTask: oneUserTaskReducer,
  allCategories: allCategoriesReducer,
})
