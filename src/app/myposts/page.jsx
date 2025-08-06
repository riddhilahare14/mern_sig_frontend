import Navbar from '@/components/Navbar';
import MyTweets from '@/components/MyTweets';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px] flex justify-center">
        <MyTweets />
      </div>
    </div>
  );
}
