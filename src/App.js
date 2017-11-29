import React from 'react';
import './style.css'

import { Row, Col } from 'react-bootstrap'

//-----------------------------------------------user components---------------------------------------------------
import Welcome from './components/welcome'
import UserForm from './components/UserForm'
import ResultComponent from './components/ResultComponent'


class App extends React.Component {
   render() {
      return (
      	<div>
	        <Row>
	         	<Col md={12}>
	         		<Welcome name=""/>
	         	</Col>
	        </Row>
	        <Row>
	        	<Col md={2}></Col>

        	    <Col md={4}>
	            	<UserForm />
	            </Col>

	            <Col md={4}>

	            			<ResultComponent />

	            </Col>

	            <Col md={2}></Col>
	        </Row>
         </div>
      );
   }
}
export default App;
