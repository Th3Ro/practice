import React from 'react';
import '../static/css/DialogComponent.css';

export default function TopDialogComponent(props) {

    return (
        <div>
            <p class="bubble bubble-top" onClick={props.closePopup}>Какое то действие</p>
        </div>
    )
}
