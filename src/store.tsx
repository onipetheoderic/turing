import React, { useReducer, Dispatch, createContext } from 'react';
export type PageContextType = {
  state: any;
  setPage: any;
}

interface Actions {
  type: string;
  payload: any;
}

const initialState = {
  currentPage: 'section_1'
}
interface stateProps {
  currentPage: 'section_1'
}
interface IContextProps {
  state: stateProps;
  dispatch: Dispatch<Actions>;
}

export const PageContext = createContext({} as IContextProps);

export const PageContextProvider = (props:any) => {
  
  const [state, dispatch] = useReducer((state:any, action:any) => {
    switch(action.type) {
      case 'changePage':
        return { ...state, currentPage: action.payload }
      default:
        throw new Error()
    }
  }, initialState)
  return (
    <PageContext.Provider value={{state, dispatch}}>
      {props.children}
    </PageContext.Provider>
  )
}


