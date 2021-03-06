import React from 'react';
import { Link } from 'react-router';
import User from '../../../core/helpers/User';
import { buildUrl } from '../../../core/helpers/Utils';
import { logout } from '../../../actions/Auth';

export default class LeftMenu extends React.Component {

  constructor(props) {
    super(props);

    // Get logged user data
    const loggedUser = JSON.parse(localStorage.getItem('user'));

    this.state = {
      loggedUser
    };
  }

  render() {
    return (
      <header className="main-header">
       <a href="/" className="logo">
         <span className="logo-mini"><b>A</b>LT</span>
         <span className="logo-lg"><b>Юнимед</b></span>
       </a>
       <nav className="navbar navbar-static-top" role="navigation">
         <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
           <span className="sr-only">Toggle navigation</span>
         </a>
         <div className="navbar-custom-menu">
           <ul class="nav navbar-nav">
             <li class="dropdown notifications-menu">
             </li>
             <li class="dropdown user user-menu">
               <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                 <img src={ User.avatar ? buildUrl({ path: '/avatars', name: User.avatar }) : require('../../../staticFiles/img/avatars/default.png') } class="user-image" alt="User Image" />
                 <span class="hidden-xs">{User.fullName}</span>
               </a>
             </li>
             <li>
               <Link to="orders" title="Перейти к управлению заказами">
                 <i class="fa fa-shopping-cart"></i>
                 <span class="label label-success">10</span>
               </Link>
             </li>
             <li>
               <Link to="settings">
                 <i class="fa fa-gears"></i>
               </Link>
             </li>
             <li>
               <a href="#" onClick={logout} data-toggle="control-sidebar"><i class="fa fa-sign-out"></i></a>
             </li>
           </ul>
         </div>
       </nav>
      </header>
    );
  }
}
