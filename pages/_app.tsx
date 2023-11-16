import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
      <title>LMP Reporting LLC</title>
    </Head>
    <style>{`
      body {
        font-family: sans-serif;
      }
      button, input, select, textarea {
        font-size: 100%;
      }

      table, td {
        border: .15em solid black;
        border-collapse: collapse;
        vertical-align: top;
      }

      table table  {
        border: 0;
        width: 100% !important;
      }

      table td:has(table) { 
        padding: 0;
      }

      table table tr:first-child td {
        border-top: 0;
      }

      table table tr:last-child td {
        border-bottom: 0;
      }

      table table tr td:first-child {
        border-left: 0;
      }

      table table tr td:last-child {
        border-right: 0;
      }

      div {
        paddingLeft: 1rem;
        paddingRight: 1rem;
      }

      span[contenteditable="true"] {
        display: inline-block;
        min-width: .5rem;
        background-color:yellow;
      }

      .new-line {
        white-space: pre-line;
      }

      @media print {
        @page {
          size: letter;
          margin: .75in;
        }

        @page :footer {
          display: none !important;
        }  
        @page :header {
          display: none !important;
        }

        body { 
          -webkit-print-color-adjust: exact; 
          font-size: .75em;
        }

        span[contenteditable="true"] {
          background-color: transparent;
        }

        .no-print {
          display: none !important;
        }
        .no-border-print {
          border: 0;
        }
      }
    `}</style>
    <Component {...pageProps} />
  </div>
}

export default MyApp
