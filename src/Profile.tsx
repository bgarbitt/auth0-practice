import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent } from "react";
import Card from "./Card";
import MainLayout from "./MainLayout";
import { useProfile } from "./profile-hooks";

export const Profile: FunctionComponent = () => {
  const { user: authUser } = useAuth0();

  const { isLoading, data } = useProfile();

  if (!isLoading) console.log("profile endpoint data", data);

  if (!authUser) return null;

  const { name, picture, email } = authUser;

  return (
    <MainLayout>
      <Card title={`${name}'s Profile`}>
        <img src={picture} alt="Profile" />
        <h2>{name}</h2>
        <p>{email}</p>
      </Card>
    </MainLayout>
  );
};
