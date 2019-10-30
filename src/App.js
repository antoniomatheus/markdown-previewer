import React, { useState, useEffect } from 'react';
import { Converter } from 'showdown';

import Markdown from './components/Markdown';
import Preview from './components/Preview';

import { Container } from './styles';
import GlobalStyles from './styles/globalStyles';

const initialState = `
# Welcome!

## This is a markdown previewer developed using React JS
`;

function App() {
  const converter = new Converter({ simpleLineBreaks: true });
  const [markdown, setMarkdown] = useState(initialState);
  const [preview, setPreview] = useState(<div />);

  useEffect(() => {
    const html = converter.makeHtml(markdown);
    setPreview(html);
  }, [markdown, converter]);

  return (
    <Container>
      <GlobalStyles />
      <Markdown markdown={markdown} setMarkdown={setMarkdown} />
      <Preview preview={preview} />
    </Container>
  );
}

export default App;
