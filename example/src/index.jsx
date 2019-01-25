import React from 'react';
import { render } from 'react-dom';
import GiftMessage from '../../src/GiftMessage.react';

render(
    <GiftMessage
        className="giftmessage"
        maxLength={ 34 }
        lines={ 4 }
        remainingWording={ 'characters remaining' }/>,
    document.getElementById('app')
);
