import { createRoot } from 'react-dom/client';
import App from "E:\\xlab\\comment_area\\src\\pages\\APP.js";
 const container = document.getElementById('root');

 if(container) {
     const root = createRoot(container);
     root.render(<App/>);    
 }

