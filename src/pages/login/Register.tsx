import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input";
import { usePostRegister } from "../../api/user";
import { useNavigate } from "react-router-dom";
import ErrorSnackbar from "../../components/SnackBar";


const schema = z.object({
  username: z.string().min(1,"Campo obrigatório"),
  password: z.string().min(1,"Campo obrigatório")
});

type Schema = z.infer<typeof schema>;

const Login = () => {
  const { mutateAsync } = usePostRegister();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleCloseError = ()=> {setError(false)}
  
  const { handleSubmit, control } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const handleRegister = async (fields: Schema) => {
    try{
        await mutateAsync(fields);
        navigate("/");
    }
    catch(err){
      setError(true);
    }

  };
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
          <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>
            <div>
              <label className="text-gray-700 font-semibold">Username</label>
                <Input
                control={control}
                name="username"
                placeholder="Digite seu ursername"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="text-gray-700 font-semibold">Password</label>
                <Input
                type="password"
                control={control}
                name="password"
                placeholder="Digite sua senha"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="flex items-center justify-center">
              <button type="submit"
                className="mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Entrar
              </button>
            </div>
          </form>
        </div>
        {error && <ErrorSnackbar message="Username is already beeing used" onClose={handleCloseError} />}
      </div>
    );
  }
export default Login;