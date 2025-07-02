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
  primaryColor: 'red',
  colors: {
    dark: [
      '#18181b', // 0 - background
      '#232326', // 1
      '#2c2c31', // 2
      '#35353a', // 3
      '#3e3e44', // 4
      '#48484f', // 5
      '#52525a', // 6
      '#5c5c66', // 7
      '#666672', // 8
      '#70707e', // 9 - lightest
    ],
    red: [
      '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c'
    ],
  },
  fontFamily: 'Inter, sans-serif',
  headings: { fontFamily: 'Inter, sans-serif' },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
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