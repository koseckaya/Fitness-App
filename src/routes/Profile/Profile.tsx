import "./Profile.scss";
import { Container } from "../../components/Container";
import { Preferences } from "../../components/Preferences";
import { CompletedChallenges } from "../../components/CompletedChallenges";
import * as React from "react";
import { TabPanel, useTabs } from "react-headless-tabs";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useTabs(["preferences", "challenges"]);

  return (
    <Container>
      <div className="tab-menu__wrapper">
        <nav className="tab-menu">
          <TabSelector
            isActive={selectedTab === "preferences"}
            onClick={() => setSelectedTab("preferences")}
          >
            Personal Info
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "challenges"}
            onClick={() => setSelectedTab("challenges")}
          >
            Started Challenges
          </TabSelector>
        </nav>
        <div className="tab-view">
          <TabPanel hidden={selectedTab !== "preferences"}>
            <Preferences />
          </TabPanel>
          <TabPanel hidden={selectedTab !== "challenges"}>
            <CompletedChallenges />
          </TabPanel>
        </div>
      </div>
    </Container>
  );
};
export default Profile;

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button className={`${isActive ? "button-active" : ""}`} onClick={onClick}>
    {children}
  </button>
);
