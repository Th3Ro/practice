import React from 'react';
import '../static/css/DialogComponent.css';

export default function BottomDialogComponent(props) {
    return (
        <div>
            <p class="bubble bubble-bottom" onClick={props.closePopup}>Какое то действие</p>
        </div>
    )
}
