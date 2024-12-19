const TodoCard = () => {
  return (
    <div className="bg-white rounded-xl p-3 flex justify-between items-center">
      <input type="checkbox" name="" id="" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
