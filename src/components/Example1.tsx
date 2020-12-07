import React from 'react';
const Example1 = ({label}) =>{

    React.useEffect(()=> console.log(label), []);
    return(
        <div>{label} + Example</div>
    )
}
export default Example1;