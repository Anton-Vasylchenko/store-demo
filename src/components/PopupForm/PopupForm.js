import React from 'react';

import ProductForm from './forms/ProductForm';
import CommentForm from './forms/CommentForm';

import './PopupForm.scss';

function PopupForm(props) {
    const { type } = props;

    const FormView = type === 'form' ?
        <ProductForm details={props} /> :
        <CommentForm details={props} />;

    return (
        <div>
            {FormView}
        </div>
    )
}

export default PopupForm
