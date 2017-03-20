import * as saga from 'redux-saga';
import rootSaga from './index';

const sagas = [rootSaga];

export const CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR';

function createAbortableSaga(saga: any) {
    return saga;
}

const SagaManager = {
    startSagas(sagaMiddleware: any) {
        sagas.map(createAbortableSaga).forEach(saga => sagaMiddleware.run(saga));
    },
    cancelSagas(store: any) {
        store.dispatch({
            type: CANCEL_SAGAS_HMR,
        });
    },
};

export default SagaManager;
