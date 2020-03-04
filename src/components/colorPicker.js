import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setColor } from '../actions/colorSelector'

function ColorPicker(props) {
        return (
            <div className='colorPickerMain'>
                {
                    props.allColors.map((color, key) => {
                        return (
                            <React.Fragment key={key}>
                                <div
                                className='colorSquare'
                                style={{backgroundColor: color}}
                                key={key}
                                onClick={() => props.setColor(color)}
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

const mapStateToProps = (state) => ({
    allColors: state.colors.allColors
})

const mapDispatchToProps = {
    setColor
}

ColorPicker.prototype = {
    allColors: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);