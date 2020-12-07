import React, {useState,useEffect} from 'react';
import Example1 from './components/Example1';
const App = ({ title }) =>{
  const [t, setT] = useState(title);
  useEffect(()=> console.log(t), [t]);
  return (
    <div><Example1 label={title}></Example1></div>
  );
}
export default App;