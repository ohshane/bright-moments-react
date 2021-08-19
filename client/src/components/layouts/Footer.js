import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <p>Bright Moments &copy; {year} Shane Oh</p>
    </div>
  );
};

export default Footer;