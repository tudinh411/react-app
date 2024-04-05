import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '', // Search term
      selectedType: 'all' // Initially show all produce
    };
  }

  handleDropdownSelect = (type) => {
    this.setState({ selectedType: type });
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  filterItem = (item) => {
    const { search, selectedType } = this.state;
    const itemName = item.name.toLowerCase();

    const isMatched = itemName.includes(search);

    const isTypeMatched = selectedType === 'all' || item.type === selectedType;

    return isMatched && isTypeMatched;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title="Type Selection" onSelect={this.handleDropdownSelect}>

          <Dropdown.Item eventKey="all">All</Dropdown.Item> <br />
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item> <br />
          <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item><br />
        </DropdownButton>
        <br />

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <br />


        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;


