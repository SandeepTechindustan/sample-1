import React from 'react'
import { Button } from 'react-bootstrap'

const FormButton = (props) => {
	let {
		type,
		title,
		xs,
		sm,
		md,
		className,
		id,
		bsStyle,
		disabled,

		block
	} = props;

	return (
		<Col className="form_wzard_btns" xs={xs} sm={sm} md={md}>
			<Button
				bsStyle={bsStyle}
				type={type}
				className={className}
				id={id}
				disabled={!!disabled}
				block={block}
			>{title}</Button>
		</Col>
	)
}

export default FormButton
