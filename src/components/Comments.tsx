// components/Comments.tsx
import { useState, useEffect, FormEvent } from 'react';
import { parse, formatDistanceToNow } from 'date-fns';

interface Comment {
  id: number;
  vendorId: string;
  comment: string;
  createdAt: string;
}

interface CommentsProps {
  vendorId: string;
}

export default function Comments({ vendorId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch(`/api/comments?vendorId=${vendorId}`);
      const data: Comment[] = await res.json();
      console.log('Fetched comments:', data);
      setComments(data);
    }
    fetchComments();
  }, [vendorId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vendorId, comment: newComment }),
    });

    if (res.ok) {
      const commentData: Comment = await res.json();
      setComments([commentData, ...comments]);
      setNewComment('');
    } else {
      console.error('Failed to add comment');
    }
  };

  // Function to parse the date and return relative time (e.g., "5 minutes ago")
  const getRelativeTime = (dateStr: string): string => {
    try {
      // Trim microseconds to milliseconds, if necessary.
      // Example: "2025-03-09 15:31:11.566512" -> "2025-03-09 15:31:11.566"
      const trimmedDateStr = dateStr.replace(
        /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\.(\d{3})\d*/,
        '$1.$2'
      );
      const parsedDate = parse(trimmedDateStr, 'yyyy-MM-dd HH:mm:ss.SSS', new Date());
      return formatDistanceToNow(parsedDate, { addSuffix: true });
    } catch (err) {
      console.error('Date parsing error:', err);
      return 'Unknown time';
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full border p-2 rounded-md"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          rows={4}
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-[#333333] text-white rounded-md">
          Add Comment
        </button>
      </form>
      <ul>
        {Array.isArray(comments) && comments.length > 0 ? (
          comments.map((com) => (
            <li key={com.id} className="mb-2 border-b pb-2">
              <p>{com.comment}</p>
              <div className="text-xs text-gray-500">
                {com.createdAt ? getRelativeTime(com.createdAt) : 'N/A'}
              </div>
            </li>
          ))
        ) : (
          <p>No comments found.</p>
        )}
      </ul>
    </div>
  );
}
