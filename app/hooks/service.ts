import { useState } from "react";
import InitialState, { ResetStatusHook } from "../store/types";
import { resetStatusHook, setErrorMessage } from "../utils/helpers";

const initialState: InitialState = {
    loading: 'idle',
    message: '',
    data: [],
};


export const useGetService = () => {
    const [state, setState] = useState<InitialState>(initialState);

    const reset = (key: ResetStatusHook) => {
        let stateNew = resetStatusHook(initialState, state, key);
        setState(stateNew);
    };

    const service = async (repository: () => Promise<any>) => {
        try {
            setState(prev => ({ ...prev, loading: 'pending' }));
            const { data: result } = await repository();
            if (result) {
                setState(prev => ({
                    ...prev,
                    loading: 'succeeded',
                    data: result?.items || result,
                    message: 'succeeded'
                }));
                return Promise.resolve(result?.items || result);
            } else {
                const message = result?.meta?.message;
                setState(prev => ({ ...prev, loading: 'failed', message: 'failed' }));
                return Promise.reject(message);
            }
        } catch (error) {
            const message = setErrorMessage(error);
            setState(prev => ({ ...prev, loading: 'failed', message: 'failed' }));
            return Promise.reject(message);
        }
    };

    return { state, service, reset };
};