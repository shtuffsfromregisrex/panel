/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
// eslint-disable-next-line @next/next/no-head-import-in-document
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                    <meta name="google" content="notranslate" key="notranslate" />
                </Head >
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>

        )
    }
}