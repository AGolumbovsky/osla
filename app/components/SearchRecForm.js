/*import React from 'react';

var SearchRecForm = React.createClass ({

    onFormSubmit: function(e) {
        e.preventDefault();

        var word = this.refs.searchText.value;
        console.log("you looking for", word + "?");

        if(word.length > 0) {

            this.props.onSearch(word);
        }
    },

    render: function() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="searchText" placeholder="enter word" onChange={this.handleSearchChange}/>
                    <button className="button expanded hollow"> Find in Dictionary </button>
                </form>
            </div>
        );
    }
});

module.exports = SearchRecForm;

*********************************************
*********************************************
*/
import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const SearchRecForm = (props) => {

  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'searchRec'  // a unique identifier for this form
})(SearchRecForm)
