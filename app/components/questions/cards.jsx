import React from 'react';
import { Link , History} from 'react-router';

export default function(props) {

 // 	let showDeactivated = (
 // 		<li>
	// 		<button className="deactivated" onClick={(e) => props.selectCard(e, props.question)}>Select</button>
 // 		</li>
	// )

	console.log("prop", props.showSelected);
	let showSelect = (
		<li>
			<button className="success" onClick={(e) => props.selectCard(e, props.question)}>Select</button>
		</li>
	)
	let edit = (
		<Link to={`/questions/${props.question._id}/edit-question`} onClick={(e) => props.editCard(e, props.question)}>
			<i className="fa fa-pencil-square-o"></i>
		</Link>
	)
	let showRemove = (
		<li>
			<button className="error" onClick={(e) => props.removeCard(e,props.question._id)}>Remove</button>
		</li>
	)

	return (
		<div className="inline card questionCard">
			<ul className="questionCard--attr">
				<li>{props.question.category}</li>
				<li>{props.question.difficulty}</li>
				<li>{props.question.type}</li>
				{props.showSelected === true ? showSelect : showRemove}
			</ul>
			<div className="questionCard--attr">
				<p>{props.question.body}</p>
				{showSelect ? edit : null}
			</div>
		</div>
	)
}
