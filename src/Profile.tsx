import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent } from "react";
import Card from "./Card";
import MainLayout from "./MainLayout";

export const Profile: FunctionComponent = () => {
  const { user: authUser } = useAuth0();

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
