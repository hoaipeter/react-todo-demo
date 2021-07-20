import React from 'react';
import Filter from '../filter/Filter';
import ButtonWrapper from '../ButtonWrapper';

export default function Footer(props) {
  const { count, filter, changeFilter } = props;

  return (
    <footer style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ display: 'flex' }}>
        <div className="pull-left buttons">
          <ButtonWrapper {...props} />
        </div>
        <div className="pull-left">{`${count} items left`}</div>
      </div>
      <div className="pull-right">
        <Filter {...{ filter, changeFilter }} />
      </div>
    </footer>
  );
}
