import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Root from '../components/Root';
import * as ClientActions from '../actions/client';

function mapStateToProps(state) {
  return {
    client: state.client
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
