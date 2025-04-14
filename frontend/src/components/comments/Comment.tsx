import React, { useState } from "react";
import CommentForm from "./CommentForm";

export interface CommentType {
    id: number;
    text: string;
    replies: CommentType[];
}

const Comment: React.FC<{
    comment: CommentType;
    onReply: (text: string, parentId: number) => void;
}> = ({ comment, onReply }) => {
    const [showReply, setShowReply] = useState(false);

    return (
        <div className="ml-4 border-l pl-4 mb-2">
            <div className="mb-1">{comment.text}</div>
            <div className="text-xs mb-2">
                <button
                    className="cursor-pointer underline p-2"
                    onClick={() => setShowReply(!showReply)}
                >
                    Reply
                </button>
            </div>
            {showReply && (
                <CommentForm
                    placeholder="Write a reply..."
                    onSubmit={(text) => {
                        onReply(text, comment.id);
                        setShowReply(false);
                    }}
                />
            )}
            {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} onReply={onReply} />
            ))}
        </div>
    );
};

export default Comment;