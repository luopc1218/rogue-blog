export async function getServerSideProps() {
  return {
    redirect: {
      // 根路由重定向到主页
      destination: "/home",
      permanent: false,
    },
  };
}

export default function HomeRedirect() {
  return null;
}
