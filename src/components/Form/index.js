import React from 'react';
import './style.scss';

const Form = ({ title = 'Форма' }) => {
  return (
    <>
      <form className='app-form form'>
        <h1 className='form__title'>{title}</h1>
        <div className='form__body'>
          <div className='form__group'>
            <label htmlFor='email' className='form__label'>
              Эл. почта
            </label>
            <input
              type='email'
              name='email'
              className='form__input'
              placeholder='name@domain.com'
            />
          </div>
          <div className='form__group'>
            <label htmlFor='password' className='form__label'>
              Пароль
            </label>
            <input type='password' name='password' className='form__input' />
          </div>
          <div className='form__group'>
            <label>
              <input
                type='checkbox'
                name='remebmer'
                className='form__checkbox'
              />{' '}
              <span>Запомнить меня</span>
            </label>
          </div>
          <div className='form__group'>
            <button type='submit' className='form__submit'>
              Войти
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
