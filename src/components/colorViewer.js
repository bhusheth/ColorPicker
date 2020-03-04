import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { clearColor } from '../actions/colorSelector';

class ColorViewer extends PureComponent {
    render() {
        return (
            <div
                className='ColorViewer'
                style={{ backgroundColor: this.props.selectedColor }}
            >
                {this.props.selectedColor ? 
                    `Selected Color ${this.props.selectedColor}` :
                    'Please select a color'   
                }
                <div>
                    <button onClick={() => this.props.clearColor()}>Clear Color!</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedColor: state.colors.selectedColor
});

const mapDispatchToProps = {
    clearColor
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorViewer);