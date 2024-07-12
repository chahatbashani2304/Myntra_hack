

import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validate';
// import './CSS/Form.css';
import errorIcon from '../Components/Assets/icon-error.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Form() {
   const [isSubmitted, setIsSubmitted] = useState(false);

   const submitForm = () => {
      setIsSubmitted(true);
   };

   const { handleChange, values, handleSubmit, errors } = useForm(
      submitForm,
      validate
   );
   

   return (
      <section className="form__container">
         <div className="form__btn form__btn--trial">
            <h3 className="form__btn--trial-text"><span>Fill the details to avail coupons</span></h3>
         </div>
         <form onSubmit={handleSubmit}>
            <div className={errors.firstName ? 'form__input-container border-red' : 'form__input-container'}>
               <input
                  className={errors.firstName ? 'form__input error' : 'form__input'}
                  placeholder="Name"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
               />
               {errors.firstName && <img className="error-img" src={errorIcon} alt="error: enter valid first name" />}
            </div>
            {errors.firstName && <label className="error__text">{errors.firstName}</label>}
            <div className={errors.lastName ? 'form__input-container border-red' : 'form__input-container'}>
               <input
                  className={errors.lastName ? 'form__input error' : 'form__input'}
                  placeholder="Fabric of Cloth"
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
               />
               {errors.lastName && <img className="error-img" src={errorIcon} alt="error: enter valid last name" />}
            </div>
            {errors.lastName && <label className="error__text">{errors.lastName}</label>}
            <div className={errors.address ? 'form__input-container border-red' : 'form__input-container'}>
               <input
                  className={errors.address ? 'form__input error' : 'form__input'}
                  placeholder="Address Line"
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
               />
            </div>
            <div className={errors.postcode ? 'form__input-container border-red' : 'form__input-container'}>
               <input
                  className={errors.postcode ? 'form__input error' : 'form__input'}
                  placeholder="Postcode"
                  type="text"
                  name="postcode"
                  value={values.postcode}
                  onChange={handleChange}
               />
               {errors.postcode && <img className="error-img" src={errorIcon} alt="error: a postcode should be 6 characters long" />}
            </div>
            {errors.postcode && <label className="error__text">{errors.postcode}</label>}
            <button className="form__btn form__btn--submit" type="submit">
               Scan QR
            </button>
            {isSubmitted && <p className="form__text"><span>Congratulations you are now eligible for reward points which will be reflected in your account after picking of order</span></p>}
            <div className="form__social-share-container">
               <p className="form__text">Share on social media to avail extra points</p>
               <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="form__social-link">
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
               </a>
            </div>
         </form>
      </section>
   );
}
