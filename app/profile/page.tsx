'use client'
import { FC} from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";

import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";


type Props = {};

const Page: FC<Props> = (props) => {
 
  const {user} = useSelector((state:any) => state.auth);

  return (
    <div className="min-h-screen">
      <Protected>
        <Heading
          title={`${user?.name} SpringBee Profile - Personalized Access to IT Consultancy Services`}
          description="Access your personalized profile at SpringBee to manage projects, track progress, and collaborate with our team of IT experts. Update your information, view past interactions, and stay informed about upcoming developments tailored to your needs."
          keywords="Profile, IT consultancy services, project management, collaboration, IT experts, personalized access, SpringBee updates"
        />
        
        <Profile user={user} />

      </Protected>
    </div>
  );
};

export default Page;
