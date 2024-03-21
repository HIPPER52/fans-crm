import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./admin.css";

export default function Admin() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Feed />
      </div>
    </>
  );
}
