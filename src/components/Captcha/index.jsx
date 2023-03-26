function Captcha({
  captcha,
  input,
  setInput,
  isValid,
  setIsValid,
  CAPTCHA_LENGTH,
}) {
  function handleChange(event) {
    setInput(event.target.value);
    setIsValid(event.target.value === captcha);
  }

  return (
    <div className='flex items-center'>
      <div className='flex-1 mr-4'>
        <label htmlFor='captcha' className='sr-only'>
          Captcha
        </label>
        <input
          type='text'
          id='captcha'
          name='captcha'
          value={input}
          onChange={handleChange}
          placeholder={`Enter the ${CAPTCHA_LENGTH}-character code`}
          className={`block w-full px-3 py-2 ${
            isValid ? 'bg-green-300' : 'bg-gray-300'
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          required
        />
      </div>
      <div className='flex-none'>
        <img
          src={`https://dummyimage.com/120x40/000/fff&text=${captcha}`}
          alt={`Captcha: ${captcha}`}
          className='block rounded-md shadow-sm'
        />
      </div>
    </div>
  );
}

export default Captcha;
