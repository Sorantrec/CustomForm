import React from 'react';
import stylesModule from './Submit.module.scss';

const Submit = ({ validateForm }) => {
  return (
    <label className={stylesModule.submit} onClick={(e) => validateForm(e)}>
      <input type="submit" />
      <p className={stylesModule.title}>Continue</p>
      <svg className={stylesModule.icon} width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16.2065 4.24205L12.5131 0.40564L11.8551 1.08938L15.1658 4.52768H-0.000244141V5.54762H14.9496L11.7363 8.88538L12.4355 9.61179L16.9946 4.87674L16.2951 4.15001L16.2065 4.24205Z" fill="white" />
      </svg>
    </label>
  )
}

export default Submit;