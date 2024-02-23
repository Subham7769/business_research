import "./SidebarChip.css";

const SidebarChip = ({ name, index }) => {
  return (
    <div className="SidebarChip" key={index}>
      <p>{name}</p>
    </div>
  );
};

export default SidebarChip;
