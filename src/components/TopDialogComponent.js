import React from 'react';
import '../static/css/DialogComponent.css';

export default function TopDialogComponent(props) {
    return (
        <div className="bubble bubble-top">
            <a href={props.link}  onClick={props.closePopup} target="_blank" rel="noreferrer">Открыть оригинал</a>
        </div>
    )
}
