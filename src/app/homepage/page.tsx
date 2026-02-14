import type { Metadata } from 'next';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Homepage - Ansu Tech Solutions',
  description: 'Your trusted technology partner for reliable IT infrastructure, proactive maintenance, and 24/7 support. Explore comprehensive networking, hardware, software, and AMC solutions designed to keep your business running smoothly.',
};

export default function Homepage() {
  return <HomepageInteractive />;
}