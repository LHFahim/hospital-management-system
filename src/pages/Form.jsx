import React, { useState } from 'react';

function Form(props) {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  function handleClick(event) {
    props.getLoginDetail(login);
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLogin(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <section className="login-container w-11/12 mx-auto">
        <div className="flex flex-col items-center justify-center h-screen space-y-5">
          <div className="space-y-5 p-20 rounded-3xl border-2 border-violet-500 bg-violet-300">
            <h1 className="text-center uppercase md:tracking-wide text-xl md:text-3xl font-extrabold text-violet-900">
              Please login to the system
            </h1>

            <form className="space-y-5 text-center flex flex-col items-center">
              <div className="space-x-5 text-violet-900">
                <label
                  className="tracking-wide text-blue-900 font-semibold"
                  htmlFor="username"
                >
                  Username:
                </label>
                <input
                  onChange={handleChange}
                  value={login.username}
                  className="placeholder-blue-500 rounded-lg text-center py-3 border border-blue-900"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Type your username"
                />
              </div>

              <div className="space-x-5 text-violet-900">
                <label
                  className="tracking-wide text-blue-900 font-semibold"
                  htmlFor="lname"
                >
                  Password:
                </label>
                <input
                  onChange={handleChange}
                  value={login.password}
                  className="placeholder-blue-500 rounded-lg text-center py-3 border border-blue-900"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Type your password"
                />
              </div>

              <button
                onClick={handleClick}
                className="py-3 px-5 w-3/4 tracking-wide bg-violet-900 text-white rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Form;
