import { useState } from "react"; 
  
function PrintHello( {name,age,bio}) {
  const [showDetails, setShowDetails] = useState(false);
  const toogleShowDetails = () => {
    setShowDetails(!showDetails);
  }
  const studentCard = {
    border: "1px solid #333",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#f4f4f4",
    hover: "cursor",
    width: "100%"
  };
  return (
    <div style={studentCard}>
        <h3 onClick={toogleShowDetails}>{name} ({age})</h3>
        {showDetails?(<p>{bio}</p>):""}
    </div>
  );
}
export default PrintHello;
