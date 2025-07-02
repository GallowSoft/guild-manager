import { Card, Stack, Title, Text } from '@mantine/core';

const newsItems = [
  { title: 'Guild Raid Success!', date: '2024-06-01', content: "Our guild completed the Dragon's Lair raid with no casualties. Congratulations to all members!" },
  { title: 'Upcoming Event: PvP Tournament', date: '2024-06-05', content: 'Sign up for the guild PvP tournament. Prizes for the top 3 teams!' },
];

export function News() {
  return (
    <Stack gap="md" my="md">
      <Title order={2} size="h2" c="#fff">News</Title>
      {newsItems.map((item, idx) => (
        <Card key={idx} shadow="md" padding="md" radius="md" withBorder style={{ background: '#232326', color: '#fff', border: '1px solid #35353a' }}>
          <Title order={4} c="#fff">{item.title}</Title>
          <Text size="xs" c="#bbb" mb="xs">{item.date}</Text>
          <Text c="#fff">{item.content}</Text>
        </Card>
      ))}
    </Stack>
  );
} 