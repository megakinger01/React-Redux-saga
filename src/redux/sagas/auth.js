import { put, takeLatest } from 'redux-saga/effects';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config'
import { errorAction, login, } from '../action/auth';
import { types } from '../types/types'



function* loginResults({ payload }) {
    const { email, password } = payload

    try {

        const resp = yield firebase.auth().signInWithEmailAndPassword(email, password)
        const { user } = resp
        const { uid, displayName } = user

        yield put(login(uid, displayName))

    } catch (error) {
        yield put(errorAction(error))
    }
}



function* loginGoogleResp() {

    try {

        const respGoogle = yield firebase.auth().signInWithPopup(googleAuthProvider)
        const { user } = respGoogle
        const { uid, displayName } = user

        yield put(login(uid, displayName))

    } catch (error) {
        yield put(errorAction(error))
    }
}


function* registerResp({ payload }) {

    const { name, email, password } = payload

    try {

        const registerFirebase = yield firebase.auth().createUserWithEmailAndPassword(email, password)
        const { user } = registerFirebase
        yield user.updateProfile({ displayName: name })
        const { uid, displayName } = user

        yield put(login(uid, displayName))

    } catch (error) {
        yield put(errorAction(error))
    }
}


function* logoutFirebase() {

    try {
        yield firebase.auth().signOut()

    } catch (error) {
        yield put(errorAction(error))
    }
}



export function* sagasAuth() {
    yield takeLatest(types.startLoading, loginResults)
    yield takeLatest(types.startLoadingGoogle, loginGoogleResp)
    yield takeLatest(types.startLoadingRegister, registerResp)
    yield takeLatest(types.logout, logoutFirebase)
}