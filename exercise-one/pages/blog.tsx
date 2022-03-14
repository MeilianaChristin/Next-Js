import Layout from '../components/layout';

function Blog(props:any) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog Page">
      <p> Blog Page </p>
      {dataBlog.map((blog:any) => (
        <div key={blog.id} style={{ height: '80px', backgroundColor: 'red', margin: '5px' }}>
          <p>{blog.title}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>

  );
}

export default Blog;

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
