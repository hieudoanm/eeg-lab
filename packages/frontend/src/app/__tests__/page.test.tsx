import { describe, expect, it, vi } from 'vitest';

const { redirect } = vi.hoisted(() => ({ redirect: vi.fn() }));

vi.mock('next/navigation', () => ({ redirect }));

import RootPage from '@/app/page';

describe('RootPage', () => {
  it('redirects to the dashboard', () => {
    RootPage();

    expect(redirect).toHaveBeenCalledWith('/app/dashboard');
  });
});
