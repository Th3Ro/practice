import React, { Component } from 'react';
import '../static/css/NewsComponent.css';
import gitLogo from '../static/images/gitLogo.png';
import menu from '../static/images/menu.png';
import TopDialog from '../components/TopDialogComponent';
import BottomDialog from '../components/BottomDialogComponent';

export default class NewsComponent extends Component {
    state = {
        showDialog: false,
        isTopDialog: true
    };

    // функция открытия диалога
    togglePopup(e) {
        this.setState({
            showDialog: !this.state.showDialog
        })
        let headerRect = document.getElementById("header").getBoundingClientRect(),
        element = e.target,
        elemRect = element.getBoundingClientRect(),
        offset   = elemRect.top - headerRect.top;
        if(offset > 160) {
            this.setState({
                isTopDialog: true
            })
        }
        else{
            this.setState({
                isTopDialog: false
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.showDialog ? 
                    this.state.isTopDialog ?
                    <TopDialog
                        closePopup={this.togglePopup.bind(this)}
                        link={this.props.newsObject.link}
                    />
                    :
                    <BottomDialog
                        closePopup={this.togglePopup.bind(this)}
                        link={this.props.newsObject.link}
                    />
                    : null 
                }
                <div className="news-block">
                    <div className="news-header-block">
                        <img src={gitLogo} alt="Git logo" className="git-logo"></img>
                        <h2 className="news-header-text">{this.props.newsObject.title}</h2>
                        <img src={menu} alt="menu" className="menu" onClick={this.togglePopup.bind(this)}></img>
                    </div>
                    <div className="news-text-block">
                        <p className="news-text" dangerouslySetInnerHTML={{__html: this.props.newsObject.content}} />
                    </div>
                </div>
            </div>
        )
    }
}
