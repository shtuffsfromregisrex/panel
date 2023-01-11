import React from "react";
// eslint-disable-next-line @next/next/no-head-import-in-document
import Head from "next/head";

export default function Document() {
    return (

        <Head>
            <title>Meta Tag Example</title>
            <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
            <meta name="google" content="notranslate" key="notranslate" />
        </Head>
    )
}