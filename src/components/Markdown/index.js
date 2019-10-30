import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Markdown({ markdown, setMarkdown }) {
  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  return (
    <Container>
      <header>Markdown</header>
      <textarea
        id="editor"
        value={markdown}
        onChange={event => handleChange(event)}
      />
    </Container>
  );
}

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
};
