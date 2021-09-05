import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Results from '../components/Results';
import HeaderFback from '../components/HeaderFback';

class FeedBack extends Component {
  render() {
    const { assertions } = this.props;
    const feedBack = 3;
    return (
      <>
        <HeaderFback />
        <Results />
        <p data-testid="feedback-text"> FeedbackScreen</p>
        { assertions < feedBack
          ? <p data-testid="feedback-text">Podia ser melhor...</p>
          : <p data-testid="feedback-text">Mandou bem!</p>}
      </>
    );
  }
}

FeedBack.propTypes = {
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.gameInfo.assertions,
});

export default connect(mapStateToProps, null)(FeedBack);
