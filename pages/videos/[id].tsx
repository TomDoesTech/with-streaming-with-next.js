import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import VideoPlayer from "../../components/VideoPlayer";

function VideoPage() {
  const router = useRouter();

  const { id } = router.query as { id: string };
  console.log({ id });

  return <VideoPlayer id={id} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { query: context.query },
  };
};

export default VideoPage;
