import React from 'react';

// 内联样式
var style = {
  backgroundColor: '#EEE'
};

export default class Hello extends React.Component {
   render() {
      return <div className="box">
         <h1 className="MyComponent-wrapper" style={style}>Hello World</h1>
         <div>
            <span className="icon-indexIcon"></span>
         </div>
      </div>;
   }
}