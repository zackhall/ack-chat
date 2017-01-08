import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Client from '../components/Client';
import * as ClientActions from '../actions/client';

function mapStateToProps(state) {
  return {
    channels: state.client.channels,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Client);