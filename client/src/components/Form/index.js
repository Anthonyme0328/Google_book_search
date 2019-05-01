import React from "react";

// creates the input form for searches
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      {/* creates a class */}
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
        // creates a class an id sets the type as text, takes in q for the value, sets a placeholder, takes in the onchange and makes it required
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      {/* creates the sumbit button */}
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

// exports the form to be reused
export default Form;
