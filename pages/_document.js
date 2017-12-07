import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    return {html, head, errorHtml, chunks}
  }

  render() {
    return (
      <html>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

        <meta name="viewport" content="width=device-width"/>

        <link rel="stylesheet" href="/static/css/style.css"/>
        <link rel="stylesheet" href="/static/css/syntax.css"/>
        <link rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/styles/monokai_sublime.min.css"/>
      </Head>
      <body className="custom_class">
      <Main/>
      <NextScript/>
      <script type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/highlight.min.js"></script>
      <script>hljs.initHighlightingOnLoad();</script>
      </body>
      </html>
    )
  }
}
