import  { useState } from 'react';

const PostForm = ({ onAdd }) => {
  const [form, setForm] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.content) {
      alert('All fields are required!');
      return;
    }
    onAdd(form);
    setForm({ title: '', content: '' });
  };

  return (
    <form
      className="bg-gray-100 p-4 mb-4 rounded"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Title"
        className="block w-full p-2 mb-2 border rounded"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        className="block w-full p-2 mb-2 border rounded"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
