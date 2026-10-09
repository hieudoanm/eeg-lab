'use client';

import { Button } from '@/components/ui/button';
import { ErrorState } from '@/components/states';

const AppError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <ErrorState
      title='The workspace could not be loaded'
      message={error.message || 'An unexpected error occurred.'}
      requestId={error.digest ?? null}
      action={<Button onClick={reset}>Try again</Button>}
    />
  );
};

export default AppError;
