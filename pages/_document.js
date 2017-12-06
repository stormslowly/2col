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
                <link rel="stylesheet" href="/static/css/style.css"/>
            </Head>
            <body className="custom_class">
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}