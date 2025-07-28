import { useNavigate } from "react-router-dom";
import SmartMoneySlider from "../components/SmartMoneySlider";
import { useBodyHtml } from "../components/useBodyHtml";

const MainLayout = () => {
  const navigate = useNavigate();
useBodyHtml();

  return (
    <SmartMoneySlider/>
  );
};

export default MainLayout;