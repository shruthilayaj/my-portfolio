import { Box, Image, Link } from '@chakra-ui/react'

export type ProjectProps = {
  title: string,
  description: string,
  imageUrl: string,
  imageAlt: string,
  link: string;
}


export function ProjectCard(props: ProjectProps) {
  return (
    <Box maxW='500px' borderWidth='1px' borderRadius='lg' overflow='hidden' alignContent='center'>
      <Link href={props.link}>
        <Image src={props.imageUrl} alt={props.imageAlt} align='center' />
      </Link>
      <Box p='4'>
        <Box
          mt='1'
          fontWeight='semibold'
          noOfLines={1}
          textAlign='left'
        >
          {props.title}
        </Box>

        <Box fontSize='sm' textAlign='left'>
          {props.description}
        </Box>
      </Box>
    </Box>
  )
}