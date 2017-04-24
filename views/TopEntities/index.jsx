import React, { PropTypes } from 'react';
import { Tabs, Pane } from 'watson-react-components';
import Cloud from './cloud.jsx';
import QuerySyntax from '../QuerySyntax/index.jsx';
import queryBuilder from '../../query-builder.js';  // eslint-disable-line


export default React.createClass({
  displayName: 'TopEntities',

  propTypes: {
    entities: PropTypes.object.isRequired,
    query: React.PropTypes.shape({
      text: React.PropTypes.string,
      date: React.PropTypes.object,
    }),
  },

  getInitialState() {
    return {
      showQuery: false,
    };
  },

  /*onShowQuery() {
    this.setState({ showQuery: true });
  },*/

  onShowResults() {
    this.setState({ showQuery: false });
  },

  render() {
    return (
      <div>
        
          <div className="top-entities widget">
            <div className="widget--header">
              <h2 className="base--h2 widget--header-title">Top Entities</h2>
              <div className="widget--header-spacer" />
              
            </div>
            <p className="base--p top-entities--description">
              Easily extract frequently mentioned entities - such as people, topics and companies with Pre-enriched News.
            </p>
            <Tabs selected={0}>
              <Pane label="Topics">
                <Cloud data={this.props.entities.topics} />
              </Pane>
             
            </Tabs>
          </div>
       
      </div>
    );
  },
});
