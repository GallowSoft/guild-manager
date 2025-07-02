import { Card, Stack, Title, Text } from '@mantine/core';

const newsItems = [
  { title: 'Guild Raid Success!', date: '2024-06-01', content: "Our guild completed the Dragon's Lair raid with no casualties. Congratulations to all members!" },
  { title: 'Upcoming Event: PvP Tournament', date: '2024-06-05', content: 'Sign up for the guild PvP tournament. Prizes for the top 3 teams!' },
];

export function News() {
  return (
    <Stack gap="md" my="md">
      <Title order={2} size="h2">News</Title>
      {newsItems.map((item, idx) => (
        <Card key={idx} shadow="sm" padding="md" radius="md" withBorder>
          <Title order={4}>{item.title}</Title>
          <Text size="xs" c="dimmed" mb="xs">{item.date}</Text>
          <Text>{item.content}</Text>
        </Card>
      ))}
    </Stack>
  );
} 