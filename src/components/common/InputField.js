import React from 'react'
import { FormControl, Col, FormGroup } from 'react-bootstrap';

const InputField = (props) => {
	let {
		type,
		placeholder,
		name,
		value,
		error,
		onChange,
		xs,
		sm,
		md,
		label,
		className,
		id,
		required,
		block,
	} = props;

	return (
		<Col md={12}>
			<FormGroup>
				{label?
					<span><label htmlFor={id}>{label}</label>{required?<sup>*</sup>:null}</span>
					:
					null
				}

				{ type !== 'textarea' ? <FormControl
					type={type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					className={className}
					id={id}
				/> :
				<FormControl
					type={type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					className={className}
					id={id}
					componentclass={textarea}
					>
					</FormControl>
				}
			</FormGroup>
		</Col>
	)
}

export default InputField