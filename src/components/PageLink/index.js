import React from 'react'
import { useHistory } from "react-router-dom";

const PageLink = ({ linkTitle, path }) =>  {
  const history = useHistory();
console.log(linkTitle, path)
  const handleClick = () => {
    history.push(path);
  }

  return (
    <button type="button" onClick={handleClick}>
      {linkTitle}
    </button>
  );
}

export default PageLink
