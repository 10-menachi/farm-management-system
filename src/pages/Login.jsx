import {
  Card,
  Input,
  Button,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import Skeleton from "../components/Skeleton";
import { useNavigate } from "react-router";

export default function Login() {
  const { loginUser, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (loading) {
    return <Skeleton />;
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(userData.email, userData.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error.message));

    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={true} className="w-full max-w-md p-7">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Log back into your account
        </Typography>
        <form className="mt-8 mb-2 w-full" onSubmit={handleLogin}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Remember me
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Log In
          </Button>
          <Button variant="outlined" className="mt-6" fullWidth>
            Passwordless login
          </Button>
        </form>
      </Card>
    </div>
  );
}
