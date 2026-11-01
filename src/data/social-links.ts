export interface SocialLink {
  id: string
  name: string
  url: string
  icon: string
  handle?: string
  primary?: boolean
}

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/avijit-bairagi/',
    icon: 'linkedin',
    handle: 'in/avijit-bairagi',
    primary: true
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/avijit-bairagi',
    icon: 'github',
    handle: 'github.com/avijit-bairagi',
    primary: true
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:ovi821@gmail.com',
    icon: 'mail',
    handle: 'ovi821@gmail.com',
    primary: true
  }
]
