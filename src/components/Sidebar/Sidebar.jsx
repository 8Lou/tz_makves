import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            rotated: false // состояние вращения компонента 
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }), () => {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.style.width = this.state.isOpened ? '150px' : '45px';
            }
        });
    };

    rotateIcon = () => {
        this.setState((prevState) => {
            const rotated = !prevState.rotated;
            const direction = this.state.isOpened ? 1 : -1; // Если развернут, вращаем по часовой стрелке, иначе против
            return { rotated, rotationDirection: direction };
        });
    }; // меняем состояние `rotated`

    updateContainerWidth = () => {
        const container = document.querySelector('.sidebar');
        if (container) {
            container.classList.toggle('opened');
        }
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={containerClassnames}>
                <div className="logo">
                    <img className='logo'
                        src={logo}
                        alt="TensorFlow logo"
                    />
                    <span className='span span__logo'>{isOpened ? 'TensorFlow' : ''}</span>

                    <button
                        className={`button ${isOpened ? 'right' : 'left'}`}
                        onClick={this.toggleSidebar}
                        title={isOpened ? 'Shrink' : 'Expand'}
                    >
                        <FontAwesomeIcon
                            className={`rotate-icon ${this.state.rotated ? 'rotated' : ''}`}
                            icon={isOpened ? 'angle-left' : 'angle-right'}
                            onClick={this.rotateIcon}
                        />
                    </button>
                </div>

                <div className="sub-menu">
                    {routes.map((route) => (
                        <div key={route.title} className={`menu-item ${isOpened ? 'opened' : ''}`}
                            onClick={() => this.goToRoute(route.path)}>
                            <div className="div-icon">
                                <FontAwesomeIcon icon={route.icon} />
                            </div>
                            <span className='span__item'>{route.title}</span>
                        </div>
                    ))
                    }
                </div>

                <div className="sub-menu bottom-menu">
                    {bottomRoutes.map((route) => (
                        <div key={route.title} className={`menu-item ${isOpened ? 'opened' : ''}`}
                            onClick={() => this.goToRoute(route.path)}>
                            <div className="div-icon">
                                <FontAwesomeIcon className='icon' icon={route.icon} />
                            </div>
                            <span>{route.title}</span>
                        </div>
                    ))
                    }
                </div>
            </div >
        );
    }
}
