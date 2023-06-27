import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { children, title } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
                <p className='font-medium text-slate-500 mb-8'>Wellcome, Pelase Enter your details</p>
                {children}
                <Navigation type={title}/>
            </div>
        </div>
    )
}

const Navigation = (props) => {
    const {type} = props;
   
    if (type === "Login") {
        return (
            <p className="text-sm mt-4 text-center">
                Don't have an account ? {" "} 
            <Link to="/register" className="font-bold text-blue-600">
                Register
           </Link>
          
       </p>
            )
    }else{
        return (
            <p className="text-sm mt-4 text-center">
                Already have an account ? {" "} 
            <Link to="/login" className="font-bold text-blue-600">
                Login
           </Link>
       </p>
            )
    }
    
}

export default AuthLayout;