'use client';

import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: 'blue',
  fontFamily: 'Inter, sans-serif',
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <ModalsProvider>
        <Notifications />
        <Spotlight
          shortcut={['mod + K']}
          actions={[
            {
              id: 'home',
              label: 'Home',
              description: 'Go to home page',
              onClick: () => console.log('Home'),
            },
            {
              id: 'docs',
              label: 'Documentation',
              description: 'Visit documentation',
              onClick: () => console.log('Documentation'),
            },
          ]}
          nothingFound="Nothing found..."
          highlightQuery
          searchProps={{
            leftSection: <IconSearch size={16} />,
            placeholder: 'Search...',
          }}
        />
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
} 