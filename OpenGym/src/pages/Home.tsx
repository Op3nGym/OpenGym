import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { gql } from '../../src/__generated__/gql';
const client = new ApolloClient({
  uri: '/api/catalog/graphql',
  cache: new InMemoryCache(),
});

//Docs: https://www.apollographql.com/docs/react/development-testing/static-typing/

const GET_COURSES = gql(`
  query GetCourses {
    courses {
      nodes{
        title
        courseId
        credits
      }
    }
  }
`);


const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_COURSES, { client });

  const results = data?.courses?.nodes?.map(({ courseId, title, credits }) => (
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
        {
         loading ? <p>Loading...</p> 
         : error ? <p>Error : {error.message}</p>
         : results
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
