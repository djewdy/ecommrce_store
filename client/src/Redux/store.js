import {combineReducers} from 'redux';
import{persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
  }