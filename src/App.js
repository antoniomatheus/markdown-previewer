import React, { useState, useEffect } from 'react';
import { Converter } from 'showdown';

import Markdown from './components/Markdown';
import Preview from './components/Preview';

import { Container } from './styles';
import GlobalStyles from './styles/globalStyles';

function App() {
  const converter = new Converter();
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState(<div />);

  useEffect(() => {
    const html = converter.makeHtml(markdown);
    setPreview(html);
  }, [markdown, converter]);

  return (
    <Container>
      <GlobalStyles />
      <Markdown setMarkdown={setMarkdown} />
      <Preview preview={preview} />
    </Container>
  );
}

export default App;
