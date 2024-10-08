import { Navbar, Typography, Button, Input } from "@material-tailwind/react";
import AvatarComponent from "./Avatar";
import PropTypes from "prop-types";

export function NavBar({ logOut }) {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto my-4 max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Dashboard
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">{/* Icons */}</div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
        <div className="flex gap-4 mx-6">
          <AvatarComponent logOut={logOut} />
        </div>
      </div>
    </Navbar>
  );
}

NavBar.propTypes = {
  logOut: PropTypes.func.isRequired,
};
