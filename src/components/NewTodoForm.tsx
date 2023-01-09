interface NewTodoFormProps {
  value: string,
  updateText: (str: string) => void,
  handleAction: () => void,
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        className="todo-inp"
        placeholder='New Todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button className="add-btn" onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;