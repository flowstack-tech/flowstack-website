import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link  onClick={() =>{
            window.open('mailto:team@flowstack.in')
          }}>Contact Us</Link>
        </li>
        <li>
          <Link>+91-7206823623</Link>
        </li>
        {/*<li>*/}
        {/*  <Link to="#0">About us</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to="#0">FAQ's</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to="#0">Support</Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}

export default FooterNav;
