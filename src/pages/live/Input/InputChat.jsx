import React from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Importing the icon

const CommentInput = () => {
  return (
    <div className="flex items-center bg-gray-900 text-white rounded-full px-4 py-2">
      <input
        type="text"
        placeholder="Type your comments.."
        className="bg-transparent flex-grow outline-none text-sm placeholder-gray-400"
      />
      <button className="ml-2">
        <FaPaperPlane className="text-red-500" />
      </button>
    </div>
  );
};

export default CommentInput;
