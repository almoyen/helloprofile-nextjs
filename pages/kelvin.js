import React, { useState } from "react";
import ProfilePageContainer from "../components/ProfilePage/ProfilePageContainer";
import SaveProfile from "../components/ProfilePage/SaveProfile/SaveProfile";

export default function ProfilePage() {
  const [saveProfileOpen, setSaveProfileOpen] = useState(false);
  return saveProfileOpen ? (
    <SaveProfile setSaveProfileOpen={setSaveProfileOpen} />
  ) : (
    <ProfilePageContainer setSaveProfileOpen={setSaveProfileOpen} />
  );
}
