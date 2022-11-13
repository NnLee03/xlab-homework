import "E:\\xlab\\comment_area\\src\\style\\style.css";
import { useState } from 'react'
import { ReactDOM } from 'react';
export default function App() {
  const [username,set1]=useState('');
  const [comment,set2]=useState('');
  function commit() {
    localStorage.setItem(username,comment)
    document.getElementById('input1').value='';
    document.getElementById('input2').value='';
    ReactDOM.render(<App/>,document.getElementById('root'));
  }

    return (
        <div class = "shuru">
            <h3 class = "user name" ><strong>user</strong>name</h3>
            <input class = "input" id = "input1" onChange={() => set1(document.getElementById('text1').value)}/>
            <h3 class = "comment">comment content</h3>
            <input class = "input" id = "input2" onChange={() => set2(document.getElementById('text1').value)}/>
            <br></br>
            <input class = "submit" value = "提交" onClick={commit} 提交 />
        </div>)

        
        
        
    
        }
