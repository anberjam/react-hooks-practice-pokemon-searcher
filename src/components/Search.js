import React from "react";

function Search({searchValue, setSearchValue}) {

function handleChange(event)
{setSearchValue(event.target.value)}


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value = {searchValue} onChange = {handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
