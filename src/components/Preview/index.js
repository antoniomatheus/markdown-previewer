import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Preview({ preview }) {
  return (
    <Container>
      <header>Preview</header>
      <div id="preview" dangerouslySetInnerHTML={{ __html: preview }} />
    </Container>
  );
}

Preview.propTypes = {
  preview: PropTypes.element.isRequired,
};
