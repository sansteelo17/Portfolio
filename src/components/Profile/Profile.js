import { projects } from "@/helpers/projects";
import SectionDivider from "../UI/SectionDivider";
import SectionTitle from "../UI/SectionTitle";
import ProfileItem from "./ProfileItem";

const Profile = () => {
  return (
    <div className="flex-column text-white" id="projects">
      <SectionDivider />

      <SectionTitle>Projects</SectionTitle>
      <div
        className="flex-column p-8 pb-0 lg:p-12 lg:grid lg:gap-x-12 lg:gap-y-8 place-items-center"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))" }}
      >
        {projects.map(({ id, title, desc, image, tech, link }) => (
          <ProfileItem
            key={id}
            id={id}
            title={title}
            desc={desc}
            image={image}
            tech={tech}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
