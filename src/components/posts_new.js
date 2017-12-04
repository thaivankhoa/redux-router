import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from "../actions";


class PostsNew extends Component {
	
	renderField(field) {
		return(
			<div className="form-group">
				<label>{field.label} : </label>
				<input
					className="form-control"
					type="text"
					placeholder={field.placeholder}
					{...field.input}
				/>
			</div>
		);
		
	}

	onSubmit(values) {
	    this.props.createPost(values, () => {
	      this.props.history.push("/");
	    });
	}

	render() {

		const { handleSubmit } =this.props;

		return(
			<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
				<Field
					label="Title" 
					name="title"
					component={this.renderField}
					placeholder="enter the title..."
				/>
				<Field
					label="Tags" 
					name="tags"
					component={this.renderField}
					placeholder="enter the tags..."
				/>
				<Field
					label="Post content" 
					name="content"
					component={this.renderField}
					placeholder="enter the content..."
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));