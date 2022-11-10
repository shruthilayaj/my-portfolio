import { Grid } from '@chakra-ui/react'
import { ProjectCard, ProjectProps } from '../components/ProjectCard'

const PROJECTS: ProjectProps[] = [{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
},
{
  imageUrl: 'https://via.placeholder.com/500X300',
  imageAlt: 'Sit amet porttitor eget dolor',
  title: 'Sit amet porttitor eget dolor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  link: 'https://placeholder.com',
}]

export function Projects() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {PROJECTS.map((project: ProjectProps, index) => {
        return <ProjectCard key={index} imageUrl={project.imageUrl} imageAlt={project.imageAlt} title={project.title} description={project.description} link={''} />
      }
      )}
    </Grid>
  )
}
