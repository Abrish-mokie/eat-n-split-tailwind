function Button({ children, onClick }) {
  return (
    <button
      className='bg-orange-400 py-2 px-3 cursor-pointer rounded-md font-bold order-4'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
