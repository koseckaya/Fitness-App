import './Profile.scss';
import { Container } from "../../components/Container";
import { Preferences } from "../../components/Preferences";
import { TabItem, Tabs } from '../../components/Tabs';


const Profile = () => {

  return (
    <Container>
      <Tabs defaultIndex='1' onTabClick={console.log}>
        <TabItem label="Personal Info" index="1">
          <Preferences />
        </TabItem>
        <TabItem label="Started Challenges" index="2">
          Dolor sit amet
        </TabItem>
      </Tabs>
    </Container>
  );
}

export default Profile;