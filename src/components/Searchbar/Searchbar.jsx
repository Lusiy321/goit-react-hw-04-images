import { Component } from 'react';
import PropTypes from 'prop-types';
import { Searchbar, SearchForm, Button, Icon, Input } from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handleChange = evt => {
    this.setState({ searchName: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchName.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Icon />
          </Button>

          <Input
            onChange={this.handleChange}
            value={this.state.searchName}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
