import PropTypes from 'prop-types';
import React, {Component} from 'react';
import launcherIcon from './../../assets/logo-no-bg.svg';
import incomingMessageSound from './../../assets/sounds/notification.mp3';
import launcherIconActive from './../../assets/close-icon.png';
import './launcher.css';
import MessengerModal from '../messenger_modal/MessengerModal';

class Launcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            launcherIcon,
            isOpen: this.props.isOpen
        };
    }

    createModal() {
        const props = {
            isOpen: this.props.isOpen,
            toggle: this.props.handleChatModal,
        };

        return (
            <MessengerModal {...props}/>
        )
    }

    render() {
        const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
        const classList = [
            'sc-launcher',
            (isOpen ? 'opened' : ''),
        ];
        return (
            <div id="sc-launcher">
                <div className={classList.join(' ')} onClick={this.props.handleChatModal}>
                    <MessageCount count={this.props.newMessagesCount} isOpen={isOpen}/>
                    <img className={"sc-open-icon"} src={launcherIconActive}/>
                    <img className={"sc-closed-icon"} src={launcherIcon}/>
                    { this.createModal() }
                </div>
            </div>
        );
    }
}

const MessageCount = (props) => {
  if (props.count === 0 || props.isOpen === true) { return null }
  return (
    <div className={"sc-new-messages-count"}>
      {props.count}
    </div>
  )
}

Launcher.propTypes = {
    onMessageWasReceived: PropTypes.func,
    onMessageWasSent: PropTypes.func,
    newMessagesCount: PropTypes.number,
    isOpen: PropTypes.bool,
    handleClick: PropTypes.func,
    messageList: PropTypes.arrayOf(PropTypes.object),
    mute: PropTypes.bool,
    showEmoji: PropTypes.bool,
};

Launcher.defaultProps = {
    newMessagesCount: 0,
    showEmoji: true
}

export default Launcher;
