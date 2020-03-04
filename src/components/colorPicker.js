import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setColor } from '../actions/colorSelector';

class ColorPicker extends PureComponent{
    render() {
        return (
            <div className='colorPickerMain'>
                {
                    this.props.allColors.map((color, key) => {
                        return (
                            <React.Fragment key={key}>
                                <div
                                className='colorSquare'
                                style={{backgroundColor: color}}
                                key={key}
                                onClick={() => this.props.setColor(color)}
                                >
                                    {color}
                                </div>
                            </React.Fragment>
                        );
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    allColors: state.colors.allColors
})

const mapDispatchToProps = {
    setColor
}

ColorPicker.propTypes = {
    allColors: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);