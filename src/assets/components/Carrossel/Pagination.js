import React from 'react';
import PaginationDot from './PaginationDot';

const Pagination = ({ dots, index, onChangeIndex, estilo }) => {
  const classes = estilo;
  const handleClick = (event, index) => {
    onChangeIndex(index);
  };

  const children = [];

  for (let i = 0; i < dots; i += 1) {
    children.push(
      <PaginationDot key={i} index={i} active={i === index} onClick={handleClick} />,
    );
  }

  return <div className={classes.paginacao}>{children}</div>;
}

export default Pagination;