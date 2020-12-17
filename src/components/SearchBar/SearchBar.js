import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }
  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.submitForm(this.state.searchTerm)
  }
  render() {
    return (
      <div className='segment'>
        <form onSubmit={this.formSubmitHandler}>
          <label htmlFor='keyword'>Image Search:</label>
          <input
            id='keyword'
            name='keyword'
            type='text'
            value={this.state.searchTerm}
            onChange={(e) => { this.setState({ searchTerm: e.target.value }) }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;