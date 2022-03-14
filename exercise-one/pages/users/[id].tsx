/* eslint-disable import/no-unresolved */
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

interface User {
  id:string,
  name:string,
  phone:string,
  email:string,
}
interface UserDetailProps {
  user:User
}

function UserDetail(props:UserDetailProps) {
  const router = useRouter();
  const { id } = router.query;
  const { user } = props;
  return (
    <>
      {/* cek localhost:3000/users/meiliana terus ganti christin */}
      <Layout pageTitle="Users Detail Page">
        <div>
          User Detail Page
          {' '}
          {id}
        </div>
        <p>{user.name}</p>
        <p>{user.phone}</p>
      </Layout>
    </>
  );
}

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user:User) => ({
    params: {
      id: `${user.id}`,
    },

  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params:{
    id:string
  }
}

export async function getStaticProps(context:GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
