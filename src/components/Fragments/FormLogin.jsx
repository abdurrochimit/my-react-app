import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('username', event.target.username.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href="/products";
  };
  return (
    <form onSubmit={handleLogin} >
      <InputForm
        lable="Username"
        type="text"
        placeholder="masukan username"
        name="username" />
      <InputForm
        lable="Password"
        type="password"
        placeholder="******"
        name="password" />
      <Button variant="bg-blue-600 w-full" type="submit" >
        LOGIN
      </Button>
    </form>
  )
}

export default FormLogin;