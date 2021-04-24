import React from 'react';

import ProductForm from './forms/ProductForm';
import CommentForm from './forms/CommentForm';

function PopupForm(props) {
    const { type } = props;

    const FormView = type === 'product' ?
        <ProductForm details={props} /> :
        <CommentForm details={props} />;

    return (
        <div>
            {FormView}
        </div>
    )
}

export default PopupForm
