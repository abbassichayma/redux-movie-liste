import {GETDATA} from '../Redux/ActionType'

export const getMovies=(listMovies)=>{
    return{
        type:GETDATA,
        payload:listMovies
        
    }
}

export const deleteMovie=(id)=>{
    return{
        type:'DELETEMOVIE',
        payload:id
    }
}
export const addNewMovie=(add)=>{
    return {
        type:'ADDNEWMOVIE',
        payload:add

    }
}

