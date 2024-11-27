

const PostList = ({ posts, onDelete, onEdit }) => {
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white p-4 mb-2 rounded shadow"
        >
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
          <div className="mt-2">
            <button
              className="bg-red-500 text-white px-2 py-1 mr-2 rounded"
              onClick={() => onDelete(post._id)}
            >
              Delete
            </button>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={() =>
                onEdit(post._id, post.title, post.content)
              }
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
