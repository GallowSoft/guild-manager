import { Title, Text, Stack } from '@mantine/core';

export function Hero() {
  return (
    <Stack gap="xs" align="center" my="xl">
      <Title order={1} size="h1" mb="md">
        Welcome to Guild Manager
      </Title>
      <Text size="lg" c="dimmed">
        A modern guild management application built for your community
      </Text>
    </Stack>
  );
} 