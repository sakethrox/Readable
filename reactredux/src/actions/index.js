export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_GRADE = 'CHANGE_GRADE'

export function changeName({id,name}){
    return {
        type: CHANGE_NAME,
        id,
        name,
    }
}

export function changeGrade({id, grade}){
    return {
        type: CHANGE_GRADE,
        id,
        grade,
    }
}