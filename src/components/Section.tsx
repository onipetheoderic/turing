import React, {useContext} from 'react';
import { PageContext } from '../store';

type Props = {
  name: string;
  linkName: string;
  onClick: any;
}

function Section({ name, linkName, onClick }: Props) {
  const globalState = useContext(PageContext);
  const { state, dispatch } = globalState;
  let currentState = state.currentPage == linkName ? true : false
  return (
    <div onClick={onClick} style={{ width: '31%', cursor:'pointer', minHeight: 50, backgroundColor:currentState?'lightgreen':'darkgreen', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <span style={{color:'white'}}>{name}</span>
    </div>
  );
}

export default Section;