import React from 'react';
import {AppStateType} from '../../redux/store';
import Header from './Header';
import {connect} from 'react-redux';
import {logoutUser, setUserLoginData} from '../../redux/auth_reducer';


class HeaderContainer extends React.Component<HeaderPropsType, AppStateType> {
    componentDidMount() {
        this.props.setUserLoginData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateType = {
    loginName: string | null
    email: string | null
    isAuth: boolean
}
type MapDispatchType = {
    setUserLoginData: () => void
    logoutUser: () => void
}
export type HeaderPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        loginName: state.auth.loginName,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps,
    {
        setUserLoginData,
        logoutUser
    })(HeaderContainer)