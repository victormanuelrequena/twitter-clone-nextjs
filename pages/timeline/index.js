import styles from '../../styles/routes/timeline.module.css';
import Link from 'next/link';
import AppLayout from '../../components/AppLayout';

export default function Timeline({ userName }) {
  return (
    <>
      <AppLayout>
        <h1 className={styles.title}>This is the timeline of {userName}</h1>
        <Link href='/'>Go Home</Link>
      </AppLayout>
    </>
  );
}

Timeline.getInitialProps = async () => {
  try {
    return fetch('http://localhost:3000/api/hello').then((res) => res.json());
  } catch (error) {
    return { userName: 'invalid' };
  }
};
