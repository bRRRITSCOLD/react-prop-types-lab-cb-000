// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return (
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Producer: {this.props.producer}</li>
          <li>Has Watermark: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>

      </div>
    )
  }
}
/*
function weightRange(props, propName, componentName){
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (value >= 80 && value <= 300 && typeof value === 'number') {
      return value;
    } else {
      return new Error(propName + " in ", + componentName + "is out of weight range.");
    }
  }
}*/
var weightRange = [];
for(let i = 80; i <= 300; i++) {
  weightRange.push(i);
}

console.log(weightRange);

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired

};

export default Product;
