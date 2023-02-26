import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useQuery, gql } from '@apollo/client';

//TODO https://www.apollographql.com/docs/react/development-testing/static-typing/

const GET_COURSES = gql`
  query GetCourses {
    courses {
      courseId
      title
      credits
    }
  }
`;


const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const results = data.courses.map(({ courseId, title, credits }) => (
    <div key={courseId}>
      <h3>{title}</h3>
      <br />
      <b>Credits:</b>
      <p>{credits}</p>
      <br />
    </div>
  ))
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
        <br/>
        <br/>
        {results}
      </IonContent>
    </IonPage>
  );
};

export default Home;
