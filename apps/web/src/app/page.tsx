'use client';

import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Card, 
  Stack,
  TextInput,
  Select,
  Checkbox,
  Switch,
  Slider,
  Progress,
  Badge,
  Alert,
  Code,
  Divider
} from '@mantine/core';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function HomePage() {
  const [value, setValue] = useState(50);

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <div>
          <Title order={1} size="h1" mb="md">
            Welcome to Guild Manager
          </Title>
          <Text size="lg" c="dimmed">
            A modern guild management application built with Next.js and Mantine
          </Text>
        </div>

        {/* Demo Cards */}
        <Group gap="md" wrap="wrap">
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ flex: 1, minWidth: 300 }}>
            <Card.Section withBorder inheritPadding py="xs">
              <Group justify="space-between">
                <Text fw={500}>Form Components</Text>
                <Badge color="blue">Demo</Badge>
              </Group>
            </Card.Section>

            <Stack gap="md" mt="md">
              <TextInput
                label="Guild Name"
                placeholder="Enter guild name"
                description="This will be displayed to other players"
              />
              
              <Select
                label="Guild Type"
                placeholder="Choose guild type"
                data={[
                  { value: 'pve', label: 'PvE Focused' },
                  { value: 'pvp', label: 'PvP Focused' },
                  { value: 'social', label: 'Social' },
                  { value: 'competitive', label: 'Competitive' }
                ]}
              />

              <Group gap="md">
                <Checkbox label="Public Guild" defaultChecked />
                <Switch label="Auto-accept members" />
              </Group>

              <div>
                <Text size="sm" fw={500} mb="xs">Member Limit</Text>
                <Slider
                  value={value}
                  onChange={setValue}
                  min={10}
                  max={100}
                  step={5}
                  marks={[
                    { value: 10, label: '10' },
                    { value: 50, label: '50' },
                    { value: 100, label: '100' }
                  ]}
                />
                <Text size="xs" c="dimmed" mt="xs">Current: {value} members</Text>
              </div>
            </Stack>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ flex: 1, minWidth: 300 }}>
            <Card.Section withBorder inheritPadding py="xs">
              <Group justify="space-between">
                <Text fw={500}>UI Components</Text>
                <Badge color="green">Active</Badge>
              </Group>
            </Card.Section>

            <Stack gap="md" mt="md">
              <div>
                <Text size="sm" fw={500} mb="xs">Guild Progress</Text>
                <Progress value={75} size="xl" radius="xl" />
                <Text size="xs" c="dimmed" mt="xs" ta="center">75%</Text>
              </div>

              <Group gap="xs">
                <Button leftSection={<IconCheck size={16} />} color="green">
                  Accept
                </Button>
                <Button leftSection={<IconX size={16} />} color="red" variant="outline">
                  Decline
                </Button>
              </Group>

              <Alert icon={<IconAlertCircle size={16} />} title="Notice" color="blue">
                This is a demo of Mantine components. You can customize the theme and add more components as needed.
              </Alert>

              <Code>npm install @mantine/core @mantine/hooks</Code>
            </Stack>
          </Card>
        </Group>

        {/* Features Section */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={2} size="h3" mb="md">
            Features
          </Title>
          <Group gap="lg" wrap="wrap">
            <Badge size="lg" variant="light">Responsive Design</Badge>
            <Badge size="lg" variant="light">Dark Mode Support</Badge>
            <Badge size="lg" variant="light">Accessible</Badge>
            <Badge size="lg" variant="light">TypeScript</Badge>
            <Badge size="lg" variant="light">Customizable</Badge>
            <Badge size="lg" variant="light">SSR Ready</Badge>
          </Group>
        </Card>

        <Divider />

        {/* Footer */}
        <Text size="sm" c="dimmed" ta="center">
          Built with ❤️ using Next.js and Mantine
        </Text>
      </Stack>
    </Container>
  );
}
