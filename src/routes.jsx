import {
  HomeIcon,
  UserCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  MapIcon,
} from "@heroicons/react/24/solid";
import { HomePage, ProfilePage, MapPage } from "src/pages/dashboard";
import { SignInPage, SignUpPage } from "src/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <HomePage />,
      },
      {
        icon: <MapIcon {...icon} />,
        name: "map",
        path: "/map",
        element: <MapPage />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
];

export default routes;
