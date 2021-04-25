import React from 'react';
import BtnCreateElement from '../BtnCreateElement';

import './CommentsList.scss';

function CommentsList({ comments }) {
    return (
        <div className="comments-list">
            <h4>
                Comments:
            </h4>
            <BtnCreateElement nameBtn={'+Add comment'} type={'comment'} />

            {comments.length > 0 ? comments.map(item => {
                return (
                    <div className="comment" key={item.id}>
                        <div className="comment__del">x</div>
                        <p>{item.text}</p>

                        <div className="comment__bottom">
                            <span>Дата:</span> {item.date}
                        </div>
                    </div>
                )
            }) : <p className="empty-list"> No comments to display </p>}
        </div>
    )
}

export default CommentsList
