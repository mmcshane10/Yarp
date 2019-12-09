import React from 'react';

function Header(){
  let centerText = {
    textAlign: 'center'
  };
  return(
    <div style={centerText}>
      <h1>YARP</h1>
      <h3>Yepicodus Academic Research Portal</h3>
    </div>
  );
}


export default Header;