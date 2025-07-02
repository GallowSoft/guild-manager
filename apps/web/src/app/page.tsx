'use client';

import { Hero } from '../components/Hero';
import { News } from '../components/News';
import { BlogPosts } from '../components/BlogPosts';
import { Container, Stack } from '@mantine/core';

export default function HomePage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Hero />
        <News />
        <BlogPosts />
      </Stack>
    </Container>
  );
}
