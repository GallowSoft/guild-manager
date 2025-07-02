import { Text, Box } from '@mantine/core';

export function Footer() {
  return (
    <Box component="footer" py="md" style={{ borderTop: '1px solid #eee', background: '#fafafa', marginTop: 32 }}>
      <Text size="sm" c="dimmed" ta="center">
        Built with ❤️ using Next.js and Mantine
      </Text>
    </Box>
  );
} 