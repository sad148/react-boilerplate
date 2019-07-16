import * as React from 'react';
import { connect } from 'react-redux'
import searchUsers from '../Actions/SearchUsers';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: "Saurabh",
          users: []
      }
  }
  componentDidMount() {
    this.props.dispatch(searchUsers(this.state.name));
  }

componentWillReceiveProps(nextProps) {
  // console.log(this.props, nextProps);
  this.setState({
    users: nextProps.users.config.url
  })
}

  render() {
    return <div>Hello {this.state.users}</div>;
  }
 }
 
const mapStateToProps = (store) => {
  return{
    users: store.users,
    fetchingUsers: store.fetchingUsers
  }
}

 export default connect(mapStateToProps)(App);
 