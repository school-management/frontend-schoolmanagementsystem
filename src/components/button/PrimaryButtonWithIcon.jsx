import React, { Component } from 'react'
import PrimaryButton from './PrimaryButton';
import theme from '../../theme/theme';
import DoubleTickIcon from '../icon/DoubleTickIcon';

const style = {
    width: "10em"
}

export default class PrimaryButtonWithIcon extends Component {
    render() {
        return (
            <div>
                {/* <PrimaryButton><img src={Icon} alt={theme.text.altText} /></PrimaryButton> */}
                <PrimaryButton style={style}><DoubleTickIcon /></PrimaryButton>
            </div>
        )
    }
}

