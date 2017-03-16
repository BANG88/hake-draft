# hake-draft

> A wrapper Component for react-draft-wysiwyg

![banner](assets/preview.png)

This package require a css file, make sure you use webpack or similar tools for handler this file type. 

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```sh
npm i hake-draft -S

# or

yarn add hake-draft

```

## Usage

```ts
import Draft, { htmlToDraft, draftToHtml, EmptyState, } from 'hake-draft'

state = {
    editorState: htmlToDraft('Your html contents') // or use an EmptyState
}

<Draft
    editorState={this.state.editorState}
    onEditorStateChange={(editorState) => { this.setState({ editorState }) }}
/>

// save html to server

const html = draftToHtml(content)

```

If you use antd's Form Component and you are ready to go.

```js

<FormItem label="Contents" {...alignProps} wrapperCol={{ span: 16 }}>
    {getFieldDecorator('Content', {
        rules: [{ required: true, message: 'Please leave a message...' }],
    })(
        <Draft
            editorState={this.state.editorState}
            onEditorStateChange={(editorState) => { this.setState({ editorState }) }}
        />
        )}
</FormItem>

// convert state to html 

this.props.form.validateFields((err, data) => {
    if (err) {
        return
    }
    /**
    * do more check here.
    */
    if (data.Content) {
        data.Content = draftToHtml(data.Content)
    }
    // Now you have your html contents and ready to post to your server.
})

```

## Contribute



Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © bang88
