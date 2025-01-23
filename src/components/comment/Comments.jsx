import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import "./Comments.css";

export function Comment() {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: user?.username || "Anonyme",
      date: new Date(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="comment-section">
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Écrire un commentaire..."
          className="comment-textarea"
        />
        <button type="submit" className="comment-button">Ajouter un commentaire</button>
      </form>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p className="comment-author">
              <strong>{comment.author}</strong> - {comment.date.toLocaleString()}
            </p>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}