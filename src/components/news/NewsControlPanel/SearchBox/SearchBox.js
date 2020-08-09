import React from "react";
import { Icon, Input } from 'semantic-ui-react';
import "./SearchBox.scss";

const SearchBox = (props) => {
    return (
      <Input
        className='search-box'
        iconPosition='right'
        type='search'
        placeholder='بحث بواسطة الكلمات'
        onChange={props.searchBoxOnchange}
        >
        <Icon name='search' />
        <input />
      </Input>

    );
}

export default SearchBox;
