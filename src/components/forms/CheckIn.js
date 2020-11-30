import Button from '../common/Button';
import { removeModal } from '../common/Modal';

const СheckIn = () => {
  const checkIn = document.createElement('div');
  checkIn.className = 'container';

  const heading = document.createElement('h1');
  heading.textContent = 'Регистрация';

  const info = document.createElement('p');
  info.textContent = 'Пожалуйста, заполните эту форму, чтобы создать учетную запись!';

  const fieldName = document.createElement('div');

  const labelName = document.createElement('label');
  fieldName.textContent = 'Имя';

  const inputName = document.createElement('Input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Введите Имя');
  inputName.setAttribute('name', 'имя');
  fieldName.appendChild(labelName);
  fieldName.appendChild(inputName);

  const fieldEmail = document.createElement('div');

  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email';

  const inputEmail = document.createElement('Input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('placeholder', 'Введите Email');
  inputEmail.setAttribute('name', 'email');
  fieldEmail.appendChild(labelEmail);
  fieldEmail.appendChild(inputEmail);

  const fieldPass = document.createElement('div');

  const labelPass = document.createElement('label');
  labelPass.textContent = 'Пароль';

  const inputPass = document.createElement('Input');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('placeholder', 'Введите пароль');
  inputPass.setAttribute('name', 'пароль');
  fieldPass.appendChild(labelPass);
  fieldPass.appendChild(inputPass);

  const button = Button({ label: 'Зарегистироваться', className: 'registerbtn' });
  button.setAttribute('type', 'submit');
  button.onclick = () => {
    const name = inputName.value;
    const email = inputEmail.value;
    const password = inputPass.value;

    const accountsString = localStorage.getItem('accounts');
    const accounts = JSON.parse(accountsString);
    if (
      accounts[0] !== undefined &&
      (accounts[0].name === name ||
        accounts[0].email === email ||
        accounts[0].password === password)
    ) {
      alert('Пользователь уже существует!');
    } else {
      const account = { name, email, password };
      accounts.push(account);
      const updatedAccountsString = JSON.stringify(accounts);
      localStorage.setItem('accounts', updatedAccountsString);
      removeModal();
      const login = document.getElementById('login');
      while (login.firstChild) {
        login.removeChild(login.firstChild);
      }
      const title = document.createElement('h4');
      title.className = 'username';
      title.textContent = name;
      login.appendChild(title);
    }
  };

  checkIn.appendChild(heading);
  checkIn.appendChild(info);
  checkIn.appendChild(fieldName);
  checkIn.appendChild(fieldEmail);
  checkIn.appendChild(fieldPass);
  checkIn.append(button);
  return checkIn;
};

export default СheckIn;
