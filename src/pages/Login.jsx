import {
  Card,
  Input,
  Button,
  Typography,
  Checkbox,
} from "@material-tailwind/react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={true} className="w-full max-w-md p-7">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Log back into your account
        </Typography>
        <form className="mt-8 mb-2 w-full">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
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
          <Button className="mt-6" fullWidth>
            Log In
          </Button>
        </form>
      </Card>
    </div>
  );
}
