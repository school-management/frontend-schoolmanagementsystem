import React from 'react';
import theme from '../../theme/theme';
import Icon from '../../assets/icons/icons8/doubletick.png';
import IconImg from './IconImg';

const DoubleTickIcon = () => {
    return (
        <div>
            <IconImg src={Icon} alt={theme.text.altText} />
        </div>

    );
}

export default DoubleTickIcon;
