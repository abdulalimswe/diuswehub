import React, { useState } from "react";
import Comment, { CommentType } from "./Comment";
import CommentForm from "./CommentForm";

const Comments: React.FC = () => {
    const [comments, setComments] = useState<CommentType[]>([
        {
            id: 1,
            text: "This is the first comment",
            replies: [
                {
                    id: 2,
                    text: "This is a reply",
                    replies: [],
                },
            ],
        },
    ]);

    const addComment = (text: string) => {
        setComments([
            ...comments,
            { id: Date.now(), text, replies: [] },
        ]);
    };

    const addReply = (text: string, parentId: number) => {
        const addReplyRecursive = (comments: CommentType[]): CommentType[] => {
            return comments.map((comment) => {
                if (comment.id === parentId) {
                    return {
                        ...comment,
                        replies: [
                            ...comment.replies,
                            { id: Date.now(), text, replies: [] },
                        ],
                    };
                }
                return {
                    ...comment,
                    replies: addReplyRecursive(comment.replies),
                };
            });
        };

        setComments(addReplyRecursive(comments));
    };

    return (
        <div className="mt-4 p-2">
            <div className="border rounded-md">
                <h2 className="font-bold p-1">Comments</h2>
                <CommentForm onSubmit={addComment} />
            </div>
            <div className="space-y-4">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} onReply={addReply} />
                ))}
            </div>
        </div>
    );
};

export default Comments;