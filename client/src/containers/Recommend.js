import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchTopRated } from "../store/actions/index";
import { getMovieRows } from "../getMovie";

class TopRated extends Component {
  constructor(props) {
    super(props)
    props.fetchTopRated();
  }

  render() {
    let movies;
    // Call getMoviesRows function only when we get the data back
    // from the API through redux
    if (this.props.topRated.data) {
      const url = `/collabs/top/${1}`;
      movies = getMovieRows(this.props.topRated.data, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">OUR RECOMMENDATIONS FOR YOU</h1>
        <div className="movieShowcase__container">{movies}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { topRated: state.topRated };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTopRated }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRated);
