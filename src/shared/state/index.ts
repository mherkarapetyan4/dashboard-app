import { configureStore } from '@reduxjs/toolkit'

// import { Store, applyMiddleware } from 'redux'
import { rootReducer, rootSaga } from './ducks'
import sagaMiddleware from './middlewares/saga'

// export default function configureStores(initialState: IApplicationState): Store<IApplicationState> {
//   const middlewares = applyMiddleware()
//   // Create Store
//   const store = configureStore({ reducer: rootReducer, preloadedState: initialState, middleware: middlewares })
//   return store
// }

// ...

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  // preloadedState: initialState,
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
