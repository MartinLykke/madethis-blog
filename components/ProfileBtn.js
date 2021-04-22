import { User } from "react-feather";

const ProfileBtn = (props) => {
  return (
    <div>
      <a class="btn btn-sm btn-outline-primary " href="/profile">
        <User />
        {props.firstname}
      </a>
    </div>
  );
};

export default ProfileBtn;
