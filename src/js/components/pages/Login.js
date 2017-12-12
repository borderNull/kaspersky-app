import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/common/Button';

import * as asyncActions from '../../actions/async';
import * as pageActions from '../../actions/page';

class Login extends React.Component {

	componentWillMount(){
		const { props } = this;		
		if (props.profile){
			props.redirect('/');
		}
	}

	render(){
		const { props } = this;

		return (
			<div className="app__page login">

				<div className="app__content">
						<div className="app__logo-placeholder">

					<span className="kaspersky-logo"></span>

				</div>

					<div className="login__content">
                        <p className="login__slogan">
                            мам, еще 5 минуток!
							</p>
						<h1 className="login__title">
							Что делают наши дети в интернете?
						</h1>

						<p className="login__text text">
							
							
								Электронный дневник, обучающие ресурсы, книги, презентации — всем этим ежедневно пользуются школьники. Отказать ребёнку в доступе к глобальной сети невозможно, и главный аргумент школьника — «он нужен мне для учёбы!» Но что открыто в браузере ребёнка, пока родителей нет дома: тренажер по математике или сайт со взрослым контентом? «Лаборатория Касперского» и «Дневник.ру» подготовили тест для родителей, чтобы вы могли понять, защищен ли ваш ребёнок в интернете.
						

						</p>

							<div className="login__button-placeholder">

								<Button 
									size="m"
									color="red"
									type="button"
									onClickHandler={props.login}
								>
									Пройти тест
								</Button>

						</div>

					</div>
					
				</div>

			</div>
		);
	}
}

Login.propTypes = {
	mixClass: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	login: () => dispatch(asyncActions.login()),
	redirect: (page) => dispatch(pageActions.setPageWithoutHistory(page)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
