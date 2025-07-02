import { Card, Stack, Title, Text } from '@mantine/core';

const blogPosts = [
  { title: 'How to Organize a Successful Guild Event', author: 'Jane Doe', date: '2024-05-28', excerpt: 'Tips and tricks for planning and executing memorable guild events.' },
  { title: 'Guild Leadership 101', author: 'John Smith', date: '2024-05-20', excerpt: 'A guide to effective leadership and management in online communities.' },
];

export function BlogPosts() {
  return (
    <Stack gap="md" my="md">
      <Title order={2} size="h2">Blog Posts</Title>
      {blogPosts.map((post, idx) => (
        <Card key={idx} shadow="sm" padding="md" radius="md" withBorder>
          <Title order={4}>{post.title}</Title>
          <Text size="xs" c="dimmed" mb="xs">By {post.author} • {post.date}</Text>
          <Text>{post.excerpt}</Text>
        </Card>
      ))}
    </Stack>
  );
} 