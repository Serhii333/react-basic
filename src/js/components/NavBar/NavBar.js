import React, {Component} from 'react';
import {Link} from 'react-router'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        //  this.store = this.props;
    }


    //
    // logout(e) {
    //   e.preventDefault();
    //   this.props.actions.logoutUser();
    // }

    render() {


        return (
            <header>


                <nav className="top-nav">

                    <div className="right">

                        <Link to='/' onlyActiveOnIndex={true} activeClassName='active'>Головна</Link>

                        <Link to='/editor' activeClassName='active'>Фоторедактор</Link>

                        <Link to='/gallery' activeClassName='active'>Галерея</Link>
                        <a href="#"> Больше</a>

                    </div>


                </nav>

            </header>
        );
    }
}
