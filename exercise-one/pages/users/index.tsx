import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import styles from '../../styles/Users.module.css';

interface UsersProps {
  dataUsers:Array<any>
}

function Users(props:UsersProps) {
  const router = useRouter();
  const { dataUsers } = props;
  // console.log('data user:', dataUsers);
  return (
    <Layout pageTitle="Users Page">
      <h1 className={styles['title-homepage']}>Users Page</h1>
      {dataUsers.map((user:any) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card} aria-hidden="true">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
