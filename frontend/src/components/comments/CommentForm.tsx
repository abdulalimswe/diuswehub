import React, { useState } from "react";

const CommentForm: React.FC<{
    onSubmit: (text: string) => void;
    placeholder?: string;
}> = ({ onSubmit, placeholder = "Add a comment..." }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onSubmit(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-2">
            <input
                type="text"
                className="border bg-gray-100 rounded-full p-2 w-full"
                placeholder={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    );
};

export default CommentForm;