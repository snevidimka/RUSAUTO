const Button = (params) => {
  const { label, className = '', onClick } = params;
  const button = document.createElement('button');
  button.innerText = label;
  button.onclick = onClick;
  button.className = `btn ${className}`;
  return button;
};

export default Button;
