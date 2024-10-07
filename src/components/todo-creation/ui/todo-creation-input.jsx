import PropTypes from "prop-types"

TodoCreationInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  todoText: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
}

export function TodoCreationInput({
  placeholder,
  todoText,
  handleInputChange,
}) {
  return (
    <input
      className="w-full px-[55px] py-[22px] text-lg rounded-[5px] tracking-[-0.01em] border-none focus:outline-none shadow-[0_35px_50px_-15px_rgba(194,_195,_214,_0.5)]"
      value={todoText}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  )
}
