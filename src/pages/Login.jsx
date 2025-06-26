const Login = () => {
  return (
    <div>
      <h2>Log In</h2>
      <form className="space-y-6" action="">
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            E-mail
          </label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default Login;
