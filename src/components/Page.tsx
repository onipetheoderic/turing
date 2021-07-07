import React, { useEffect, useContext } from 'react';
import Section from './Section'
import { PageContext } from '../store';




function Page(props: any) {
  const globalState = useContext(PageContext);
  const { state, dispatch } = globalState;
  
  const handleLinkChange = (link_name:string) => {
    dispatch({type:"changePage", payload:link_name})
  }
  const currentPage = state.currentPage;
  console.log(currentPage,"CCCCCCCCCC")
  return (
    <>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <Section name="Section 1" linkName="section_1" onClick={()=>handleLinkChange("section_1")} />
      <Section name="Section 2" linkName="section_2" onClick={()=>handleLinkChange("section_2")} />
      <Section name="Section 3" linkName="section_3" onClick={() => handleLinkChange("section_3")} />
      
     
      </div>
      <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        {currentPage === "section_1" ? <h1>Welcome to Section 1</h1> : currentPage === "section_2" ? <h1>Welcome to section 2</h1> : <h1>Welcome to section 3</h1>}
      </div>
      </>
  );
}

export default Page;