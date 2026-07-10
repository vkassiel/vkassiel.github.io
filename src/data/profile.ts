// Domain model — see CONTEXT.md. Single source of content for the landing.

export type Profile = {
  name: string
  role: string
  tagline: string
}

export type SocialLink = {
  label: string
  href: string
  icon: 'mail' | 'github' | 'linkedin'
}

export const profile: Profile = {
  name: 'Vitor Almeida',
  role: 'Software engineer',
  tagline:
    'Backend engineer working in TypeScript, Node and Go — resilient microservices, integrated ERPs and distributed systems on AWS.',
}

export const socialLinks: SocialLink[] = [
  { label: 'kassielalmeida@gmail.com', href: 'mailto:kassielalmeida@gmail.com', icon: 'mail' },
  { label: 'github.com/vkassiel', href: 'https://github.com/vkassiel', icon: 'github' },
  { label: 'linkedin.com/in/vitoralmd', href: 'https://www.linkedin.com/in/vitoralmd', icon: 'linkedin' },
]
