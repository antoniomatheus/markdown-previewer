import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Markdown({ setMarkdown }) {
  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  return (
    <Container>
      <header>Markdown</header>
      <textarea onChange={event => handleChange(event)} />
    </Container>
  );
}

Markdown.propTypes = {
  setMarkdown: PropTypes.func.isRequired,
};
