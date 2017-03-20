import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import Title from 'react-title-component';
import 'bootstrap/dist/css/bootstrap.css';

@connect(
  state => ({
    locale: '',
  }),
  dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
  })
)

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>hello world</div>
        );
    }
};
