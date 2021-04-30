import { all } from 'redux-saga/effects'
import { sagasAuth } from './auth'




export default function* rootSaga() {

    yield all([
        sagasAuth()
    ])
  
}