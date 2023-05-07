import React from "react";

export const InputWithButton = (props) => {
  const { searchWord, onChange, onClick } = props;
  return (
    <>
      <div className="input-group">
        <form>
          <input
            className="search_word"
            placeholder=""
            value={searchWord}
            onChange={onChange}
          />
        </form>
      </div>
      <div id="table">
        <button onClick={onClick} className="search_button" type="button">
          Google 検索
        </button>
        <button className="search_button" type="button">
          I'm Feeling Lucky
        </button>
      </div>
    </>
  );
};
