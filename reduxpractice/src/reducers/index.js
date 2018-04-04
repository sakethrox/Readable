    import {
        CHANGE_NAME,
        CHANGE_GRADE,
        } from '../actions'

        const initialStudentState = {
        1: {
            name: 'sai',
            grade: '7',
        },
            2: {
            name: 'saketh',
                grade: '8',
            },
        }

    export default function students(state = initialStudentState, action){
        const {id, name,grade}  = action;
        //console.log(id+''+name);

        switch (action.type){
            case CHANGE_NAME:
                return {
                    ...state,
                    [id]: {
                        ...state[id],
                        name: name,
                    }
                }
            case CHANGE_GRADE:
                return {
                    ...state,
                    [id]: {
                        ...state[id],
                        [grade]: grade,
                    }
                }
            default:
                return state
        }

        }