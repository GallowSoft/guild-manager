import { Group, Text, Avatar, Menu, MenuTarget, MenuDropdown, MenuItem, UnstyledButton, rem } from '@mantine/core';
import { IconChevronDown, IconLogout, IconSettings } from '@tabler/icons-react';

const navLinks = [
  { label: 'Main', href: '/' },
  { label: 'Roster', href: '/roster' },
  { label: 'Logs', href: '/logs' },
  { label: 'Calendar', href: '/calendar' },
];

const user = {
  name: 'Jane Doe',
  avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Jane',
};

export function TitleBar() {
  return (
    <Group justify="space-between" align="center" px="lg" py="md" style={{ borderBottom: '1px solid #eee', background: '#fff', position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Left: Navigation */}
      <Group gap="md">
        <Text fw={700} size="lg">Guild Manager</Text>
        {navLinks.map((link) => (
          <UnstyledButton key={link.href} component="a" href={link.href} style={{ padding: rem(4), borderRadius: rem(4), fontWeight: 500 }}>
            {link.label}
          </UnstyledButton>
        ))}
      </Group>
      {/* Right: User Info */}
      <Menu shadow="md" width={180} position="bottom-end">
        <MenuTarget>
          <UnstyledButton style={{ display: 'flex', alignItems: 'center', gap: rem(8), padding: rem(4), borderRadius: rem(4) }}>
            <Avatar src={user.avatar} radius="xl" size={32} />
            <Text fw={500}>{user.name}</Text>
            <IconChevronDown size={18} />
          </UnstyledButton>
        </MenuTarget>
        <MenuDropdown>
          <MenuItem leftSection={<IconSettings size={16} />} component="a" href="/settings">
            User Settings
          </MenuItem>
          <MenuItem leftSection={<IconLogout size={16} />} color="red">
            Logout
          </MenuItem>
        </MenuDropdown>
      </Menu>
    </Group>
  );
} 