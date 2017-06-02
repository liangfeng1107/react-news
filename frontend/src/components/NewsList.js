import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PanelGroup, Panel, Label} from 'react-bootstrap';

import { getNews, getIT, getInternet } from '../actions/actions';

class NewsList extends Component {
  componentDidMount() {
    const { dispatch, newslist, match } = this.props;
    switch (match.path) {
      case '/news':
        dispatch(getNews());
        break;
      case '/it':
        dispatch(getIT());
        break;
      case '/internet':
        dispatch(getInternet());
        break;
      default:
        break;
    }
  }
  render() {
    const { newslist } = this.props;
    return (
      <div className="PanelDiv">
        <PanelGroup>
          {
            newslist.map((item, index) => (
              <Panel header={item.title} key={item.id}>
                <a href={item.link} onClick={this.open}>{item.summary}</a>
                <Label bsStyle="success">{item.published}</Label>
              </Panel>
            ))
          }
        </PanelGroup>
      </div>
    );
  }
}

NewsList.propTypes = {
  newslist: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    newslist: state.getNewsReducer.newslist
  };
}
export default connect(mapStateToProps)(NewsList);

