import React from 'react';
import './MainPage.scss'
import PageTitle from './PageTitle';
import DecisionButton from './DecisionButton';
import CreateSessionPage from './CreateSessionPage';

function MainPage(props) {

	return (
<div className = "MainPage">
	<PageTitle title="ByDesign"/>
	<DecisionButton link="/CreateSessionPage" buttonStyle= {{marginTop: "5%",backgroundColor:'#FD5B78', height: "300px"}} buttonContent = "Create an Ideate Session"/>
	<DecisionButton link="/JoinSessionPage" buttonStyle= {{marginTop: "5%", backgroundColor:'#50BFE6', height: "300px"}} buttonContent = "Join an Ideate Session"/>
</div>
);
}

export default MainPage;
