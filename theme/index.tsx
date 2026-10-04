// Learn how to customize the theme: https://rspress.rs/guide/basic/custom-theme
import './index.css';
import { Layout as OriginalLayout } from '@rspress/core/theme-original';
import { Footer } from './components/Footer';
import { HomeAudience } from './components/HomeAudience';
import { HomeRoles } from './components/HomeRoles';

export * from '@rspress/core/theme-original';
export { Footer } from './components/Footer';
export { HomeAudience } from './components/HomeAudience';
export { HomeRoles } from './components/HomeRoles';
export { RoleShowcase } from './components/RoleShowcase';

export function Layout() {
  return (
    <OriginalLayout
      afterFeatures={
        <>
          <HomeRoles />
          <HomeAudience />
        </>
      }
      bottom={<Footer />}
    />
  );
}
