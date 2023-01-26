import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos';
import logger from 'redux-logger';
export default configureStore({
	reducer: {
		todoinfo: todosReducer,
	},
	//middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
