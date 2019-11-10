import React from 'react';
import { compose } from 'redux';

import Form, { Input, Button } from '../Form';
import WithArticlesState from '../../Providers/Articles';

interface Props extends React.SFC {
  addArticle: any;
};

const AdminPanel: React.SFC<Props> = ({ addArticle }) => {
  const selectFile = (event: React.FormEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    console.log(files);
    // if (files !== null && files.length > 0) {
    //   this.setState({ firFileName: files[0].name });
    // }
  }

  const create = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title: any = event.currentTarget.elements.namedItem('title');
    const author: any = event.currentTarget.elements.namedItem('author');
    const text: any = event.currentTarget.elements.namedItem('text');
    // const image: any = event.currentTarget.elements.namedItem('image');
    addArticle({
      title: title.value,
      author: author.value,
      text: text.value,
      date: (new Date()).toString(),
    });
  }

  return (
    <div>
      <Form
        onSubmit={create}
      >
        <Input
          label="Title"
          type='text'
          name='title'
        />
        <Input
          label="Author"
          type='text'
          name='author'
        />
        <Input
          label="Text"
          type='text'
          name='text'
        />
        <Input
          label="Image"
          type='file'
          name='image'
          change={selectFile}
        />
        <Button
          type='submit'
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default compose<Props>(
  WithArticlesState,
)(AdminPanel);
