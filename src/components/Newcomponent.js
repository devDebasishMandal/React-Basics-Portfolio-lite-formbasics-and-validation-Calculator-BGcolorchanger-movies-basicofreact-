import {useState} from 'react'

const Newcomponent = () => {
    const [data, setdata] = useState(1);

const change=(e)=>{
    if(e.target.id=="inc"){
        setdata((data) => {
            // console.log(data);
          return data + 1;
        });
        setdata((data)=>{
return data+1;
        });
        setdata((data) => {
          return data + 1;
        });
        
 
    }else{
        setdata(data-1);
    }
    // setdata((old)=>{console.log(old)
    // debugger});
    
}



  return (
    <>
{data}
      <button id="inc"onClick={change}>inc</button>
      <button id="dec" onClick={change}>dec</button>
    </>
  );
}

export default Newcomponent