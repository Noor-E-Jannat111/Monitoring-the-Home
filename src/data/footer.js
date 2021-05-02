import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    id: uuidv4(),
    title: 'Safe Haven',
    links: ['Why SafeHaven', 'For Sale', 'For Rent'],
  },
  {
    id: uuidv4(),
    title: 'Legal',
    links: ['Terms & Conditions', 'Privacy Policy', 'Cookies'],
  },
  {
    id: uuidv4(),
    title: 'Get in touch',
    links: ['info@safehaven.com', '+23475839876'],
  },
  {
    id: uuidv4(),
    title: 'Resources',
    links: ['Become an agent', 'Blog'],
  },
  {
    id: uuidv4(),
    title: 'Follow us',
    links: ['Twitter', 'Facebook', 'Instagram'],
  },
]

export default data
