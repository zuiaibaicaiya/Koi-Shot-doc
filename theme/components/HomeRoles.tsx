import { useLang, usePage } from '@rspress/core/runtime';
import { RoleShowcase } from './RoleShowcase';

const content = {
  zh: {
    title: '应用场景',
    subtitle: '六类典型用户，各自用哪几个核心功能？一眼对照。',
  },
  en: {
    title: 'Use Cases',
    subtitle:
      'Six typical user profiles — which core features do they rely on? Compare at a glance.',
  },
} as const;

export function HomeRoles() {
  const { pageType } = usePage();
  const lang = useLang();
  if (pageType && pageType !== 'home') return null;
  const c = content[lang] ?? content.en;
  return (
    <section className="koishot-home-roles">
      <h2 className="koishot-home-roles__title">{c.title}</h2>
      <p className="koishot-home-roles__subtitle">{c.subtitle}</p>
      <RoleShowcase showIntro={false} />
    </section>
  );
}
