import { Text, Box } from '@mantine/core';

export function Footer() {
  return (
    <Box component="footer" py="md" style={{ borderTop: '1px solid #232326', background: '#18181b', marginTop: 32 }}>
      <Text size="sm" c="#fff" ta="center">
        Built with ❤️ using Next.js and Mantine
      </Text>
    </Box>
  );
} 