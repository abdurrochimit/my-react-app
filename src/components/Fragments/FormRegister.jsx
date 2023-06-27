import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
    return (
        <form action="">
        <InputForm lable="Full Name" type="text" placeholder="nama lengkap" name="fullname" />
        <InputForm lable="Email" type="email" placeholder="Email Anda" name="email" />
        <InputForm lable="Password" type="password" placeholder="******" name="password" />
        <InputForm lable="Confirm Password" type="password" placeholder="******" name="confirmpassword" />
        <Button variant="bg-blue-600 w-full">Register</Button>
      </form>
    )
}

export default FormRegister;