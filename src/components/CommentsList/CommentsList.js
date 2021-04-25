import React from 'react';
import BtnCreateElement from '../BtnCreateElement';
import Comment from '../Comment';

import './CommentsList.scss';

function CommentsList({ updateAllComments, commentsList, product }) {
    const onCreateComment = (obj) => {
        product.comments.push(obj);
        updateAllComments(product);
    }

    const onDeleteComment = (id) => {
        const allComments = product.comments;
        const updateComment = allComments.filter(function (obj) {
            return obj.id !== id;
        });
        product.comments = updateComment;
        updateAllComments(product);
    }

    const listIsEmpty = <p className="empty-list"> No comments to display </p>;

    const allComments = Object.keys(commentsList).length ?
        commentsList.map(item => {
            return (
                <Comment
                    key={item.id}
                    item={item}
                    onDelete={onDeleteComment}
                />)
        }) : listIsEmpty

    return (
        <div className="comments-list">
            <h4>
                Comments:
            </h4>

            <BtnCreateElement
                nameBtn={'+Add comment'}
                type={'comment'}
                handleSubmit={onCreateComment}
            />

            {allComments}
        </div>
    )
}

export default CommentsList;
