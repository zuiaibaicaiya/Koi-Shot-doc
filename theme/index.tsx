// Learn how to customize the theme: https://rspress.rs/guide/basic/custom-theme
import './index.css';
import { Layout as OriginalLayout } from '@rspress/core/theme-original';
import { Footer } from './components/Footer';
import { HomeAudience } from './components/HomeAudience';

export * from '@rspress/core/theme-original';
export { Footer } from './components/Footer';
export { HomeAudience } from './components/HomeAudience';
export { RoleShowcase } from './components/RoleShowcase';

export function Layout() {
  return (
    <OriginalLayout
      afterFeatures={<HomeAudience />}
      bottom={<Footer />}
    />
  );
}
