import React from 'react'
import { Form  } from 'react-bootstrap'
import InputField from './common/InputField'
import FormButton from './common/FormButton'

const UserForm = () => {


	return (
		<div className="padding-20">
			<Form>
				<InputField
					type="text"
					label="First Name"
					md={12}
					id="fname"
					required="true"
				/>

				<InputField
					type="text"
					label="Last Name"
					md={12}
					id="lname"
					required="true"
				/>

				<InputField
					type="number"
					label="Age"
					md={12}
					id="age"
					required="true"
				/>

				<FormButton 
					title="Login"
					type="submit"
					bsStyle="success"
					id="submitButton"
				/>
			</Form>
		</div>
		)
}

export default UserForm