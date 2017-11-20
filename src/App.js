import React from 'react';
import Welcome from './components/welcome'
import './style.css'

class App extends React.Component {
   render() {
      return (
         <div>
            <Welcome name="Sandeep Singh"/>
         </div>
      );
   }
}
export default App;