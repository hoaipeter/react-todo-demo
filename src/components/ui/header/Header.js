import React from 'react';
import InputWrapper from '../input-box/InputWrapper';

export default function Header(props) {
  return (
    <header style={{ marginBottom: 20 }}>
      <h1>Things To Do</h1>
      <InputWrapper {...props} />
    </header>
  );
}
