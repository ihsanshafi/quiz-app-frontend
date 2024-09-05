const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
