import React, {useState,useEffect} from 'react';
 
const App = ({ title }) =>{
  const [t, setT] = useState(title);
  useEffect(()=> console.log(t), [t]);
  return (
    <div>{t}</div>
  );
}
export default App;