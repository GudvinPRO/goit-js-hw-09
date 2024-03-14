const formSet = document.querySelector('.feedback-form');
const inputInfo = formSet.elements.email;
const areaInfo = formSet.elements.message;

const loadFormState = () => {
  const parsedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (parsedInfo !== null) {
    areaInfo.value = parsedInfo.message;
    inputInfo.value = parsedInfo.email;
    return parsedInfo;
  }
  return { email: '', message: '' };
};

const saveFormState = () => {
  const email = inputInfo.value.trim();
  const message = areaInfo.value.trim();
  const saveInfo = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(saveInfo));
  return saveInfo;
};

const clearFormState = () => {
  localStorage.removeItem('feedback-form-state');
  formSet.reset();
};

const handleSubmit = evt => {
  evt.preventDefault();
  const emailValue = inputInfo.value.trim();
  const messageValue = areaInfo.value.trim();
  if (emailValue.length === 0 || messageValue.length === 0) {
    console.log(`Please fill in all fields.`);
  } else {
    const saveInfo = saveFormState();
    console.log(saveInfo);
    clearFormState();
  }
};

formSet.addEventListener('input', saveFormState);
formSet.addEventListener('submit', handleSubmit);

// Load form state when the page loads
const initialFormState = loadFormState();