import React from 'react';

import ProductForm from './Forms/ProductForm';
import CommentForm from './Forms/CommentForm';

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
