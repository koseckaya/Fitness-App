import './Profile.scss';
import { Container } from "../../components/Container";
import { Preferences } from "../../components/Preferences";
import { TabItem, Tabs } from '../../components/Tabs';
import { CompletedChallenges } from '../../components/CompletedChallenges';

const Profile = () => {

  return (
    <Container>
      <Tabs defaultIndex='1'>
        <TabItem label="Personal Info" index="1">
          <Preferences />
        </TabItem>
        <TabItem label="Started Challenges" index="2">
          <CompletedChallenges />
        </TabItem>
      </Tabs>
    </Container>
  );
}
export default Profile;
