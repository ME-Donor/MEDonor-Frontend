import * as ActionTypes from '../ActionTypes';

export const DonorSpeaks = (state = {
    isLoading: true,
    errMess: null,
    donorSpeaks: []
}, action) => {
switch(action.type) {
    case ActionTypes.ADD_DONORSPEAKS:
        return {...state,
             isLoading: false, 
             errMess: null, 
             donorSpeaks: action.payload};

    case ActionTypes.DONORSPEAKS_LOADING:
        return {...state,
             isLoading: true,
              errMess: null, donorSpeaks: []};

    case ActionTypes.DONORSPEAKS_FAILED:
            return {...state,
                 isLoading: false, 
                 errMess: action.payload, 
                };

    case ActionTypes.ADD_DONORSPEAK:
        var donorSpeak = action.payload;
        return {
            ...state,
            donorSpeaks:state.donorSpeaks.concat(donorSpeak)
        };

    case ActionTypes.DELETE_DONORSPEAK:
        var donorSpeakId=action.payload;
        var index = state.donorSpeaks.indexOf(state.donorSpeaks.filter(donorSpeak => donorSpeak.id === donorSpeakId)[0]);    
        state.donorSpeaks.splice(index,1);
        return {
            ...state,
            donorSpeaks:state.donorSpeaks
        }
        default:
            return state;
    }
}