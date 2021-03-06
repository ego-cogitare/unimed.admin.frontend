import React from 'react';
import Partials from './partials';
import UI from '../../core/ui';
import Settings from '../../core/helpers/Settings';
import { subscribe, dispatch } from '../../core/helpers/EventEmitter';
import { get } from '../../actions/Settings';
import '../../staticFiles/js/app';
import '../../staticFiles/css/AdminLTE.css';
import '../../staticFiles/css/custom-scrollbars.css';
import '../../staticFiles/css/skins/skin-blue.min.css';
import '../../staticFiles/css/Custom.css';

export default class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false
    };
  }

  // Get bootstrap settings
  componentDidMount() {
    get(
      (config) => {
        // Apply configuration
        Settings.apply(config);

        // Set page loaded flag to true
        this.setState({ pageLoaded: true });

        // Broadcast settings event
        dispatch('settings:sync', config);
      },
      (e) => {
        dispatch('notification:throw', {
          type: 'danger',
          title: 'Ошибка',
          message: e.responseJSON.error
        });
      }
    );
  }

  render() {
    // Do not instantiate application until settins is loaded
    if (this.state.pageLoaded) {
      return (
        <div className="hold-transition skin-blue sidebar-mini layoutboxed">
          <UI.Notifications limit="3" />
          <UI.Popup />
          <div className="wrapper">
            <Partials.Header />
            <Partials.LeftMenu />
            <Partials.Content children={this.props.children} />
            <Partials.Footer />
          </div>
        </div>
      );
    }
    return null;
  }
}
