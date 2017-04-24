import React from 'react';
import { Header, Jumbotron, Footer } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'Sentiment Analysis and trend for IBM products';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>Discovery News : Sentiment Analysis</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Discovery Demo" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* Bluemix Analytics - begin*/}
        <script type="text/javascript">{`
          window._analytics = { coremetrics: false, optimizely: false, addRoll: false };
        `}</script>
        <meta name="segment" property="discovery-news-sentiment-analysis" value="discovery-news-sentiment-analysis" />
        <script src={props.bluemixAnalytics} />
        {/* Bluemix Analytics  - end*/}
      </head>
      <body>
        <Header/>
        <Jumbotron
          
          description={DESCRIPTION}
        />
        <div id="root">
          {props.children}
        </div>
        <div style={{ marginTop: '0rem' }}>
          <Footer />
        </div>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        <script type="text/javascript" src="js/bundle.js" />
        <script type="text/javascript" src="js/ga.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired,
  bluemixAnalytics: React.PropTypes.string,
};

export default Layout;
