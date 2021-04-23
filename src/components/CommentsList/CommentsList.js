import React from 'react';

import './CommentsList.scss';

function CommentsList({ comments }) {
    return (
        <div className="comments-list">
            <h4>Коментарі</h4>

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
            }) : <p className="empty-list">Коменти відсутні :( </p>}
        </div>
    )
}

export default CommentsList
