import { useQuery } from "react-query";
import profileApi from "./profile-api";

const PROFILE_QUERY_KEY = "profile";

export const useProfile = () =>
  useQuery(PROFILE_QUERY_KEY, () => profileApi.getProfile());
